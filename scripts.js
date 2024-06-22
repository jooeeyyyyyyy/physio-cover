function openAboutMenu() {
    closeAllMenus();
    document.querySelector('.about-menu').classList.remove('closed');
    document.querySelector('.about-menu').classList.add('open');
}

function openServicesMenu() {
    closeAllMenus();
    document.querySelector('.services-menu').classList.remove('closed');
    document.querySelector('.services-menu').classList.add('open');
}

function openContactMenu() {
    closeAllMenus();
    document.querySelector('.contact-menu').classList.remove('closed');
    document.querySelector('.contact-menu').classList.add('open');
}

function openHomeMenu() {
    closeAllMenus();
    document.querySelector('.home-menu').classList.remove('closed');
    document.querySelector('.home-menu').classList.add('open');
}

function closeAllMenus() {
    document.querySelectorAll('nav').forEach(nav => {
        nav.classList.remove('open');
        nav.classList.add('closed');
    });
}
