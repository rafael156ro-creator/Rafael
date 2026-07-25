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
│   └── script.js          → lógica do site (não precisa mexer)
└── assets/
    ├── favicon.svg
    └── og-image.svg       → imagem exibida ao compartilhar o link
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

Na seção "Sobre" (`index.html`, bloco `.about-portrait`), troque o `<span class="initials">RR</span>` por uma tag `<img>` com sua foto, por exemplo:

```html
<div class="about-portrait reveal">
  <img src="assets/sua-foto.jpg" alt="Rafael Rodrigues" style="width:100%;height:100%;object-fit:cover;">
</div>
```

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
