function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Animação suave ao rolar (fade-in)
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => {
  sec.classList.add('hidden');
  observer.observe(sec);
});

// CSS dinâmico (adiciona via JS)
const style = document.createElement('style');
style.innerHTML = `
  .hidden { opacity: 0; transform: translateY(40px); transition: all 0.6s ease; }
  .visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
