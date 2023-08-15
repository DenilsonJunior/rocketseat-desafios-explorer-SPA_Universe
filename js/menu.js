const closed = document.querySelector('.closed');
const open = document.querySelector('.open');
const navbar = document.querySelector('nav');
const navgator = document.querySelectorAll('a');

window.addEventListener("resize", handleResize);
handleResize();

function menuShow() {
    closed.addEventListener('click', () => {
        closed.classList.add('hide');
        open.classList.remove('hide');
        navbar.style.display = 'flex';
    });
    
    open.addEventListener('click', () => {
        open.classList.add('hide');
        closed.classList.remove('hide');
        navbar.style.display = 'none';
    });
}

function handleResize() {
    var larguraViewport = window.innerWidth;

    if (larguraViewport < 768) {
        navbar.style.display = 'none';
        for (var i = 0; i < navgator.length; i++) {
            navgator[i].addEventListener("click", function() {
                verificaNav();
            });
        }
        console.log(larguraViewport)
    } else {
        navbar.style.display = 'flex';
    }
}

function verificaNav() {
    navbar.style.display = 'none';
    closed.classList.remove('hide');
    open.classList.add('hide');
}
