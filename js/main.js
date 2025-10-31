// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".navbar");
  const btn = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");
  const hero = document.querySelector(".hero");
  const reveals = document.querySelectorAll(".fade-in");

  // 1) Navbar: transparan -> solid
  const onScrollNav = () => {
    if (window.scrollY > 80) header.classList.add("is-solid");
    else header.classList.remove("is-solid");
  };
  window.addEventListener("scroll", onScrollNav);
  onScrollNav();

  // 2) Reveal on scroll (IntersectionObserver)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.15 });
  reveals.forEach(el => io.observe(el));

  // 3) Parallax hero (backgroundPositionY)
  let ticking = false;
  const parallax = () => {
    if (!hero) return;
    const speed = 0.2; // semakin kecil, semakin halus
    const y = window.scrollY * speed;
    hero.style.backgroundPosition = `center calc(50% + ${y}px)`;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        parallax();
        ticking = false;
      });
      ticking = true;
    }
  });
  parallax(); // initial

  // 4) Mobile menu
  btn?.addEventListener("click", () => links.classList.toggle("show"));
});
