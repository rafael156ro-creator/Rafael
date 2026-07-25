<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rafael Rodrigues — Desenvolvedor Web | Sites modernos e profissionais</title>
  <meta name="description" content="Rafael Rodrigues, desenvolvedor web especializado em sites institucionais, landing pages, e-commerces e portfólios rápidos, responsivos e otimizados para conversão.">
  <meta name="keywords" content="desenvolvedor web, criação de sites, landing page, e-commerce, WordPress, portfólio de desenvolvedor">
  <meta name="author" content="Rafael Rodrigues">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://seudominio.com.br/">

  <!-- Open Graph / compartilhamento em redes sociais -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Rafael Rodrigues — Desenvolvedor Web">
  <meta property="og:description" content="Transformo ideias em experiências digitais modernas, rápidas e profissionais.">
  <meta property="og:image" content="assets/og-image.svg">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:url" content="https://seudominio.com.br/">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Rafael Rodrigues — Desenvolvedor Web">
  <meta name="twitter:description" content="Transformo ideias em experiências digitais modernas, rápidas e profissionais.">
  <meta name="twitter:image" content="assets/og-image.svg">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">

  <!-- Fontes -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <!-- Ícones -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css">

  <!-- Estilos -->
  <link rel="stylesheet" href="css/style.css">

  <!-- Dados estruturados (SEO) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rafael Rodrigues",
    "jobTitle": "Desenvolvedor Web",
    "description": "Desenvolvedor web especializado em sites, landing pages, e-commerces e portfólios.",
    "url": "https://seudominio.com.br/"
  }
  </script>
