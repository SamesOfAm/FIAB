const backButtonDesktop = document.querySelector('.footer.desktop-only .back-to-top img');
backButtonDesktop.addEventListener('click', () => {
    document.querySelector('body,html').getBoundingClientRect().top;
    window.scrollTo({
        behavior: 'smooth',
        top: scroll,
    });
})

const backButtonMobile = document.querySelector('.footer-mobile-only .back-to-top img');
backButtonMobile.addEventListener('click', () => {
    document.querySelector('body,html').getBoundingClientRect().top;
    window.scrollTo({
        behavior: 'smooth',
        top: scroll,
    });
})

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
