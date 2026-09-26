import { useEffect, useRef } from "react";
import "./App.css";

const PARTICLE_SPACING = 42;
const PARTICLE_SIZE = 1.15;
const INTERACTION_RADIUS = 150;

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pointer = { x: -1000, y: -1000 };
    let particles = [];
    let animationFrame;

    const createParticles = (width, height) => {
      const columns = Math.ceil(width / PARTICLE_SPACING);
      const rows = Math.ceil(height / PARTICLE_SPACING);

      particles = Array.from({ length: columns * rows }, (_, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = (column + 0.5) * PARTICLE_SPACING;
        const y = (row + 0.5) * PARTICLE_SPACING;

        return { homeX: x, homeY: y, x, y, vx: 0, vy: 0, phase: Math.random() * Math.PI * 2 };
      });
    };

    const resize = () => {
      const { innerWidth: width, innerHeight: height, devicePixelRatio = 1 } = window;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      createParticles(width, height);
    };

    const updatePointer = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const draw = (time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);

        if (distance < INTERACTION_RADIUS) {
          const force = (1 - distance / INTERACTION_RADIUS) * 1.8;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
        }

        const drift = Math.sin(time / 1500 + particle.phase) * 0.012;
        particle.vx += (particle.homeX - particle.x) * 0.012 + drift;
        particle.vy += (particle.homeY - particle.y) * 0.012 + drift;
        particle.vx *= 0.86;
        particle.vy *= 0.86;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const proximity = Math.max(0, 1 - distance / INTERACTION_RADIUS);
        context.beginPath();
        context.arc(particle.x, particle.y, PARTICLE_SIZE + proximity * 1.3, 0, Math.PI * 2);
        context.fillStyle = `rgba(218, 232, 255, ${0.24 + proximity * 0.6})`;
        context.fill();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    animationFrame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", updatePointer);
    canvas.addEventListener("pointerleave", () => {
      pointer.x = -1000;
      pointer.y = -1000;
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-label="Interactive particle field" />;
}

export default App;
