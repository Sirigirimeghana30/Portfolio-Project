document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');

    function hideSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    function showSection(sectionId) {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
            section.style.display = 'block';
        }
    }

    // Initial state
    hideSections();
    showSection('about');

    // Navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href').substr(1);
            hideSections();
            showSection(target);
        });
    });
});
