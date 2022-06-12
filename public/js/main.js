const sr = ScrollReveal({
    distance: "50px",
    duration: "1500",
    easing: "cubic-bezier(0.68,-0.55,0.265,1.55)"
});

sr.reveal('.showcase__title, .showcase__image, .section-metadata,.swiper', {
    origin: 'top',
    interval: '250'
})

sr.reveal('.service__image-wrapper, .about__information, .post--left', {
    origin: 'left',
})


sr.reveal('.services__list, .about__image, .post--right', {
    origin: 'right',
})

sr.reveal('.footer__container', {
    origin: 'top'
})