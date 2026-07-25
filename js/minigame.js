/**
 * ============================================================
 *  MINI GAME — RELAX ZONE (bolinhas quicando)
 * ============================================================
 *  Arquivo isolado do script.js principal: se algo aqui falhar,
 *  o resto do site continua funcionando normalmente.
 *  Física em Canvas 2D puro (sem bibliotecas externas).
 * ============================================================
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    const wrap = document.getElementById("game-canvas-wrap");
    const canvas = document.getElementById("game-canvas");
    if (!wrap || !canvas) return; // seção não presente nesta página — não faz nada

    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ------------------------------------------------------------
     * Configuração da física
     * ---------------------------------------------------------- */
    const GRAVITY = 950; // px/s²
    const WALL_RESTITUTION = 0.72; // energia mantida ao bater na parede
    const BALL_RESTITUTION = 0.86; // energia mantida entre bolinhas
    const AIR_DAMPING = 0.999; // leve perda de energia por frame
    const FLOOR_FRICTION = 0.985; // atrito quando a bolinha repousa no chão
    const MAX_BALLS = 40;
    const INITIAL_BALLS = 10;
    const INTERACTION_RADIUS = 90; // raio de influência do ponteiro (px)

    const COLORS = ["#3b7dff", "#22d3ee", "#6fa2ff", "#a78bfa", "#f472b6", "#fbbf24"];

    let balls = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let running = false;
    let rafId = null;
    let lastTime = null;

    /* ------------------------------------------------------------
     * Criação de bolinhas
     * ---------------------------------------------------------- */
    function randomBall(x, y) {
      const r = 10 + Math.random() * 15;
      return {
        x: x !== undefined ? x : r + Math.random() * (width - 2 * r),
        y: y !== undefined ? y : r + Math.random() * (height * 0.5),
        vx: (Math.random() - 0.5) * 220,
        vy: (Math.random() - 0.5) * 120,
        r,
        mass: r * r,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        flash: 0, // 0..1 — intensidade do brilho de impacto
      };
    }

    function seedBalls(count) {
      balls = [];
      for (let i = 0; i < count; i++) {
        balls.push(randomBall());
      }
    }

    /* ------------------------------------------------------------
     * Redimensionamento responsivo
     * ---------------------------------------------------------- */
    function resize() {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Mantém as bolinhas dentro da nova área após redimensionar
      balls.forEach((b) => {
        b.x = Math.min(Math.max(b.x, b.r), Math.max(width - b.r, b.r));
        b.y = Math.min(Math.max(b.y, b.r), Math.max(height - b.r, b.r));
      });
    }

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(wrap);

    /* ------------------------------------------------------------
     * Física — um passo de simulação
     * ---------------------------------------------------------- */
    function step(dt) {
      // Gravidade e integração de posição
      for (const b of balls) {
        b.vy += GRAVITY * dt;
        b.vx *= AIR_DAMPING;
        b.vy *= AIR_DAMPING;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        if (b.flash > 0) b.flash = Math.max(0, b.flash - dt * 2.4);
      }

      // Colisão com as bordas
      for (const b of balls) {
        if (b.x - b.r < 0) {
          b.x = b.r;
          b.vx = -b.vx * WALL_RESTITUTION;
          b.flash = 1;
        } else if (b.x + b.r > width) {
          b.x = width - b.r;
          b.vx = -b.vx * WALL_RESTITUTION;
          b.flash = 1;
        }
        if (b.y - b.r < 0) {
          b.y = b.r;
          b.vy = -b.vy * WALL_RESTITUTION;
          b.flash = 1;
        } else if (b.y + b.r > height) {
          b.y = height - b.r;
          b.vy = -b.vy * WALL_RESTITUTION;
          if (Math.abs(b.vy) < 40) b.vy = 0; // evita tremular infinitamente no chão
          b.vx *= FLOOR_FRICTION;
          b.flash = Math.max(b.flash, 0.6);
        }
      }

      // Colisão entre bolinhas (O(n²) — ok para poucas dezenas de bolinhas)
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i];
          const b = balls[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          const minDist = a.r + b.r;

          if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = minDist - dist;

            // Separa as bolinhas proporcionalmente à massa
            const totalMass = a.mass + b.mass;
            a.x -= (nx * overlap * b.mass) / totalMass;
            a.y -= (ny * overlap * b.mass) / totalMass;
            b.x += (nx * overlap * a.mass) / totalMass;
            b.y += (ny * overlap * a.mass) / totalMass;

            // Impulso de colisão elástica (com massa)
            const rvx = b.vx - a.vx;
            const rvy = b.vy - a.vy;
            const velAlongNormal = rvx * nx + rvy * ny;
            if (velAlongNormal > 0) continue;

            const impulse = (-(1 + BALL_RESTITUTION) * velAlongNormal) / (1 / a.mass + 1 / b.mass);
            a.vx -= (impulse / a.mass) * nx;
            a.vy -= (impulse / a.mass) * ny;
            b.vx += (impulse / b.mass) * nx;
            b.vy += (impulse / b.mass) * ny;

            a.flash = 1;
            b.flash = 1;
          }
        }
      }
    }

    /* ------------------------------------------------------------
     * Renderização
     * ---------------------------------------------------------- */
    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Fundo com leve grade tecnológica (combina com o resto do site)
      ctx.save();
      ctx.strokeStyle = "rgba(148, 163, 184, 0.06)";
      ctx.lineWidth = 1;
      const grid = 40;
      for (let x = 0; x < width; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      for (const b of balls) {
        ctx.save();

        // Brilho suave no impacto
        if (b.flash > 0) {
          ctx.shadowColor = b.color;
          ctx.shadowBlur = 22 * b.flash;
        }

        const gradient = ctx.createRadialGradient(
          b.x - b.r * 0.35,
          b.y - b.r * 0.35,
          b.r * 0.1,
          b.x,
          b.y,
          b.r
        );
        gradient.addColorStop(0, "rgba(255,255,255,0.9)");
        gradient.addColorStop(0.18, b.color);
        gradient.addColorStop(1, b.color);

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.restore();
      }
    }

    /* ------------------------------------------------------------
     * Loop principal (requestAnimationFrame, com dt em segundos)
     * ---------------------------------------------------------- */
    function loop(time) {
      if (!running) return;
      if (lastTime === null) lastTime = time;
      let dt = (time - lastTime) / 1000;
      lastTime = time;
      dt = Math.min(dt, 1 / 30); // evita "explosão" de física após aba ficar em segundo plano

      if (!prefersReducedMotion) {
        step(dt);
      }
      draw();
      rafId = requestAnimationFrame(loop);
    }

    function start() {
      if (running) return;
      running = true;
      lastTime = null;
      rafId = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }

    // Só anima quando a seção está visível na tela (economiza recursos)
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && document.visibilityState === "visible") {
            start();
          } else {
            stop();
          }
        });
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(wrap);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        stop();
      } else {
        const rect = wrap.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) start();
      }
    });

    /* ------------------------------------------------------------
     * Interação: clique/toque empurra, arraste "varre" as bolinhas
     * ---------------------------------------------------------- */
    let pointerActive = false;
    let lastPointer = null;

    function getPointerPos(e) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        t: performance.now(),
      };
    }

    function pushBallsFrom(pos, strength) {
      for (const b of balls) {
        const dx = b.x - pos.x;
        const dy = b.y - pos.y;
        const dist = Math.hypot(dx, dy);
        if (dist < INTERACTION_RADIUS && dist > 0.001) {
          const falloff = 1 - dist / INTERACTION_RADIUS;
          const nx = dx / dist;
          const ny = dy / dist;
          b.vx += nx * strength * falloff;
          b.vy += ny * strength * falloff;
          b.flash = 1;
        }
      }
    }

    canvas.addEventListener("pointerdown", (e) => {
      pointerActive = true;
      const pos = getPointerPos(e);
      lastPointer = pos;
      pushBallsFrom(pos, 260); // empurrão instantâneo ao clicar/tocar
      canvas.setPointerCapture(e.pointerId);
    });

    canvas.addEventListener("pointermove", (e) => {
      if (!pointerActive || !lastPointer) return;
      const pos = getPointerPos(e);
      const dt = Math.max((pos.t - lastPointer.t) / 1000, 0.001);
      const vx = (pos.x - lastPointer.x) / dt;
      const vy = (pos.y - lastPointer.y) / dt;
      const speed = Math.hypot(vx, vy);
      if (speed > 8) {
        pushBallsFrom(pos, Math.min(speed * 0.55, 900));
      }
      lastPointer = pos;
    });

    function endPointer(e) {
      pointerActive = false;
      lastPointer = null;
      if (e && e.pointerId !== undefined && canvas.hasPointerCapture && canvas.hasPointerCapture(e.pointerId)) {
        canvas.releasePointerCapture(e.pointerId);
      }
    }
    canvas.addEventListener("pointerup", endPointer);
    canvas.addEventListener("pointercancel", endPointer);
    canvas.addEventListener("pointerleave", endPointer);

    /* ------------------------------------------------------------
     * Botões: adicionar / limpar / reiniciar
     * ---------------------------------------------------------- */
    const addBtn = document.getElementById("game-add-ball");
    const clearBtn = document.getElementById("game-clear");
    const restartBtn = document.getElementById("game-restart");

    if (addBtn) {
      addBtn.addEventListener("click", () => {
        if (balls.length >= MAX_BALLS) return;
        balls.push(randomBall(width / 2, height * 0.15));
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        balls = [];
      });
    }

    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        seedBalls(INITIAL_BALLS);
      });
    }

    /* ------------------------------------------------------------
     * Player de áudio local (sem autoplay, sem buscar na internet)
     * ---------------------------------------------------------- */
    const audio = document.getElementById("game-audio");
    const playPauseBtn = document.getElementById("game-play-pause");
    const muteBtn = document.getElementById("game-mute");
    const volumeSlider = document.getElementById("game-volume");
    const audioStatus = document.getElementById("game-audio-status");

    if (audio && playPauseBtn && muteBtn && volumeSlider) {
      audio.volume = Number(volumeSlider.value) / 100;

      function showAudioError() {
        if (!audioStatus) return;
        audioStatus.textContent =
          "Não foi possível carregar a música. Verifique se o arquivo está em assets/audio/roblox-doors-elevator-music-556237.mp3.";
        audioStatus.classList.add("is-visible");
      }

      function hideAudioError() {
        if (!audioStatus) return;
        audioStatus.classList.remove("is-visible");
      }

      function setPlayIcon(isPlaying) {
        const icon = playPauseBtn.querySelector("i");
        if (icon) {
          icon.classList.toggle("fa-play", !isPlaying);
          icon.classList.toggle("fa-pause", isPlaying);
        }
        playPauseBtn.setAttribute("aria-pressed", String(isPlaying));
        playPauseBtn.setAttribute("aria-label", isPlaying ? "Pausar música" : "Reproduzir música");
      }

      playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
          // play() retorna uma Promise — tratamos falha (ex: arquivo ausente) sem gerar erro no console
          const playPromise = audio.play();
          if (playPromise && typeof playPromise.then === "function") {
            playPromise
              .then(() => hideAudioError())
              .catch(() => showAudioError());
          }
        } else {
          audio.pause();
        }
      });

      audio.addEventListener("play", () => setPlayIcon(true));
      audio.addEventListener("pause", () => setPlayIcon(false));
      audio.addEventListener("error", showAudioError);

      muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        const icon = muteBtn.querySelector("i");
        if (icon) {
          icon.classList.toggle("fa-volume-high", !audio.muted);
          icon.classList.toggle("fa-volume-xmark", audio.muted);
        }
        muteBtn.setAttribute("aria-pressed", String(audio.muted));
        muteBtn.setAttribute("aria-label", audio.muted ? "Ativar som" : "Desativar som");
      });

      volumeSlider.addEventListener("input", () => {
        audio.volume = Number(volumeSlider.value) / 100;
        if (audio.volume === 0 && !audio.muted) {
          audio.muted = true;
        } else if (audio.volume > 0 && audio.muted) {
          audio.muted = false;
        }
      });
    }

    /* ------------------------------------------------------------
     * Inicialização
     * ---------------------------------------------------------- */
    resize();
    seedBalls(INITIAL_BALLS);
    draw(); // desenha o primeiro frame mesmo antes de entrar em vista
    window.addEventListener("resize", () => resize());
  }
})();
