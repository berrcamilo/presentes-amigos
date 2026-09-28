/* =========================================================================
   CONTEÚDO DO SITE — EDITE SÓ ESTE ARQUIVO!
   =========================================================================
   Você não precisa saber programar. Só troque o que está entre aspas ' '.
   Não apague as vírgulas nem as chaves { }.

   COMO PEGAR O ID DE UMA MÚSICA NO SPOTIFY:
   Abra a música no Spotify (app ou site) -> clique nos "..." -> Compartilhar
   -> Copiar link da música. Vai vir um link assim:
   https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl?si=abc123
   O ID é a parte entre "/track/" e o "?":  11dFghVXANMlKmJXsNCbNl

   COMO COLOCAR AS FOTOS:
   Coloque os arquivos de foto (.jpg ou .png) dentro da pasta "images".
   Depois escreva o nome do arquivo no lugar de "images/exemplo.jpg".
   Se esquecer uma foto, o site mostra um quadrado bonito no lugar — não quebra nada.

   CARTINHA (opcional, por amigo):
   Se um amigo mandou uma mensagem maior (tipo uma cartinha) pra aparecer
   na tela "agora é a vez de..." dele, em vez da frase padrão "escolheu
   estas músicas pra você", é só adicionar o campo 'letter' dentro do
   objeto desse amigo, assim:
     letter: "Aqui vai a cartinha do amigo, pode ter\nquebras de linha assim."
   Use \n sempre que quiser pular uma linha dentro do texto.
   Se não adicionar esse campo (como nos amigos abaixo), o site continua
   usando a frase padrão normalmente — não precisa mexer em mais nada.
   ========================================================================= */

// Nome de quem vai receber o presente (aparece na capa do site)
const ANIVERSARIANTE = "Vivi";

// Mensagem que aparece na capa, antes de ela clicar para abrir
const MENSAGEM_CAPA = "Trinta anos, trinta músicas, sete amigos e muito amor!!! Aperte o play.";

// Link da playlist completa no Spotify (aparece no botão da tela final).
// Copie o link de compartilhamento da playlist (no Spotify: "..." -> Compartilhar -> Copiar link).
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/02mnf58cp2mm0ejjzcUorb?si=PdxKc9cBSg286sXWRao2oA&utm_source=copy-link&pi=l9l3OQ6tSYm3k";

// ---------- MÚSICA DE ABERTURA (escolhida por todo o grupo) ----------
const INTRO = {
  chosenBy: "Todos nós",
  spotifyId: "1AT5viFqaGU9Hu5smdNlgB", // troque pelo ID da música de abertura
  photo: "images/intro.jpeg",
  text: "Vivi, tivemos essa ideia de fazer um presentinho pra você pra comemorar essa data especial! Pensamos numa música que você fez marcar em todos nós e foi uma decisão unânime New Perspective. Eu (Berr) diria que é uma música que marcou não só o nosso grupo como outras pessoas da sala também e acredito que é a coisa mais linda saber que você foi a pessoa responsável por fazer uma CORE MEMORY (Divertida Mente) em todas as nossas vidas. A gente te ama muito e espero que esse presentinho mostre um pouco do quanto te amamos 🩵"
};

// ---------- MÚSICA DE ENCERRAMENTO (escolhida por todo o grupo) ----------
const OUTRO = {
  chosenBy: "Todos nós",
  spotifyId: "1ZNolq7VI7efGlh2hb2VVr", // troque pelo ID da música de encerramento
  photo: "images/outro.jpeg",
  text: "Essa é uma música muito linda e fala bastante sobre o nosso futuro, que estaremos sempre juntos em caminho ao sol. Como você é a nossa primeira BFF com 30 anos, achamos que é uma música perfeita pra essa próxima etapa da sua vida e estamos felizes que estaremos juntos com você 🩵"
};

