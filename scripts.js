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
    document.querySelector('.scroll-container').scrollTop = 0; 
}

function closeAllMenus() {
    document.querySelectorAll('nav').forEach(nav => {
        nav.classList.remove('open');
        nav.classList.add('closed');
    });
}
function openWhatsapp() {
    window.open('https://wa.me/491628377779?text=Guten%20Tag,%20ich%20würde%20gerne%20einen%20Termin%20bei%20Ihnen%20in%20der%20Praxis%20vereinbaren.', '_blank');
}

function makeCall() {
    window.location.href = 'tel:+491628377779';
}

function sendEmail() {
    window.location.href = 'mailto:cmd.jane@gmail.com';
}
