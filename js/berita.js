// pindah halaman ke beranda
function moveToBeranda() {
    event.preventDefault();
    window.location.href = 'landingPage.html#beranda';
}

function moveToPengaduan() {
    event.preventDefault();

    if (!window.location.href.includes('landingPage.html')) {
        window.location.href = 'landingPage.html#pengaduan';
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth',
        });
    }

    nav.style.transform = 'translateX(100%)';
    nav.style.transition = 'transform 0.7s ease-in-out';
    hamburger.classList.remove('hamburger-active');
    setTimeout(() => {
        nav.classList.add('hidden');
    }, 700);

    header.classList.add('nav-fix');
    header.style.transition = 'background-color 0.5s ease-in-out';
}

// pindah halaman ke berita
function moveToBerita() {
    event.preventDefault();

    if (!window.location.href.includes('landingPage.html')) {
        window.location.href = 'landingPage.html#berita';
        window.scrollTo({
            top: target.offsetTop - 30,
            behavior: 'smooth',
        });
    }

    nav.style.transform = 'translateX(100%)';
    nav.style.transition = 'transform 0.7s ease-in-out';
    hamburger.classList.remove('hamburger-active');
    setTimeout(() => {
        nav.classList.add('hidden');
    }, 700);

    header.classList.add('nav-fix');
    header.style.transition = 'background-color 0.5s ease-in-out';
}

// pindah halaman ke profil
function moveToProfil() {
    event.preventDefault();

    if (!window.location.href.includes('landingPage.html')) {
        window.location.href = 'landingPage.html#profil';
        window.scrollTo({
            top: target.offsetTop - 30,
            behavior: 'smooth',
        });
    }

    nav.style.transform = 'translateX(100%)';
    nav.style.transition = 'transform 0.7s ease-in-out';
    hamburger.classList.remove('hamburger-active');
    setTimeout(() => {
        nav.classList.add('hidden');
    }, 700);

    header.classList.add('nav-fix');
    header.style.transition = 'background-color 0.5s ease-in-out';
}
