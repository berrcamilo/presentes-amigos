/* =========================================================================
   LÓGICA DO SITE — normalmente não precisa editar este arquivo.
   Se você só quer trocar conteúdo (músicas, fotos, textos, nomes),
   edite o arquivo data.js, não este aqui.
   ========================================================================= */

// -------- Monta a lista de "slides" a partir do data.js --------
// Cada slide é: { kind: 'song', ... } ou { kind: 'divider', ... }
function buildSlides() {
  const slides = [];

  slides.push({ kind: "song", sectionId: "intro", chosenBy: INTRO.chosenBy, ...INTRO });

  FRIENDS.forEach((friend) => {
    slides.push({ kind: "divider", sectionId: friend.id, name: friend.name, photo: friend.photo, letter: friend.letter });
    friend.songs.forEach((song) => {
      slides.push({ kind: "song", sectionId: friend.id, chosenBy: friend.name, ...song });
    });
  });

  slides.push({ kind: "song", sectionId: "outro", chosenBy: OUTRO.chosenBy, ...OUTRO });

  return slides;
}

// -------- Pontos de navegação (pra barra fixa de nomes) --------
// Cada ponto leva direto pra tela "agora é a vez de..." daquele amigo
// (ou pro início/fim, no caso da abertura e do encerramento).
function buildNavPoints(slides) {
  const points = [{ sectionId: "intro", label: "Abertura", jumpIndex: 0 }];
  slides.forEach((slide, i) => {
    if (slide.kind === "divider") {
      points.push({ sectionId: slide.sectionId, label: slide.name, jumpIndex: i });
    }
  });
  points.push({ sectionId: "outro", label: "Encerramento", jumpIndex: slides.length - 1 });
  return points;
}

const SLIDES = buildSlides();
const TOTAL_SONGS = SLIDES.filter((s) => s.kind === "song").length;
const NAV_POINTS = buildNavPoints(SLIDES);

let currentIndex = 0;
let spotifyController = null;
let spotifyReady = false;
let pendingTrackId = null;

// -------- Elementos --------
const screens = {
  cover: document.getElementById("cover"),
  divider: document.getElementById("divider"),
  song: document.getElementById("song"),
  ending: document.getElementById("ending")
};

const friendNavEl = document.getElementById("friend-nav");

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
  // a barra fixa com os nomes só aparece durante as músicas/divisórias
  friendNavEl.classList.toggle("visible", name === "song" || name === "divider");
  // O mural de fotos (capa/final) só existe nessas duas telas, e precisa
  // ser recalculado toda vez que a tela fica visível — enquanto ela está
  // escondida (display:none) o navegador mede a largura/altura como 0,
  // então não dá pra calcular o mosaico antes disso.
  if (name === "cover" && typeof renderCoverWall === "function") renderCoverWall();
  if (name === "ending" && typeof renderEndingWall === "function") renderEndingWall();
}

// -------- Preenche textos fixos (nome da aniversariante) --------
// Título que aparece na aba do navegador — pega o nome automaticamente do
// ANIVERSARIANTE (lá no data.js), pra não precisar editar isso a cada amiga.
document.title = ANIVERSARIANTE + " — 30 anos 🎉";
document.getElementById("cover-name").textContent = ANIVERSARIANTE;
document.getElementById("cover-message").textContent = MENSAGEM_CAPA;
document.getElementById("ending-name").textContent = ANIVERSARIANTE;

