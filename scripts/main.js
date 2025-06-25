let swiper = new Swiper(".collection-content", {
    spaceBetween: 10,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        970: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    }
});

// header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})

// menu 
let menu = document.querySelector('.nav-links');
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('menu-open');
}

const animate = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
});

animate.reveal('.nav');
animate.reveal('.home-text, .promotion-text, .copyright-p', {origin: 'left'});
animate.reveal('.copyright .social', {origin: 'right'});
animate.reveal('.home-img, .promotion-img', {origin: 'bottom'});
animate.reveal('.feature, .collection-box, .footer-box', {interval: 200});