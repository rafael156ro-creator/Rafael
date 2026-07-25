/**
 * ============================================================
 *  SCRIPT PRINCIPAL DO PORTFÓLIO
 *  Lê os dados de SITE_CONFIG (config.js) e cuida de toda a
 *  interatividade: navbar, menu mobile, animações, contadores,
 *  render de projetos/depoimentos e formulário de contato.
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------
   * 1. Aplica links e dados sociais vindos do config.js
   * ---------------------------------------------------------- */
  function applySocialLinks() {
    const { social } = SITE_CONFIG;
    document.querySelectorAll("[data-social]").forEach((el) => {
      const key = el.getAttribute("data-social");

      // Sem link configurado (ex: LinkedIn ainda não criado) → mostra como indisponível
      if (!social[key]) {
        el.classList.add("is-disabled");
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("tabindex", "-1");
        el.addEventListener("click", (e) => e.preventDefault());

        const valueEl = el.querySelector(".value");
        if (valueEl) valueEl.textContent = "Indisponível no momento";
        return;
      }

      if (key === "email") {
        el.href = `mailto:${social.email}`;
      } else {
        el.href = social[key];
      }
    });

    document.querySelectorAll("[data-social-text]").forEach((el) => {
      const key = el.getAttribute("data-social-text");
      if (social[key]) el.textContent = social[key];
    });
  }

  /* ------------------------------------------------------------
   * 2. Navbar: fundo ao rolar + menu mobile + scroll spy
   * ---------------------------------------------------------- */
  const navbar = document.querySelector(".navbar");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinksEl = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-links a[href^='#']");

  function handleNavbarScroll() {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  handleNavbarScroll();
  window.addEventListener("scroll", handleNavbarScroll, { passive: true });

  navToggle.addEventListener("click", () => {
    const isOpen = navLinksEl.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksEl.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });

  // Scroll spy — destaca o link da seção visível
  const sections = Array.from(navLinkItems)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          navLinkItems.forEach((a) => {
            a.classList.toggle("is-active", a.getAttribute("href") === id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => spyObserver.observe(s));

  /* ------------------------------------------------------------
   * 3. Barra de progresso de rolagem + botão "voltar ao topo"
   * ---------------------------------------------------------- */
  const progressBar = document.querySelector(".scroll-progress");
  const backToTop = document.querySelector(".back-to-top");

  function handleScrollExtras() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${percent}%`;
    backToTop.classList.toggle("is-visible", scrollTop > 480);
  }
  handleScrollExtras();
  window.addEventListener("scroll", handleScrollExtras, { passive: true });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  /* ------------------------------------------------------------
   * 4. Efeito de digitação (typewriter) no cargo do herói
   * ---------------------------------------------------------- */
  const roleEl = document.getElementById("hero-role-text");
  const roleStrings = [
    "Desenvolvedor Web",
    "Front-end & Back-end",
    "Sites que convertem",
  ];

  function typeLoop() {
    if (prefersReducedMotion) {
      roleEl.textContent = roleStrings[0];
      return;
    }
    let stringIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = roleStrings[stringIndex];
      if (!deleting) {
        charIndex++;
        roleEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        roleEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          stringIndex = (stringIndex + 1) % roleStrings.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 65);
    }
    tick();
  }
  typeLoop();

  /* ------------------------------------------------------------
   * 5. Efeito de digitação no bloco de código do herói (assinatura visual)
   * ---------------------------------------------------------- */
  const codeTarget = document.getElementById("typewriter-code");
  const codeHTML = [
    { ln: 1, html: `<span class="tok-kw">const</span> <span class="tok-key">developer</span> <span class="tok-punct">=</span> <span class="tok-punct">{</span>` },
    { ln: 2, html: `&nbsp;&nbsp;<span class="tok-key">name</span><span class="tok-punct">:</span> <span class="tok-string">"Rafael Rodrigues"</span><span class="tok-punct">,</span>` },
    { ln: 3, html: `&nbsp;&nbsp;<span class="tok-key">role</span><span class="tok-punct">:</span> <span class="tok-string">"Desenvolvedor Web"</span><span class="tok-punct">,</span>` },
    { ln: 4, html: `&nbsp;&nbsp;<span class="tok-key">stack</span><span class="tok-punct">:</span> <span class="tok-punct">[</span><span class="tok-string">"React"</span><span class="tok-punct">,</span> <span class="tok-string">"Next.js"</span><span class="tok-punct">,</span> <span class="tok-string">"Node"</span><span class="tok-punct">],</span>` },
    { ln: 5, html: `&nbsp;&nbsp;<span class="tok-key">focus</span><span class="tok-punct">:</span> <span class="tok-punct">[</span><span class="tok-string">"performance"</span><span class="tok-punct">,</span> <span class="tok-string">"UX"</span><span class="tok-punct">,</span> <span class="tok-string">"SEO"</span><span class="tok-punct">],</span>` },
    { ln: 6, html: `&nbsp;&nbsp;<span class="tok-key">available</span><span class="tok-punct">:</span> <span class="tok-bool">true</span><span class="tok-punct">,</span>` },
    { ln: 7, html: `&nbsp;&nbsp;<span class="tok-comment">// pronto para o seu próximo projeto</span>` },
    { ln: 8, html: `<span class="tok-punct">};</span>` },
  ];

  function renderCode() {
    codeTarget.innerHTML = "";
    codeHTML.forEach((row) => {
      const line = document.createElement("div");
      line.innerHTML = `<span class="ln">${row.ln}</span>${row.html}`;
      codeTarget.appendChild(line);
    });
  }

  if (prefersReducedMotion) {
    renderCode();
  } else {
    // Digita linha por linha para o efeito de "código sendo escrito"
    let i = 0;
    codeTarget.innerHTML = "";
    function typeNextLine() {
      if (i >= codeHTML.length) return;
      const row = codeHTML[i];
      const line = document.createElement("div");
      line.innerHTML = `<span class="ln">${row.ln}</span>`;
      codeTarget.appendChild(line);
      const temp = document.createElement("span");
      temp.innerHTML = row.html;
      const fullText = temp.textContent;
      let charI = 0;
      const speed = 12;
      (function typeChar() {
        charI++;
        // Revela progressivamente usando o HTML real cortado por caracteres visíveis
        line.innerHTML = `<span class="ln">${row.ln}</span>` + sliceHtmlByVisibleChars(row.html, charI);
        if (charI < fullText.length) {
          setTimeout(typeChar, speed);
        } else {
          i++;
          setTimeout(typeNextLine, 90);
        }
      })();
    }

    // Corta uma string HTML mantendo as tags, mas limitando caracteres visíveis
    function sliceHtmlByVisibleChars(html, maxChars) {
      let result = "";
      let visibleCount = 0;
      let inTag = false;
      let inEntity = false;
      let entityBuffer = "";
      for (let idx = 0; idx < html.length; idx++) {
        const char = html[idx];
        if (char === "<") inTag = true;
        if (char === "&") inEntity = true;
        if (inEntity) entityBuffer += char;
        if (!inTag && !inEntity) visibleCount++;
        result += char;
        if (inEntity && char === ";") {
          inEntity = false;
          entityBuffer = "";
        }
        if (char === ">") inTag = false;
        if (!inTag && !inEntity && visibleCount >= maxChars) break;
      }
      return result;
    }

    // Inicia a digitação quando a janela de código entra na tela
    const codeWindowObserver = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          typeNextLine();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    codeWindowObserver.observe(document.querySelector(".code-window"));
  }

  /* ------------------------------------------------------------
   * 6. Reveal on scroll (fade + slide para elementos .reveal)
   * ---------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  // Observa qualquer elemento .reveal ainda não observado — chamada de novo
  // após montar conteúdo dinâmico (estatísticas, projetos, depoimentos),
  // já que esses cartões não existem no DOM neste ponto do carregamento.
  function observeReveals() {
    document.querySelectorAll(".reveal").forEach((el, idx) => {
      if (el.dataset.revealBound) return;
      el.dataset.revealBound = "true";
      el.style.setProperty("--i", idx % 8);
      revealObserver.observe(el);
    });
  }
  observeReveals();

  /* ------------------------------------------------------------
   * 7. Contadores animados na seção de estatísticas
   * ---------------------------------------------------------- */
  function renderStats() {
    const grid = document.getElementById("stats-grid");
    grid.innerHTML = "";
    SITE_CONFIG.stats.forEach((stat) => {
      const item = document.createElement("div");
      item.className = "stat-item reveal";
      item.innerHTML = `
        <div class="stat-number" data-target="${stat.value}" data-suffix="${stat.suffix || ""}">0${stat.suffix || ""}</div>
        <div class="stat-label">${stat.label}</div>
      `;
      grid.appendChild(item);
    });
  }
  renderStats();

  function animateCounter(el) {
    const target = Number(el.getAttribute("data-target"));
    const suffix = el.getAttribute("data-suffix") || "";
    if (prefersReducedMotion) {
      el.textContent = target.toLocaleString("pt-BR") + suffix;
      return;
    }
    const duration = 1600;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString("pt-BR") + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("pt-BR") + suffix;
      }
    }
    requestAnimationFrame(step);
  }

  const statsObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          animateCounter(entry.target.querySelector(".stat-number"));
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll(".stat-item").forEach((el) => statsObserver.observe(el));

  /* ------------------------------------------------------------
   * 8. Renderiza projetos a partir do config.js
   * ---------------------------------------------------------- */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    grid.innerHTML = "";

    SITE_CONFIG.projects.forEach((project, idx) => {
      const card = document.createElement("article");
      card.className = "project-card card reveal";
      card.style.setProperty("--i", idx);

      const thumbContent = project.image
        ? `<img src="${project.image}" alt="Captura de tela do projeto ${project.title}" loading="lazy">`
        : `<i class="fa-solid fa-code placeholder-icon" aria-hidden="true"></i>`;

      const liveBtn = project.liveUrl
        ? `<a class="btn btn-primary btn-sm" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Ver Projeto</a>`
        : `<span class="btn btn-primary btn-sm" style="opacity:.45;pointer-events:none;">Em breve</span>`;

      const githubBtn = project.githubUrl
        ? `<a class="btn btn-outline btn-sm" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>`
        : `<span class="btn btn-outline btn-sm" style="opacity:.45;pointer-events:none;"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</span>`;

      card.innerHTML = `
        <div class="project-thumb">
          ${thumbContent}
          <div class="project-overlay">
            ${liveBtn}
            ${githubBtn}
          </div>
        </div>
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="project-links">
            ${liveBtn}
            ${githubBtn}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  renderProjects();

  /* ------------------------------------------------------------
   * 9. Renderiza depoimentos a partir do config.js
   * ---------------------------------------------------------- */
  function renderTestimonials() {
    const grid = document.getElementById("testimonials-grid");
    grid.innerHTML = "";

    if (!SITE_CONFIG.testimonials || SITE_CONFIG.testimonials.length === 0) {
      grid.innerHTML = `
        <div class="testimonials-empty reveal" style="grid-column:1/-1;">
          <i class="fa-regular fa-comments"></i>
          <p>Os depoimentos dos seus clientes aparecerão aqui em breve.</p>
        </div>`;
      return;
    }

    SITE_CONFIG.testimonials.forEach((t, idx) => {
      const card = document.createElement("article");
      card.className = "testimonial-card card reveal";
      card.style.setProperty("--i", idx);

      card.innerHTML = `
        <div class="testimonial-rating" aria-label="${t.rating} de 5 estrelas">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar"><i class="fa-solid fa-quote-left" aria-hidden="true"></i></div>
          <div>
            <div class="name">${t.name}</div>
            <div class="role">${t.role}</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  renderTestimonials();

  // Agora que estatísticas, projetos e depoimentos já existem no DOM,
  // aplica a animação de entrada (.reveal) também a esses cartões novos.
  observeReveals();

  /* ------------------------------------------------------------
   * 10. Formulário de contato
   * ---------------------------------------------------------- */
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...`;

    try {
      if (SITE_CONFIG.formEndpoint) {
        // Envia para o serviço configurado em config.js (ex: Formspree, Web3Forms)
        const res = await fetch(SITE_CONFIG.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, company, message }),
        });
        if (!res.ok) throw new Error("Falha no envio");
      } else {
        // Fallback: abre o cliente de e-mail do visitante com os dados preenchidos
        const subject = encodeURIComponent(`Novo contato via site — ${name}`);
        const body = encodeURIComponent(
          `Nome: ${name}\nE-mail: ${email}\nEmpresa: ${company || "Não informado"}\n\nMensagem:\n${message}`
        );
        window.location.href = `mailto:${SITE_CONFIG.social.email}?subject=${subject}&body=${body}`;
      }

      showFormStatus("success", "Mensagem pronta para envio! Verifique seu app de e-mail ou aguarde nosso retorno.");
      form.reset();
    } catch (err) {
      showFormStatus("error", "Não foi possível enviar agora. Tente novamente ou use o WhatsApp.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });

  function showFormStatus(type, text) {
    formStatus.textContent = text;
    formStatus.className = `form-status is-visible ${type}`;
    setTimeout(() => formStatus.classList.remove("is-visible"), 6000);
  }

  /* ------------------------------------------------------------
   * 11. Ano do rodapé + inicialização final
   * ---------------------------------------------------------- */
  document.getElementById("current-year").textContent = new Date().getFullYear();

  applySocialLinks();
});