// -------- Mural de fotos ao fundo (capa e final, em ordens diferentes) --------
// Junta as fotos "de momento" do site: a de abertura, a de encerramento e a
// de cada uma das 30 músicas. As fotos de perfil dos amigos (as que
// aparecem na tela "agora é a vez de...") ficam de fora do mural — elas
// servem só pra mostrar qual amigo escolheu aquelas músicas, não pra
// decorar o fundo da capa/final. Enquanto uma foto não existe, o
// quadrado dela só fica com uma cor suave (sem texto), assim o mural não
// fica poluído.
function collectAllPhotos() {
  const photos = [INTRO.photo, OUTRO.photo];
  FRIENDS.forEach((friend) => {
    friend.songs.forEach((song) => photos.push(song.photo));
  });
  return photos;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Calcula quantos "ladrilhos" cabem na tela inteira (largura x altura do
// próprio elemento — que já ocupa 100% da seção graças ao position:absolute
// + inset:0), pra nunca sobrar um pedaço sem foto, seja no celular ou no
// computador, com a tela do tamanho que for.
function countTilesNeeded(wallEl) {
  const TILE = 76 + 3; // grid-auto-rows (76px) + gap (3px), ver style.css
  const cols = Math.max(1, Math.floor((wallEl.clientWidth + 3) / TILE));
  const rows = Math.max(1, Math.ceil((wallEl.clientHeight + TILE) / TILE));
  return Math.min(cols * rows, 300); // limite de segurança pra telas gigantes
}

function renderPhotoWall(containerId, sourceList, shuffleEveryLap) {
  const wallEl = document.getElementById(containerId);
  if (!wallEl || !sourceList.length) return;
  wallEl.innerHTML = "";

  // Repete a lista de fotos (embaralhando cada "volta" extra) até ter
  // ladrilhos suficientes pra cobrir a tela toda, mesmo em telas grandes
  // onde as 30 fotos sozinhas não dariam conta.
  const needed = countTilesNeeded(wallEl);
  const tiles = [];
  while (tiles.length < needed) {
    const lap = shuffleEveryLap || tiles.length > 0 ? shuffleArray([...sourceList]) : [...sourceList];
    tiles.push(...lap);
  }

  tiles.slice(0, needed).forEach((photo) => {
    const tile = document.createElement("div");
    tile.className = "photo-wall-item";
    const img = document.createElement("img");
    img.alt = "";
    img.loading = "lazy";
    img.onerror = function () {
      img.style.display = "none";
    };
    img.src = photo;
    tile.appendChild(img);
    wallEl.appendChild(tile);
  });
}

const ALL_PHOTOS = collectAllPhotos();

// na capa, começa sempre na ordem definida; no final, sempre embaralhada,
// pra ficar diferente da capa.
function renderCoverWall() {
  renderPhotoWall("cover-photo-wall", ALL_PHOTOS, false);
}
function renderEndingWall() {
  renderPhotoWall("ending-photo-wall", ALL_PHOTOS, true);
}

// A capa já começa visível, então dá pra desenhar o mural dela direto.
// O do final só é desenhado quando aquela tela aparecer pela primeira vez
// (fica a cargo do showScreen lá em cima).
renderCoverWall();

// Refaz o mosaico da tela que estiver visível no momento, se a janela
// mudar de tamanho (ex.: girar o celular ou redimensionar no computador).
let photoWallResizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(photoWallResizeTimer);
  photoWallResizeTimer = setTimeout(function () {
    if (screens.cover.classList.contains("active")) renderCoverWall();
    if (screens.ending.classList.contains("active")) renderEndingWall();
  }, 250);
});

// -------- Foto com fallback bonito caso o arquivo não exista --------
// Se a foto não carregar, escondemos a <img> e mostramos um quadrado
// com as iniciais do nome no lugar, em vez do ícone de "imagem quebrada".
function setImageWithFallback(imgEl, src, label) {
  const wrap = imgEl.parentElement;
  let fallbackEl = wrap.querySelector(".img-fallback-label");
  if (!fallbackEl) {
    fallbackEl = document.createElement("div");
    fallbackEl.className = "img-fallback-label";
    wrap.appendChild(fallbackEl);
  }

  imgEl.onerror = null;
  imgEl.alt = "";
  imgEl.style.display = "";
  fallbackEl.style.display = "none";
  fallbackEl.textContent = initials(label);

  imgEl.onerror = function () {
    imgEl.style.display = "none";
    fallbackEl.style.display = "flex";
  };
  imgEl.onload = function () {
    imgEl.style.display = "";
    fallbackEl.style.display = "none";
  };
  imgEl.src = src;
}

