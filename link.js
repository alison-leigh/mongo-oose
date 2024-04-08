document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#sideNavigation a');

    // checks which <section> is in view
    function setActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}


        navLinks.forEach((link) => link.classList.remove('active-link'));
        navLinks[index].classList.add('active-link');
    }

    // Set the active link on scroll
    window.addEventListener('scroll', setActiveLink);
});