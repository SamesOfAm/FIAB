let calcScrollValue = () => {
    let toTopButton = document.querySelector('.back-to-top');
    let topValue = document.documentElement.scrollTop;
    if (topValue > 300) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
    toTopButton.addEventListener("click", () => {
        document.querySelector('body,html').getBoundingClientRect().top;
        window.scrollTo(0, { lerp: 0.05});
    });
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

const backButtonMobile = document.querySelector('.footer-mobile-only .back-to-top img');
backButtonMobile.addEventListener('click', () => {
    document.querySelector('body,html').getBoundingClientRect().top;
    window.scrollTo({
        behavior: 'smooth',
        top: scroll,
    });
})

/*const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)*/
