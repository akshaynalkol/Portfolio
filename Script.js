/************ Scroll Sections Active Link ************/
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop - 150) {
            currentSection = sectionEl.id;
        }
    });
    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});



/************ Typped JS ************/
const typed = new Typed('.multiple-text', {
    strings: ['Front End Developer ', 'Web Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});



// Scroll Button
let btn = document.getElementById('scrollBtn');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}