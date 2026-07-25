# Portfólio — Rafael Rodrigues

Site de portfólio estático (HTML + CSS + JavaScript puro, sem build necessário).

## Estrutura de pastas

```
rafael-portfolio/
├── index.html          → estrutura do site
├── css/
│   └── style.css        → todo o visual (tema escuro + azul)
├── js/
│   ├── config.js         → ⭐ ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
│   ├── script.js          → lógica do site (não precisa mexer)
│   └── minigame.js        → lógica do jogo de bolinhas (não precisa mexer)
└── assets/
    ├── favicon.svg
    ├── og-image.svg       → imagem exibida ao compartilhar o link
    ├── rafael-foto.jpg    → sua foto na seção Sobre
    └── audio/
        └── roblox-doors-elevator-music-556237.mp3  ← coloque seu .mp3 aqui
```

## Como personalizar

Abra **`js/config.js`** e edite apenas os valores:

- `social.instagram`, `social.github`, `social.linkedin`, `social.whatsapp`, `social.email`
  → seus links reais (troque `wa.me/55SEUNUMERO` pelo seu número com DDI+DDD).
- `stats` → os quatro números da seção "Em números".
- `projects` → adicione um objeto para cada projeto (título, descrição, imagem, tecnologias, link do site e do GitHub). Deixe `liveUrl`/`githubUrl` vazios (`""`) enquanto não tiver o link — o botão aparecerá desabilitado como "Em breve".
- `testimonials` → depoimentos de clientes. Deixe o array vazio (`[]`) para mostrar o estado "ainda sem depoimentos".
- `formEndpoint` → cole a URL de um serviço de formulário (ex: Formspree, Web3Forms) se quiser receber as mensagens por e-mail automaticamente. Deixando em branco, o botão "Enviar Mensagem" abre o app de e-mail do visitante já preenchido.

Nenhuma outra alteração é necessária — o próprio `script.js` lê o `config.js` e monta a seção de projetos, estatísticas e depoimentos automaticamente.

## Trocar a foto de perfil

A foto atual está em `assets/rafael-foto.jpg` e já é usada na seção "Sobre". Para trocá-la, basta substituir esse arquivo por uma nova imagem com o mesmo nome (ou editar o caminho `src` da tag `<img>` dentro do bloco `.about-portrait` em `index.html`).

## Imagem de compartilhamento (Open Graph)

`assets/og-image.svg` é um placeholder gerado em SVG. Para melhor compatibilidade com WhatsApp, Instagram e Facebook, exporte-o como PNG (1200×630px) — pode abrir o arquivo em qualquer editor (Figma, Photoshop, ou até o navegador + print) e salvar como `og-image.png`, depois trocar a referência em `index.html`:

```html
<meta property="og:image" content="assets/og-image.png">
```

## Publicar o site

Qualquer serviço de hospedagem estática funciona, sem necessidade de servidor:

- **Netlify / Vercel**: arraste a pasta `rafael-portfolio` no painel, ou conecte um repositório Git.
- **GitHub Pages**: suba os arquivos para um repositório e ative o Pages nas configurações.
- **Hospedagem tradicional**: envie os arquivos via FTP para a pasta pública (`public_html`).

Antes de publicar, atualize também:
- A tag `<link rel="canonical">` e as tags `og:url` em `index.html` com o domínio real.

## Mini Game (Relax Zone)

O site tem uma seção `#minigame` com um jogo de bolinhas quicando (física em Canvas 2D puro, sem bibliotecas). Arquivos:

- `js/minigame.js` → toda a lógica do jogo (física, colisões, botões, player de áudio). Fica separado de `js/script.js` de propósito, para não arriscar o resto do site caso algo precise ser ajustado nele.
- Estilos do jogo estão no final de `css/style.css`, na seção "MINI GAME / RELAX ZONE".

**Música:** o player busca o arquivo em `assets/audio/roblox-doors-elevator-music-556237.mp3`. Coloque seu arquivo `.mp3` exatamente nessa pasta com esse nome (há um `.txt` de lembrete lá dentro — pode apagá-lo depois). O caminho é relativo, então funciona tanto localmente quanto publicado no GitHub Pages. A música **não** toca sozinha — só começa quando o visitante clica no botão de play, respeitando o bloqueio de autoplay dos navegadores.

Se o arquivo `.mp3` não existir ainda, o site continua funcionando normalmente — ao clicar em play, aparece um aviso discreto abaixo do jogo avisando que o áudio não foi encontrado, sem gerar erro quebrado no console.

## Recursos incluídos
- Tema escuro com detalhes em azul/ciano e visual tecnológico
- Totalmente responsivo (mobile, tablet, desktop)
- Navbar fixa com destaque da seção ativa (scroll spy)
- Animação de "digitação" no herói (cargo + bloco de código)
- Scroll suave, barra de progresso de leitura e botão "voltar ao topo"
- Estatísticas com contagem animada
- Projetos e depoimentos renderizados a partir de `config.js`
- Formulário de contato com validação e fallback via `mailto:`
- Acessibilidade: skip-link, foco visível, `prefers-reduced-motion`, `alt`/`aria-label`
- SEO: meta description, Open Graph, dados estruturados (JSON-LD), favicon
