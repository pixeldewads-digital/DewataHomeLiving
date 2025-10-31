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

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        const scrollThreshold = 50; // Pixels to scroll before changing navbar style

        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check in case the page is loaded below the threshold
        handleScroll();
    }
});
