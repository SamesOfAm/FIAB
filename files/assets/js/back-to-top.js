const backButton = document.querySelector('.back-to-top img');
backButton.addEventListener('click', () => {
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