function initials(name) {
  if (!name) return "♥";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

// -------- Spotify iFrame API --------
// Chamada automaticamente pelo script do Spotify quando a API carrega.
// (o nome "onSpotifyIframeApiReady" é fixo, não pode mudar)
let spotifyIsPaused = true;

window.onSpotifyIframeApiReady = function (IFrameAPI) {
  const element = document.getElementById("spotify-player");
  const firstTrackId = SLIDES[0].spotifyId;
  const options = {
    uri: "spotify:track:" + firstTrackId,
    width: "100%",
    height: 84
  };
  IFrameAPI.createController(element, options, function (controller) {
    spotifyController = controller;
    spotifyReady = true;

    controller.addListener("playback_update", function (e) {
      spotifyIsPaused = e.data.isPaused;
      const fallbackBtn = document.getElementById("play-fallback");
      if (!spotifyIsPaused) fallbackBtn.classList.remove("show");
    });

    if (pendingTrackId) {
      playTrackNow(pendingTrackId);
      pendingTrackId = null;
    }
  });
};

function playTrackNow(trackId) {
  const fallbackBtn = document.getElementById("play-fallback");
  fallbackBtn.classList.remove("show");
  spotifyIsPaused = true;
  try {
    spotifyController.loadUri("spotify:track:" + trackId);
    spotifyController.play();
  } catch (e) {
    fallbackBtn.classList.add("show");
  }
  // Se o navegador bloquear o autoplay com som (ex.: Safari em certos
  // casos), o player continua pausado — aí mostramos o botão manual.
  setTimeout(checkIfPlaying, 900);
}

function checkIfPlaying() {
  const fallbackBtn = document.getElementById("play-fallback");
  if (spotifyIsPaused) {
    fallbackBtn.classList.add("show");
  }
}

document.getElementById("play-fallback").addEventListener("click", function () {
  if (spotifyController) spotifyController.play();
});

// -------- Renderiza o slide atual --------
function renderSlide(index, { userTriggered } = { userTriggered: true }) {
  const slide = SLIDES[index];

  if (slide.kind === "divider") {
    showScreen("divider");
    document.getElementById("divider-name").textContent = slide.name;
    document.getElementById("divider-sub").textContent =
      slide.letter && slide.letter.trim() ? slide.letter : "escolheu estas músicas pra você";
    setImageWithFallback(
      document.getElementById("divider-photo"),
      slide.photo,
      slide.name
    );
    document.getElementById("divider-prev-btn").disabled = index === 0;
    renderFriendNav(slide.sectionId);
    return;
  }

  // slide.kind === "song"
  showScreen("song");

  const songNumber = SLIDES.slice(0, index + 1).filter((s) => s.kind === "song").length;
  document.getElementById("song-index").textContent = songNumber;
  document.getElementById("song-total").textContent = TOTAL_SONGS;
  document.getElementById("song-chosen-by").textContent =
    "Escolhida por " + slide.chosenBy;
  document.getElementById("song-text").textContent = slide.text || "";
  setImageWithFallback(
    document.getElementById("song-photo"),
    slide.photo,
    slide.chosenBy
  );

  renderFriendNav(slide.sectionId);

  document.getElementById("prev-btn").disabled = index === 0;
  document.getElementById("next-btn").textContent =
    index === SLIDES.length - 1 ? "finalizar ›" : "seguinte ›";

  if (userTriggered) {
    // Só tenta tocar automaticamente quando a troca de slide foi
    // resultado direto de um clique (isso é o que os navegadores exigem
    // para permitir autoplay com som).
    if (spotifyReady) {
      playTrackNow(slide.spotifyId);
    } else {
      pendingTrackId = slide.spotifyId;
    }
  }
}

// Monta (uma vez só) e destaca a barra fixa com o nome de cada amigo,
// pra ela poder pular direto pra qualquer parte a qualquer momento.
function renderFriendNav(currentSectionId) {
  if (friendNavEl.childElementCount !== NAV_POINTS.length) {
    friendNavEl.innerHTML = "";
    NAV_POINTS.forEach((point) => {
      const chip = document.createElement("button");
      chip.className = "friend-nav-chip";
      chip.textContent = point.label;
      chip.dataset.sectionId = point.sectionId;
      chip.addEventListener("click", () => goTo(point.jumpIndex));
      friendNavEl.appendChild(chip);
    });
  }
  Array.from(friendNavEl.children).forEach((chip) => {
    chip.classList.toggle("current", chip.dataset.sectionId === currentSectionId);
  });
}

// -------- Navegação --------
function goTo(index) {
  if (index < 0) return;
  if (index >= SLIDES.length) {
    showScreen("ending");
    if (spotifyController && typeof spotifyController.pause === "function") {
      spotifyController.pause();
    }
    return;
  }
  currentIndex = index;
  renderSlide(currentIndex, { userTriggered: true });
}

document.getElementById("start-btn").addEventListener("click", function () {
  currentIndex = 0;
  renderSlide(0, { userTriggered: true });
});

document.querySelectorAll(".next-btn, #next-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    goTo(currentIndex + 1);
  });
});

