import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number;
};

const MAX_DISTANCE = 185;

const createParticles = (count: number, width: number, height: number): Particle[] => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    z: 0.45 + Math.random() * 0.9
  }));
};

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      active: false
    };

    const colors = {
      node: "#38bdf8",
      line: "#2563eb"
    };

    const updateColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--accent").trim();
      const accent2 = styles.getPropertyValue("--accent-2").trim();
      colors.line = accent || colors.line;
      colors.node = accent2 || colors.node;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(70, Math.min(170, Math.floor((width * height) / 13000)));
      particles = createParticles(count, width, height);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        particle.x += particle.vx * particle.z;
        particle.y += particle.vy * particle.z;

        if (particle.x < -12 || particle.x > width + 12) {
          particle.vx *= -1;
        }

        if (particle.y < -12 || particle.y > height + 12) {
          particle.vy *= -1;
        }

        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 18000) {
            const influence = (18000 - distSq) / 18000;
            particle.vx += (dx / 80000) * influence;
            particle.vy += (dy / 80000) * influence;
          }
        }

        particle.vx = Math.max(-1.05, Math.min(1.05, particle.vx));
        particle.vy = Math.max(-1.05, Math.min(1.05, particle.vy));
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.5 * ((a.z + b.z) / 2);
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = colors.line;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        ctx.globalAlpha = 0.55 + particle.z * 0.3;
        ctx.fillStyle = colors.node;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1 + particle.z * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrame = window.requestAnimationFrame(render);
    };

    const renderStatic = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        ctx.globalAlpha = 0.36;
        ctx.fillStyle = colors.node;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.active = true;
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const onThemeChange = () => {
      updateColors();
    };

    updateColors();
    resize();

    if (mediaQuery.matches) {
      renderStatic();
    } else {
      render();
    }

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseout", onMouseLeave, { passive: true });
    mediaQuery.addEventListener("change", onThemeChange);

    const observer = new MutationObserver(onThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"]
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
      mediaQuery.removeEventListener("change", onThemeChange);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
};

export default ParticleNetwork;