// ---------- OS 7 AMIGOS, CADA UM COM 4 MÚSICAS ----------
// Troque "Nome do Amigo 1", os IDs do Spotify, as fotos e os textinhos.
// Pode reordenar os amigos mudando a ordem deles aqui na lista.
const FRIENDS = [
  {
    id: "amigo1",
    name: "Jubi",
    letter: `querida vitty,

eu lembro, como se fosse hoje, da primeira vez em que te vi. e nunca vou me esquecer desse dia, desse momento, porque foi quando eu conheci uma das amizades mais importantes da minha vida!

lembro de você sempre e agradeço profundamente por ter você como parte das minhas amizades de infância, daquelas com quem quero renovar os laços para o resto da vida.

obrigada por deixar minha vida mais divertida e interessante. não trocaria você por nada! você preenche um espaço no meu coração que é todinho seu, de verdade.

a vida adulta, o ranço de telas, meu tdah, questões financeiras e distância geográfica atrapalham a frequência das nossas interações, do nosso quality time. mas saiba que tem uma parte de mim que sempre está e estará disposta a passar mais tempo com você. amo tudo o que já vivemos juntas e amo tudo o que sei que podemos (e vamos viver).

te amo demais, meu amor! que essa nova década seja mais um lindo pedaço da sua jornada, que quero acompanhar sempre com muito amor 🥹🩷🩵💜💚🧡 obrigada por existir e ser do jeitinho que vc é! e obrigada por ter me dado meu apelido favorito hehehe

com carinho infinito,

jubi 💘✨`,
    photo: "images/amigo1.jpg",
    songs: [
      { spotifyId: "0laYHRpNTS6i8FXdupHkJ4", photo: "images/amigo1_musica1.jpg", text: "essa só me lembra o dia em que eu, você e a tutu fomos as únicas pessoas da sala que não foram pra chapada em 2011 🥹 foi um dia marcante da minha adolescência e acabou sendo um momento muito especial pra nós três, então eu agradeço muito por ter ficado no cecan com vocês 🩷🩷🩷 nós formamos uma fusão pop bem interessante, sabe? e o dia do passeio tornou essa realidade mais evidente pra mim 🥰💜" },
      { spotifyId: "4My8w8AA1JpG6E5SiAPvJL", photo: "images/amigo1_musica2.jpeg", text: "essa música é 100% a gente na época em que tinhamos a piada interna de que eu era uma meretriz! KKKKKKKK não sei se você sabe, mas nossa amizade foi uma das partes mais gostosas dessa época! esse período pré-intercâmbio, sabe? e agora lembrei de quando você me chamou pra caminhar pelo sudoeste pra me contar que ia sair do cecan e estudar por um semestre em escola pública kkkkkk❣️" },
      { spotifyId: "7KdF7Zac5eC9jutk9Qret4", photo: "images/amigo1_musica3.jpeg", text: "é impossível ouvir haim, principalmente se for o days are gone, e não lembrar de você (hoje em dia, lembro profundamente da nath bromberg também kkkkkk). eu associo haim, principalmente days are gone e principalmente the wire, total à época em que você morou no rio e teve seu despertar sáfico! 🧡🩷" },
      { spotifyId: "1u8c2t2Cy7UBoG4ArRcF5g", photo: "images/amigo1_musica4.png", text: "apesar de todos os pesares e das fubanguices da taylor swift, o 1989 jamais deixará de ser um álbum canônico na minha vida! e foi 100% você quem chamou minha atenção pro álbum, pro conceito dele e pro single blank space. eu juro por deus que blank space é uma das minhas músicas favoritas do mundo e mudou minha vida. o clipe me deixou completamente maluca também e eu lembro do momento em que cliquei no link que vc mandou e ouvi. provavelmente eu teria surtado por essa música independente da sua sugestão, mas sou muito grata por você ter sido definitivamente um agente catalisador de tudo que eu senti por essa música e por esse álbum. e isso reverberou num fascínio pela taylor swift que, após uma chama reacendida pela ângela, culminou em UM TCC, SABE????? mas quero que você tenha certeza de que foi muito impactante mesmo para a minha relação com o 1989!!!!! af, te amo muito 😭" }
    ]
  },
  {
    id: "amigo2",
    name: "Lele",
    letter: `Querida Vivi,

Gostaria de começar esse texto te relembrando de tudo que a gente já viveu juntas, mas com certeza você lembra muito mais e muito melhor do que eu… você sabe que passamos muitas fases juntas, já namoramos, já estivemos muito próximas falando todos os dias, já estivemos mais afastadas, em diferentes países mais de uma vez, e em diversas situações diferentes, mas continuamos sempre juntas. Não confio muito na minha memória sobre o passado, mas tenho uma confiança muito forte sobre o nosso futuro, de que estaremos juntas de qualquer forma.

Preciso muito da sua criatividade, da sua organização, da sua honestidade e da sua extroversão na minha vida, e ficaria muito sem chão sem isso. Você me equilibra, me completa e me faz ser cada vez melhor.

Espero que eu possa sempre estar na sua vida, perto ou longe, de qualquer jeito, estarei torcendo pela sua felicidade e seu sucesso.

Te amo muito muito mesmo, e fico muito feliz de poder te mandar texto de declaração de amor por mais um ano, assim como era na época dos depoimentos do orkut.

Te amo de novo,
Letícia`,
    photo: "images/amigo2.jpg",
    songs: [
      { spotifyId: "6BcqNZ7D3gI0ALivZMAvux", photo: "images/amigo2_musica1.jpeg", text: "obviamente não poderia de deixar essa de fora, já que lembra tanto a gente como tem a letra perfeita!!" },
      { spotifyId: "0ofHAoxe9vBkTCp2UQIavz", photo: "images/amigo2_musica2.jpeg", text: "eu penso em você TODA VEZ que essa música toca!!!!!!!! e eu nem lembro como isso começou (por favor me lembre)" },
      { spotifyId: "2j1fFjWHCI9KJSwcuYAOyF", photo: "images/amigo2_musica3.jpeg", text: "o jeito que o BTS escreveu essa música para você é muito lindo…" },
      { spotifyId: "1yjY7rpaAQvKwpdUliHx0d", photo: "images/amigo2_musica4.jpeg", text: " i should be over all the butterflies, but i'm into you (i'm into you) <3" }
    ]
  },
  {
    id: "amigo3",
    name: "Lari",
    photo: "images/amigo3.jpg",
    songs: [
      { spotifyId: "0MSC5BYWcNhcBNNYORXZyj", photo: "images/amigo3_musica1.jpeg", text: "essa música me lembra você porque panic me lembra você. mas, além disso, escolhi essa porque tenho a memória muito viva de você falar o nome dela rapidíssimo na escola" },
      { spotifyId: "7bvBOzSYbzUMg9ElqkWQiA", photo: "images/amigo3_musica2.jpeg", text: "essa música me lembra os momentos que vivemos na minha casa no sudoeste e, principalmente, o dia que eu, você, bruna e loércia conhecemos a ida maria e tiramos a foto icônica pro facebook." },
      { spotifyId: "0WbMK4wrZ1wFSty9F7FCgu", photo: "images/amigo3_musica3.jpeg", text: "você foi a primeira pessoa a falar sobre a chappell roan. eu a conheci e comecei a ouvir por você recomendar!" },
      { spotifyId: "5sJJQxIfys0imGd4WhILm8", photo: "images/amigo3_musica4.jpeg", text: "sei que você também ama marisa monte e foi no show dela com a orquestra sinfonica ❤️" }
    ]
  },
  {
    id: "amigo4",
    name: "Tutu",
      letter: `vivi,

como é bom te acompanhar nos 30!!! terceira década te acompanhando e feliz de permanecer aqui pra te ver brilhar mais e mais. amo seu coração, amo vc de todas as formas possíveis. é uma delícia ser sua amiga. saiba que estarei aqui sempre torcendo por vc, viu?

já vi tanta versão sua... mas a melhor sempre é a próxima. vc é daquelas pessoas que deixam a vida mais colorida só por existir nela.

que esses 30 venham com tudo que vc merece e que vc se olhe com o mesmo carinho que todos a sua volta se olham!!

feliz aniversário! te amo muito!!!`,
    photo: "images/amigo4.jpg",
    songs: [
      { spotifyId: "5pomCBdsTZSDCFHH8BAUQe", photo: "images/amigo4_musica1.jpeg", text: "não tem como não colocar essa música nessa playlist!! acho que de todas, essa é a música que mais reflete a nossa amizade, pq foi onde nossa amizade começou. me lembra muito quando vc chegou na escola e eu fiquei completamente obcecada querendo ser sua amiga logo kkk e amo que tudo começou por causa da mitchie torres." },
      { spotifyId: "5eYAZko7TMVUh6e2GGrmJX", photo: "images/amigo4_musica2.jpeg", text: "glee fez muito parte da nossa história!1 com certeza moldou nossa personalidade e caráter. E QUE BOM!!! oq é vivi sem darren criss? essa música me trás uma lembrança de uma época tãoooo boa e gostosa, sabe? escutar essas músicas no telão do recreio... aiai, bom demais" },
      { spotifyId: "4HX47Ab5u6ULYUbDWnhOhF", photo: "images/amigo4_musica3.jpeg", text: "essa é pras poucas pessoas que conhecem o lado da vivi pagodeira. me lembra a fase que íamos no samba Brasília (juro kkkk) mas me trás a memória da nossa amizade mais atual!! curtir sp com vc e san, um show muuuito legal e vivendo já nossa amizade na vida adulta!! amo demais" },
      { spotifyId: "7cm47B51skvu6sJUD0TalT", photo: "images/amigo4_musica4.jpeg", text: "puxando um pouco pra mcfly, obviamente, pq se não não seria eu kkkk mas sei que tom está num lugar especial no seu coração! mas além de saber que vc ama essa, é pra lembrar que por mais que a vida adulta possa ser difícil em alguns momentos e mesma estando distancia de um voo, vc não está sozinha! nossa amizade tem um lugar muito especial pra mim. prezo e guardo ela com muito amor e carinho. te amo demais, vivi" }
    ]
  },
  {
    id: "amigo5",
    name: "Berr",
    letter: `Vivi, você sempre foi uma parte gigantesca da minha vida e eu pensei mt em que músicas escolher e eu pensei que isso é muito fácil, então abri a minha playlist de músicas favoritas e nem fiquei surpreso ao ver que várias das minhas favoritas foi graças a você. Eu amo muito o quanto você me influenciou e acho que te influenciei também, e achei que a escolha de presente por músicas foi  a melhor maneira de falar o quanto você está presente nas nossas vidas. Te amo muito Vivi! Feliz aniversário atrasado!!!`,
    photo: "images/amigo5.jpeg",
    songs: [
      { spotifyId: "4qmT806nB5E33pZSYYqWcU", photo: "images/amigo5_musica1.jpeg", text: "Eu achei uma ótima maneira eu começar com Steven Universe (uma das minhas séries favoritas) porque é uma coisa que a gente tem em comum e foi uma coisa muito gigante na minha vida por muitos anos, então escolhi a música que começou o meu grande interesse por Steven" },
      { spotifyId: "5iYUt3rsgrGFU0nugdhYwj", photo: "images/amigo5_musica2.jpeg", text: "Não consigo pensar em Vivi e em música sem pensar no Glee e NÃO VOU MENTIR, ACHO que foi você que comentou isso, mas esse comentário sempre está na minha cabeça que não conseguem mais ouvir rumour has it e someone like you da mesma maneira, pq hoje em dia a música de Glee está na cabeça kkkk então adoro as músicas do Glee e tem MUITAS, mas quis colocar essa pq é incrível" },
      { spotifyId: "4YCpNK1IWOZTffIHi8jFhd", photo: "images/amigo5_musica3.jpeg", text: "Você foi a GRANDE DIVA que me apresentou HAIM, e eu sou obcecado por elas (elas são total obcecadas-worthy) e eu acredito que você gosta dessa música! Além dessa eu tinha pensado em If I Could Change Your Mind também, pq é uma música incrível e eu amo elas dançando, enfim obrigado pq já escutei TANTO HAIM que até o povo aqui de casa gosta de The Wire" },
      { spotifyId: "0M4tj5zmIrL4JpJUcE8D1F", photo: "images/amigo5_musica4.jpeg", text: "Agora a música mais importante pra mim eu deixei pro final hehe, você foi essêncial na minha vida em uma parte muito delicada que foi quando eu me assumi e essa música foi um grande motivador pra eu ser quem eu sou hoje. Sou grato por você e por todas as experiências boas que você causou na minha vida e ETERNAMENTE serei grato pela vivi trazer o troye na minha vida. Te amo 🩵" }
    ]
  },
  {
    id: "amigo6",
    name: "Loércia",
    letter: `vitt/vivi,

me emociona muito ver o crescimento de nós todas nesse tempão que caminhamos juntas (quase 20 anos!!). a gente tá na vida uma da outra há mais tempo do que não esteve, né? crescer juntas foi crescer aprendendo juntas e você é muito uma referência enorme pra mim de inteligência, criatividade, carisma, olhar perspicaz e sagacidade. e claro beleza (old q ela é linda dimais). te admiro muito e amo ver você construindo a vidinha fazendo coisas maravilhosas por aí. tenho certeza de que seus 30 serão de muita prosperidade ❤️

que sua nova fase seja linda, que te dê sempre muito bem-estar e realização sempre. que você esteja sempre acompanhada de gente querida que te ama e com quem você possa trocar muito carinho e risadas, muita música, muito show e que seus artistas favoritos SEMPRE lancem clipes MARAVILHOSOS!!!

te amo muito muito muito!!! muita VIDA sempre pra você!
loércia

OFF sobre as fotos: eu perdi quase todas as fotos que eu tinha tanto no computador quanto no celular e fiquei uma pessoa péssima de fazer e manter registros. então tive que usar somente fotos coletivas pq foi o que eu consegui 😭😭 fica de aprendizado pra eu me organizar melhor com isso`,
    photo: "images/amigo6.jpg",
    songs: [
      { spotifyId: "1udcfAXA8aWN4hKO64oQi5", photo: "images/amigo6_musica1.jpg", text: "vitt lembro muito dessa a gente em 2009 nesse momento CANÔNICO dos nossos 12/13 anos que foi explorar panic juntas e um dia específico em que a gente ficou refletindo em cima do título dessa música. pra mim ela sempre vai ser muito vc e esse momento. ❤️" },
      { spotifyId: "1HHeOs6zRdF8Ck58easiAY", photo: "images/amigo6_musica2.jpg", text: "agora indo pra 2010 indo para o momento explorar LADY GAGA juntas, eu lembro MTO de um dia em que a gente tava acho que na biblioteca da escola e eu lembrei do trecho 'she hides true love' e a gente ficou um TEMPÃO tentando lembrar de onde era o trecho dessa música jurando que era panic at the disco até a gente se tocar que era alejandro e foi um momento marcado em minha memória pra sempre. fora que né mamãe monster tinha que estar aqui!!!" },
      { spotifyId: "00h6syYCxPKVsInPHXhdZ1", photo: "images/amigo6_musica3.jpg", text: "agora indo pra 2011 quando esse álbum lançou e mais uma vez EXPLORAR PANIC juntas mas agora com um álbum sendo lançado ao vivooooo foi mto forte. essa sempre vai me lembrar vc e vc falando sobre a sarah e sobre o brendon e a gente cantando essa juntas ❤️" },
      { spotifyId: "5kRWRv2S5O5FHAuBzIp95w", photo: "images/amigo6_musica4.jpg", text: "agora dando um salto de 15 anos kkkkk pro nosso episódio mais recente que foi estar na sua casa aí em são paulo. a gente tão crescidas tão adultas depois de tanto tempo e ainda juntas!!! e eu meio que AMEI saber que vc foi atrás da opinião da claudette sobre esse assunto e ela OBVIAMENTE concordou com vc pq vc é uma pessoa de opiniões CERTEIRAS sempre. OFF sobre a foto: pra vc ver de tão ruim que eu sou de manter registro seu aniver em são paulo foi literalmente menos de um mês atrás e eu simplesmente NÃO encontrei as fotos que a gente tirou nele?? e aí acabei tendo q colocar do meu aniversário pq era uma das fotos mais recentes que eu tinha aqui sendo q esse causo dessa música foi no seu?? um absurdo mas fica MTO de aprendizado. por favor no lugar dessa foto imagine a foto que a gente tirou na sua festa de 30 te amo" }
    ]
  },
  {
    id: "amigo7",
    name: "Bruna",
    letter: `Vittoria,

ser sua amiga é uma das melhores coisas da minha vida. Sei que estaremos sempre juntas, e sei disso desde que nos conhecemos, muitos e muitos anos atrás.

Quando penso na palavra, no conceito de amizade, sua existência é uma das imagens fortes que vem à minha mente: alguém que eu admiro, confio, respeito. Onde há amor e carinho, companhia, apoio e lealdade. É tão simples, mas é a verdade: alguém que pode contar comigo, e com quem eu posso contar, e assim a vida fica mais leve.

Obrigada por me ensinar, sempre e desde sempre, a ser uma pessoa melhor. Você me inspira e espero estar juntinho para te celebrar em todos os anos que ainda virão! 

Te amo,
Bruna`,
    photo: "images/amigo7.jpg",
    songs: [
      { spotifyId: "0tutU5E5kMR3bY8sZllpoJ", photo: "images/amigo7_musica1.png", text: "Acho que aqui foi quando começamos a ficar amigas. Sua chegada deixou nossa vida mais feliz! Obrigada por dividir tudo isso comigo!" },
      { spotifyId: "6uq4CjBN51iCkbwrqc2xsU", photo: "images/amigo7_musica2.jpeg", text: "Eu amo essa música e amo que a gente viveu essa fase juntas!! Sempre lembro de você ouvindo Fall Out Boy! Forever emuxas" },
      { spotifyId: "2kgT6sMwXd3mdeXhBbLMQe", photo: "images/amigo7_musica3.jpeg", text: "Escolhi essa pq me lembra carnaval e pq você gosta de Djavan!!! Acho uma música divertida e espero que a gente brinque em muitos carnavais ainda!!!!!" },
      { spotifyId: "164RfzZqd5LYTsz8ZTfwFV", photo: "images/amigo7_musica4.jpeg", text: "Essa música linda é a cor do céu de Brasília, a vista de uma árvore enquadrada na janela, sempre uma casa pra voltar ❤️" }
    ]
  }
];

