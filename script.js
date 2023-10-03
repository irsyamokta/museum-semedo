const home = document.getElementById('home');
const nav = document.getElementById('nav');
const homeHeight = home.clientHeight;

window.addEventListener('scroll', function () {
    const scrollPosition = this.scrollY;
    if (scrollPosition > homeHeight) {
        nav.style.backgroundColor = '#ed614b';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});