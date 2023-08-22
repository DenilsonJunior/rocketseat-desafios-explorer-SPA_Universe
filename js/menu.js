const closed = document.querySelector('.closed');
const open = document.querySelector('.open');
const navbar = document.querySelector('nav');
const navgator = document.querySelectorAll('a');

window.addEventListener("resize", handleResize);
menuShow();
handleResize();

function menuShow() {
    open.addEventListener('click', () => toggleMenu(true));
    closed.addEventListener('click', () => toggleMenu(false));
}

function toggleMenu(openMenu) {
    open.classList.toggle('hide', openMenu);
    closed.classList.toggle('hide', !openMenu);
    navbar.style.display = openMenu ? 'flex' : 'none';
}

function handleResize() {
    const larguraViewport = window.innerWidth;

    if (larguraViewport < 768) {
        toggleMenu(false);
        navbar.style.display = 'none';
        navgator.forEach(item => item.addEventListener("click", verificaNav));
    } else {
        navbar.style.display = 'flex';
        navgator.forEach(item => item.removeEventListener("click", verificaNav));
    }
}

function verificaNav() {
    toggleMenu(false);
}