</head>
<body>

  <a href="#main" class="skip-link">Pular para o conteúdo</a>
  <div class="scroll-progress" aria-hidden="true"></div>

  <!-- ============ NAVBAR ============ -->
  <header class="navbar" id="navbar">
    <div class="container">
      <a href="#hero" class="logo" aria-label="Rafael Rodrigues — página inicial">
        <span>rafael<span class="logo-accent">.dev</span></span><span class="cursor-blink" aria-hidden="true"></span>
      </a>

      <nav class="nav-links" id="nav-links" aria-label="Navegação principal">
        <a href="#hero">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>

      <div class="nav-actions">
        <a href="#contato" class="btn btn-outline btn-sm hide-mobile">Entrar em Contato</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav-links">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <main id="main">

    <!-- ============ HERO ============ -->
    <section class="hero" id="hero">
      <div class="tech-bg" aria-hidden="true">
        <div class="glow-orb" style="width:420px;height:420px;background:#3b7dff;top:-120px;left:-80px;"></div>
        <div class="glow-orb" style="width:360px;height:360px;background:#22d3ee;bottom:-100px;right:-60px;animation-delay:-6s;"></div>
      </div>

      <div class="container">
        <div class="hero-text">
          <span class="hero-eyebrow"><span class="status-dot" aria-hidden="true"></span> Disponível para novos projetos</span>

          <h1 class="hero-title">
            <span class="line"><span>Rafael</span></span>
            <span class="line"><span class="text-gradient">Rodrigues</span></span>
          </h1>

          <p class="hero-role" aria-live="polite">
            <span id="hero-role-text">Desenvolvedor Web</span><span class="typed-cursor" aria-hidden="true"></span>
          </p>

          <p class="hero-desc">
            Transformo ideias em experiências digitais modernas, rápidas e profissionais.
            Desenvolvo sites personalizados, landing pages, e-commerces, portfólios e soluções
            para empresas que desejam fortalecer sua presença na internet.
          </p>

          <div class="hero-actions">
            <a href="#projetos" class="btn btn-primary">
              <i class="fa-solid fa-layer-group" aria-hidden="true"></i> Ver Projetos
            </a>
            <a href="#contato" class="btn btn-outline">
              <i class="fa-regular fa-paper-plane" aria-hidden="true"></i> Entrar em Contato
            </a>
          </div>

          <div class="hero-meta">
            <div class="meta-item"><strong>+40</strong>projetos entregues</div>
            <div class="meta-item"><strong>+3000h</strong>de estudo e prática</div>
            <div class="meta-item"><strong>100%</strong>foco em performance</div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="code-window">
            <div class="code-window-bar">
              <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
              <span class="filename">rafael.js</span>
            </div>
            <div class="code-window-body" id="typewriter-code" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <a href="#sobre" class="scroll-cue" aria-label="Rolar para a seção Sobre">
        <span class="mouse"><span></span></span>
        ROLAR
      </a>
    </section>

    <!-- ============ SOBRE ============ -->
    <section class="section about" id="sobre">
      <div class="container">
        <div class="about-portrait reveal">
          <img src="assets/rafael-foto.jpg" alt="Rafael Rodrigues, desenvolvedor web" style="width:100%;height:100%;object-fit:cover;">
          <span class="frame-corner tl" aria-hidden="true"></span>
          <span class="frame-corner br" aria-hidden="true"></span>
        </div>

        <div class="about-body">
          <span class="eyebrow reveal">// sobre mim</span>
          <h2 class="section-title reveal">Código com propósito, não só sintaxe</h2>

          <p class="reveal">
            Sou <strong>Rafael Rodrigues</strong>, desenvolvedor web apaixonado por tecnologia,
            programação e pela transformação de ideias em produtos digitais reais. Cada projeto
            começa com uma pergunta simples: <em>como isso vai ajudar o negócio do meu cliente a crescer?</em>
          </p>

          <p class="reveal">
            Estou sempre estudando novas tecnologias, frameworks e boas práticas para entregar
            soluções de <strong>alta qualidade</strong> — sites que não são apenas bonitos, mas rápidos,
            acessíveis e pensados para converter visitantes em resultado real.
          </p>

          <p class="reveal">
            Do primeiro wireframe ao deploy em produção, cuido de cada detalhe com atenção à
            performance, à experiência do usuário e à manutenção do código no longo prazo.
          </p>

          <div class="trait-grid reveal-stagger">
            <div class="trait reveal"><i class="fa-solid fa-lightbulb" aria-hidden="true"></i>Criatividade</div>
            <div class="trait reveal"><i class="fa-solid fa-list-check" aria-hidden="true"></i>Organização</div>
            <div class="trait reveal"><i class="fa-solid fa-code" aria-hidden="true"></i>Código limpo</div>
            <div class="trait reveal"><i class="fa-solid fa-gauge-high" aria-hidden="true"></i>Performance</div>
            <div class="trait reveal"><i class="fa-solid fa-mobile-screen" aria-hidden="true"></i>Responsividade</div>
            <div class="trait reveal"><i class="fa-solid fa-heart" aria-hidden="true"></i>Boa experiência de uso</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SERVIÇOS ============ -->
    <section class="section" id="servicos">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow reveal">// serviços</span>
          <h2 class="section-title reveal">O que posso construir para você</h2>
          <p class="section-desc reveal">Soluções sob medida para quem quer uma presença digital sólida, rápida e profissional.</p>
        </div>

        <div class="services-grid reveal-stagger">
          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-code" aria-hidden="true"></i></div>
            <h3>Desenvolvimento de Sites</h3>
            <p>Sites personalizados construídos do zero, com código limpo e foco em performance e escalabilidade.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-bolt" aria-hidden="true"></i></div>
            <h3>Landing Pages</h3>
            <p>Páginas de alta conversão para campanhas, lançamentos e captação de leads qualificados.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-building" aria-hidden="true"></i></div>
            <h3>Sites Institucionais</h3>
            <p>Presença digital sólida para empresas que querem transmitir credibilidade e profissionalismo.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-cart-shopping" aria-hidden="true"></i></div>
            <h3>E-commerce</h3>
            <p>Lojas virtuais rápidas, seguras e intuitivas, prontas para vender e escalar.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-briefcase" aria-hidden="true"></i></div>
            <h3>Portfólios</h3>
            <p>Sites autorais para profissionais e criadores que querem mostrar seu trabalho com estilo.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-brands fa-wordpress" aria-hidden="true"></i></div>
            <h3>WordPress</h3>
            <p>Criação e customização de sites em WordPress, com temas e plugins sob medida.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i></div>
            <h3>Manutenção de Sites</h3>
            <p>Atualizações, correções e suporte contínuo para manter seu site sempre no ar e seguro.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-gauge-high" aria-hidden="true"></i></div>
            <h3>Otimização de Performance</h3>
            <p>Sites mais rápidos, com melhor pontuação no Core Web Vitals e menor taxa de rejeição.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i></div>
            <h3>SEO Básico</h3>
            <p>Estrutura, metadados e boas práticas para melhorar o posicionamento nos buscadores.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></div>
            <h3>Integração com WhatsApp</h3>
            <p>Botões e fluxos de atendimento integrados ao WhatsApp para facilitar o contato com clientes.</p>
          </div>

          <div class="service-card card reveal">
            <div class="service-icon"><i class="fa-solid fa-robot" aria-hidden="true"></i></div>
            <h3>Automações</h3>
            <p>Fluxos automatizados que economizam tempo e eliminam tarefas repetitivas do seu negócio.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TECNOLOGIAS ============ -->
    <section class="section stack-band" id="tecnologias">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow reveal">// stack</span>
          <h2 class="section-title reveal">Tecnologias que eu domino</h2>
          <p class="section-desc reveal">Ferramentas e linguagens que uso no dia a dia para construir produtos digitais robustos.</p>
        </div>

        <div class="stack-group">
          <span class="stack-subhead">JÁ DOMINO</span>
          <div class="stack-grid reveal-stagger">
            <div class="stack-item reveal"><i class="devicon-html5-plain colored" aria-hidden="true"></i><span>HTML5</span></div>
            <div class="stack-item reveal"><i class="devicon-css3-plain colored" aria-hidden="true"></i><span>CSS3</span></div>
            <div class="stack-item reveal"><i class="devicon-javascript-plain colored" aria-hidden="true"></i><span>JavaScript</span></div>
            <div class="stack-item reveal"><i class="devicon-wordpress-plain colored" aria-hidden="true"></i><span>WordPress</span></div>
            <div class="stack-item reveal"><i class="devicon-figma-plain colored" aria-hidden="true"></i><span>Figma</span></div>
          </div>
        </div>

        <div class="stack-group">
          <span class="stack-subhead">EM ANDAMENTO / APRENDIZAGEM</span>
          <div class="stack-grid reveal-stagger">
            <div class="stack-item is-learning reveal"><i class="devicon-typescript-plain colored" aria-hidden="true"></i><span>TypeScript</span><span class="learning-badge" aria-hidden="true"></span></div>
            <div class="stack-item is-learning reveal"><i class="devicon-react-original colored" aria-hidden="true"></i><span>React</span><span class="learning-badge" aria-hidden="true"></span></div>
            <div class="stack-item is-learning reveal"><i class="devicon-nextjs-original" aria-hidden="true" style="color:#eaf0fb;"></i><span>Next.js</span><span class="learning-badge" aria-hidden="true"></span></div>
            <div class="stack-item is-learning reveal"><i class="devicon-nodejs-plain colored" aria-hidden="true"></i><span>Node.js</span><span class="learning-badge" aria-hidden="true"></span></div>
            <div class="stack-item is-learning reveal"><i class="devicon-tailwindcss-plain colored" aria-hidden="true"></i><span>Tailwind</span><span class="learning-badge" aria-hidden="true"></span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PROJETOS ============ -->
    <section class="section" id="projetos">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow reveal">// projetos</span>
          <h2 class="section-title reveal">Trabalhos recentes</h2>
          <p class="section-desc reveal">Uma seleção de projetos. Novos cases são adicionados continuamente — edite <code>js/config.js</code> para atualizar.</p>
        </div>

        <div class="projects-grid reveal-stagger" id="projects-grid">
          <!-- Preenchido dinamicamente via js/script.js a partir de js/config.js -->
        </div>

        <p class="projects-note">Mais projetos em breve — este espaço é atualizado continuamente.</p>
      </div>
    </section>

    <!-- ============ ESTATÍSTICAS ============ -->
    <section class="section stats-band" id="numeros">
      <div class="container">
        <div class="section-head" style="margin-inline:auto; text-align:center;">
          <span class="eyebrow reveal" style="justify-content:center;">// em números</span>
          <h2 class="section-title reveal">Resultados que falam por si</h2>
        </div>

        <div class="stats-grid reveal-stagger" id="stats-grid">
          <!-- Preenchido dinamicamente via js/script.js a partir de js/config.js -->
        </div>
      </div>
    </section>

    <!-- ============ DEPOIMENTOS ============ -->
    <section class="section" id="depoimentos">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow reveal">// depoimentos</span>
          <h2 class="section-title reveal">O que meus clientes dizem</h2>
          <p class="section-desc reveal">Avaliações reais de quem já trabalhou comigo.</p>
        </div>

        <div class="testimonials-grid reveal-stagger" id="testimonials-grid">
          <!-- Preenchido dinamicamente via js/script.js a partir de js/config.js -->
        </div>
      </div>
    </section>

    <!-- ============ CONTATO ============ -->
    <section class="section" id="contato">
      <div class="container">
        <div class="contact-info">
          <span class="eyebrow reveal">// contato</span>
          <h2 class="section-title reveal">Vamos construir algo juntos?</h2>
          <p class="section-desc reveal" style="margin-bottom:8px;">
            Preencha o formulário ou entre em contato diretamente por um dos canais abaixo.
            Respondo o mais rápido possível.
          </p>

          <div style="height:16px;"></div>

          <a href="#" data-social="whatsapp" target="_blank" rel="noopener noreferrer" class="contact-channel reveal">
            <span class="icon-box"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></span>
            <span><span class="label">WhatsApp</span><span class="value">Fale agora</span></span>
          </a>

          <a href="#" data-social="email" class="contact-channel reveal">
            <span class="icon-box"><i class="fa-regular fa-envelope" aria-hidden="true"></i></span>
            <span><span class="label">E-mail</span><span class="value" data-social-text="email">SEUEMAIL@EMAIL.COM</span></span>
          </a>

          <a href="#" data-social="linkedin" target="_blank" rel="noopener noreferrer" class="contact-channel reveal">
            <span class="icon-box"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></span>
            <span><span class="label">LinkedIn</span><span class="value">Conecte-se comigo</span></span>
          </a>

          <a href="#" data-social="github" target="_blank" rel="noopener noreferrer" class="contact-channel reveal">
            <span class="icon-box"><i class="fa-brands fa-github" aria-hidden="true"></i></span>
            <span><span class="label">GitHub</span><span class="value">Veja meu código</span></span>
          </a>
        </div>

        <form class="contact-form card reveal" id="contact-form" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Nome *</label>
              <input type="text" id="name" name="name" placeholder="Seu nome completo" required autocomplete="name">
            </div>
            <div class="form-group">
              <label for="email">E-mail *</label>
              <input type="email" id="email" name="email" placeholder="voce@email.com" required autocomplete="email">
            </div>
          </div>

          <div class="form-group">
            <label for="company">Empresa <span style="font-weight:400;color:var(--text-dim);">(opcional)</span></label>
            <input type="text" id="company" name="company" placeholder="Nome da sua empresa" autocomplete="organization">
          </div>

          <div class="form-group">
            <label for="message">Mensagem *</label>
            <textarea id="message" name="message" placeholder="Conte um pouco sobre o seu projeto..." required></textarea>
          </div>

          <button type="submit" class="btn btn-primary form-submit">
            <i class="fa-regular fa-paper-plane" aria-hidden="true"></i> Enviar Mensagem
          </button>

          <div class="form-status" id="form-status" role="status" aria-live="polite"></div>
        </form>
      </div>
    </section>

  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#hero" class="logo">rafael<span class="logo-accent">.dev</span></a>
          <p>Desenvolvedor web focado em criar sites rápidos, elegantes e prontos para converter.</p>
          <div class="footer-social">
            <a href="#" data-social="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
            <a href="#" data-social="github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
            <a href="#" data-social="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
            <a href="#" data-social="whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contato</h4>
          <ul>
            <li><a href="#" data-social="email" data-social-text="email">SEUEMAIL@EMAIL.COM</a></li>
            <li><a href="#" data-social="whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="#" data-social="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>&copy; <span id="current-year">2026</span> Rafael Rodrigues — Todos os direitos reservados.</span>
        <span class="made-with">feito com &lt;/&gt; e café</span>
      </div>
    </div>
  </footer>

  <button class="back-to-top" aria-label="Voltar ao topo">
    <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
  </button>

  <script src="js/config.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
