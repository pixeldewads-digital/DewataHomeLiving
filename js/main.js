document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu ---
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            hamburgerBtn.classList.toggle('is-active');
        });
    }

    document.addEventListener("DOMContentLoaded", ()=>{
  const header = document.querySelector(".navbar");
  const btn = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");

  const onScroll = ()=>{
    if(window.scrollY > 80){ header.classList.add("is-solid"); }
    else{ header.classList.remove("is-solid"); }
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  btn?.addEventListener("click", ()=> links.classList.toggle("show"));
});

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        const scrollThreshold = 50; // Pixels to scroll before changing navbar style

        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add('is-solid');
            } else {
                navbar.classList.remove('is-solid');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check in case the page is loaded below the threshold
        handleScroll();
    }
});
