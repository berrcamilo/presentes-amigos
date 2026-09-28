# Presente de 30 anos 🎉

Site de aniversário com 30 músicas escolhidas por 7 amigos: uma música de
abertura do grupo, 4 músicas de cada amigo, e uma música de encerramento
do grupo. Cada música toca automaticamente (com áudio, via Spotify) quando
a pessoa clica em "seguinte", junto com uma foto e um textinho.

## 1. Como editar o conteúdo

Abra o arquivo **`data.js`** em qualquer editor de texto (até o Bloco de
Notas / TextEdit funcionam). Lá dentro você troca:

- `ANIVERSARIANTE` — o nome de quem vai receber o presente.
- `MENSAGEM_CAPA` — a frase que aparece na tela inicial.
- `INTRO` e `OUTRO` — a música de abertura e de encerramento do grupo.
- `FRIENDS` — a lista dos 7 amigos, cada um com nome, foto e as 4 músicas
  (faixa do Spotify + foto + texto de cada uma). Se algum amigo mandou uma
  mensagem maior (tipo uma cartinha), dá pra adicionar um campo opcional
  `letter` no objeto dele — ela aparece no lugar da frase padrão "escolheu
  estas músicas pra você" na tela de transição. Os amigos que não tiverem
  esse campo continuam mostrando a frase padrão normalmente.
- `SPOTIFY_PLAYLIST_URL` — o link da playlist completa de vocês no
  Spotify (aparece num botão na tela final). No Spotify: abra a
  playlist → "..." → Compartilhar → Copiar link.

Para pegar o ID de uma música no Spotify: abra a música → "..." →
Compartilhar → Copiar link da música. Vem um link assim:
`https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl?si=abc123` — o ID
é a parte entre `/track/` e o `?`, nesse exemplo `11dFghVXANMlKmJXsNCbNl`.

As fotos ficam na pasta **`images`** — veja o arquivo `LEIA-ME.txt` lá
dentro com a lista de nomes sugeridos. Se faltar alguma foto, o site
mostra um quadrado bonito no lugar em vez de quebrar. As fotos de perfil
dos amigos (`images/amigoX.jpg`) aparecem só na tela de transição, pra
mostrar quem escolheu aquelas músicas — elas não entram no mosaico de
fundo da capa/tela final, que é feito só com as fotos das músicas.

Você **não precisa** editar `index.html`, `style.css` ou `script.js` —
só o `data.js` e as fotos.

### Presente extra (botão de revelar, ex.: Pix)

Na tela final tem um botão opcional "🎁 Revelar presente extra". Ele já
funciona sozinho: quando clicado, mostra uma mensagem-surpresa (você edita
o texto em `PRESENTE_MENSAGEM`, no `data.js`). Se não quiser esse botão,
é só trocar `PRESENTE_ATIVADO` para `false`.

Se além disso você quiser que um e-mail avise vocês assim que ela clicar
(pra fazerem o Pix na hora), o `data.js` tem um passo a passo de como
criar uma conta grátis no [EmailJS](https://www.emailjs.com) (uns 5
minutos, sem cartão) e onde colar as chaves. Enquanto esses campos
estiverem vazios, o botão continua funcionando normalmente — só não
manda aviso nenhum. Não dá pra automatizar isso pelo WhatsApp direto (não
existe um jeito grátis e sem instalar nada de mandar mensagem automática
num grupo), então o e-mail é o caminho mais simples: ninguém mais
precisa instalar nada, só olhar a caixa de entrada.

## 2. Como ver o site no seu computador antes de publicar

Se você só der duplo-clique no `index.html`, o site abre, mas **as músicas
não vão tocar** — o navegador abre o arquivo como `file:///...`, e por
segurança ele bloqueia a comunicação com o Spotify nesse formato (você
vai ver erros estranhos no console tipo "postMessage" ou "unsafe attempt
to load URL"). Isso é só uma limitação de testar localmente — **no
GitHub Pages funciona normal**, porque lá o site é acessado por um
endereço `https://` de verdade.

Se quiser ver funcionando antes de publicar:
- **No VS Code**: instale a extensão "Live Server", clique com o botão
  direito no `index.html` → "Open with Live Server". Ele abre em algo
  como `http://127.0.0.1:5500` e as músicas tocam normalmente.
- Ou simplesmente pule esse passo e já publique no GitHub Pages (passo
  3 abaixo) — leva só alguns minutos e você testa direto no link final.

## 3. Como publicar no GitHub Pages (de graça)

1. Crie uma conta no [github.com](https://github.com) se ainda não tiver.
2. Crie um repositório novo (o botão verde "New").
   - Pode deixar como **público**.
   - Não marque "Add a README" (você já tem um).
3. Suba todos os arquivos desta pasta para o repositório:
   - Pelo site: abra o repositório → "Add file" → "Upload files" →
     arraste todos os arquivos e a pasta `images` → "Commit changes".
4. Ative o GitHub Pages:
   - No repositório, vá em **Settings** → **Pages** (no menu da
     esquerda).
   - Em "Source", escolha a branch `main` e a pasta `/ (root)` →
     **Save**.
5. Espere 1 ou 2 minutinhos. O GitHub mostra o link do site, algo como:

   `https://seu-usuario.github.io/nome-do-repositorio/`

6. Envie esse link para a aniversariante. 🎂

### Se quiser trocar depois

Sempre que editar `data.js` ou trocar uma foto, é só subir o arquivo de
novo no GitHub (mesmo processo do passo 3) — o site atualiza sozinho em
menos de um minuto.

## Estrutura dos arquivos

```
index.html   -> estrutura das telas (não precisa editar)
style.css    -> cores e visual (edite se quiser mudar as cores)
script.js    -> a lógica de passar de música em música (não precisa editar)
data.js      -> TODO O CONTEÚDO: nomes, músicas, fotos e textos (edite aqui!)
images/      -> pasta onde ficam as fotos
```