document.querySelectorAll("#prev-btn, #divider-prev-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    goTo(currentIndex - 1);
  });
});

document.getElementById("replay-btn").addEventListener("click", function () {
  currentIndex = 0;
  showScreen("cover");
  if (spotifyController && typeof spotifyController.pause === "function") {
    spotifyController.pause();
  }
});

// -------- Botão de presente extra (opcional, ligado pelo data.js) --------
if (typeof PRESENTE_ATIVADO !== "undefined" && PRESENTE_ATIVADO) {
  const revealWrap = document.getElementById("reveal-wrap");
  const revealBtn = document.getElementById("reveal-gift-btn");
  revealWrap.hidden = false;

  revealBtn.addEventListener("click", function () {
    revealBtn.disabled = true;
    revealBtn.textContent = "Presente revelado 🎉";

    const panel = document.getElementById("reveal-panel");
    document.getElementById("reveal-message").textContent = PRESENTE_MENSAGEM;
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add("show"));

    // Evita mandar o aviso de novo se ela recarregar a página depois.
    let jaAvisou = false;
    try { jaAvisou = localStorage.getItem("presenteAvisado") === "1"; } catch (e) {}

    const emailConfigurado =
      EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAIL_DESTINO;

    if (!jaAvisou && emailConfigurado && typeof emailjs !== "undefined") {
      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            to_email: EMAIL_DESTINO,
            message: "🎁 " + ANIVERSARIANTE + " acabou de revelar o presente no site! Bora mandar o Pix agora 💸"
          },
          EMAILJS_PUBLIC_KEY
        )
        .catch(function () {
          // Se der erro (sem internet, chave errada etc.), a revelação na
          // tela continua funcionando normalmente — só o aviso que falha.
        });
      try { localStorage.setItem("presenteAvisado", "1"); } catch (e) {}
    }
  });
}

// Link da playlist completa no Spotify (definido no data.js)
const spotifyLinkEl = document.getElementById("spotify-link");
if (typeof SPOTIFY_PLAYLIST_URL !== "undefined" && SPOTIFY_PLAYLIST_URL) {
  spotifyLinkEl.href = SPOTIFY_PLAYLIST_URL;
} else {
  spotifyLinkEl.style.display = "none";
}

// Navegação pelo teclado (setas)
document.addEventListener("keydown", function (e) {
  if (!screens.song.classList.contains("active") && !screens.divider.classList.contains("active")) return;
  if (e.key === "ArrowRight") goTo(currentIndex + 1);
  if (e.key === "ArrowLeft") goTo(currentIndex - 1);
});