// ---------- REVELAÇÃO DE PRESENTE EXTRA (opcional) ----------
// Isso liga um botão "🎁 Revelar presente extra" na tela final. Quando ela
// aperta, aparece a mensagem-surpresa abaixo (pra avisar do Pix, por
// exemplo). Se não quiser essa parte, é só deixar PRESENTE_ATIVADO = false
// que o botão nem aparece.
const PRESENTE_ATIVADO = true;

// A mensagem que aparece quando ela clica no botão.
const PRESENTE_MENSAGEM = "Pensamos muito no que poderiamos te dar de presente e temos algumas sugestões! Conhecer um restaurante, um café, ou ir em uma baladinha. Um vale-faxina pra vocês não precisarem limpar a casa, ou comprar um item fashion ou um álbum de K-Pop que está no seu carrinho! De qualquer maneira, por favor nos conte o que você decidiu! Te amamos e o Pix está a caminho!";

/* Se você quiser que, no exato momento em que ela clicar, chegue um
   e-mail avisando vocês (pra fazerem o Pix na hora), dá pra usar o
   EmailJS — é grátis, ninguém mais além de você precisa criar conta nem
   instalar nada, e quem recebe o aviso só olha a caixa de entrada
   (funciona até como notificação no celular, se o e-mail tiver
   notificação ligada). Se você não preencher os campos abaixo (deixar
   como está, vazios), o botão continua funcionando normalmente, só não
   manda aviso nenhum — é 100% opcional.

   Como pegar os valores (uns 5 minutos, sem cartão de crédito):
   1. Crie uma conta grátis em https://www.emailjs.com
   2. "Email Services" -> "Add New Service" -> conecte seu Gmail (ou
      outro) -> copie o "Service ID" gerado.
   3. "Email Templates" -> "Create New Template" -> no corpo do e-mail,
      escreva algo como "Aviso: {{message}}" -> copie o "Template ID".
   4. Menu do seu usuário (canto superior direito) -> "Account" ->
      "General" -> copie a "Public Key".
   5. Cole os três valores abaixo entre aspas, e em EMAIL_DESTINO coloque
      o e-mail de quem deve receber o aviso (pode ser o seu mesmo, ou
      criar um grupo/lista se vários de vocês quiserem receber). */
const EMAILJS_PUBLIC_KEY = "hDENIlCxdbVFlSEHM";
const EMAILJS_SERVICE_ID = "service_p5q12x3";
const EMAILJS_TEMPLATE_ID = "template_pwb6vkq";
const EMAIL_DESTINO = "berrcaval@gmail.com";
