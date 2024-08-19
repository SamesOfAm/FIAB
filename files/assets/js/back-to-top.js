const backButton = document.querySelector('.back-to-top img');
backButton.addEventListener('click', () => {
    document.querySelector('body,html').getBoundingClientRect().top;
    window.scrollTo({
        behavior: 'smooth',
        top: scroll,
    });
})