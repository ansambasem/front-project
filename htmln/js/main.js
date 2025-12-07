



alert(' do you want to view the browser');
document.addEventListener('DOMContentLoaded', function () {

    const navbarLinks = document.querySelectorAll('.nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });


    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });

    
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY + 150;
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                navbarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });


    const backToTop = document.querySelector('footer a[href="#"]');
    backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        carousel.addEventListener('mouseover', () => {
            carousel.querySelectorAll('.carousel-inner img').forEach(img => img.pause());
        });
        carousel.addEventListener('mouseout', () => {
            carousel.querySelectorAll('.carousel-inner img').forEach(img => img.play());
        });
    });

});
