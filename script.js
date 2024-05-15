const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click',()=> {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
