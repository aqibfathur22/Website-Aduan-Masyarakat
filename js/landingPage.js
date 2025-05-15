const dropdown = document.querySelector('#dropdown');
const dropdownShow = document.querySelector('#dropdown-show');
const iconDropdown = document.querySelector('#icon-dropdown');

// dropdown menu
if (dropdown) {
    dropdown.addEventListener('click', function () {
        if (dropdownShow.classList.contains('hidden')) {
            dropdownShow.classList.remove('hidden');
            dropdown.style.border = '2px solid #00A6F4';
            iconDropdown.style.transform = 'rotate(180deg)';
            iconDropdown.style.transition = 'transform 0.5s ease-in-out';
            dropdownShow.style.opacity = '0';
            dropdownShow.style.transition = 'opacity 0.3s ease-in-out';
            setTimeout(() => {
                dropdownShow.style.opacity = '1';
            }, 50);
        } else {
            dropdown.style.border = '2px solid #cad5e2';
            iconDropdown.style.transform = 'rotate(0deg)';
            iconDropdown.style.transition = 'transform 0.5s ease-in-out';
            dropdownShow.style.opacity = '0';
            dropdownShow.style.transition = 'opacity 0.3s ease-in-out';
            setTimeout(() => {
                dropdownShow.classList.add('hidden');
            }, 300);
        }
    });
}

// ketika klik diluar dropdown maka dropdown tertutup
document.addEventListener('click', function (e) {
    if (!dropdownShow.contains(e.target) && !dropdown.contains(e.target)) {
        dropdownShow.style.opacity = '0';
        dropdownShow.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(() => {
            dropdownShow.classList.add('hidden');
        }, 600);
    }
});

// ketika dipilih kategori akan tampil dan dropdown hidden
function category(kategori) {
    document.querySelector('#selected').innerText = kategori;
    document.querySelector('#selected').style.color = '#314158';
    document.querySelector('#selected').style.fontWeight = '400';

    dropdownShow.style.opacity = '0';
    dropdownShow.style.transition = 'opacity 0.3s ease-in-out';
    setTimeout(() => {
        dropdownShow.classList.add('hidden');
    }, 300);

    // Mengembalikan border dropdown ke default
    dropdown.style.border = '2px solid #cad5e2';
    iconDropdown.style.transform = 'rotate(0deg)';
    iconDropdown.style.opacity = '30%';
    iconDropdown.style.transition = 'transform 0.5s ease-in-out';
}

// nomor telepon hanya bisa diisi angka
function onlyNumeric(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
}

// pindah halaman ke beranda
function moveToBeranda() {
    event.preventDefault();

    const target = document.querySelector('#beranda');
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
    });

    nav.style.transform = 'translateX(100%)';
    nav.style.transition = 'transform 0.7s ease-in-out';
    hamburger.classList.remove('hamburger-active');
    setTimeout(() => {
        nav.classList.add('hidden');
    }, 700);
}

// pindah halaman ke pengaduan
function moveToPengaduan() {
    event.preventDefault();

    const target = document.querySelector('#pengaduan');
    window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth',
    });

    nav.style.transform = 'translateX(100%)';
    nav.style.transition = 'transform 0.7s ease-in-out';
    hamburger.classList.remove('hamburger-active');
    setTimeout(() => {
        nav.classList.add('hidden');
    }, 700);
}

function moveToBerita() {
    event.preventDefault();

    const target = document.querySelector('#berita');
    window.scrollTo({
        top: target.offsetTop - 30,
        behavior: 'smooth',
    });

    nav.style.transform = 'translateX(100%)';
    nav.style.transition = 'transform 0.7s ease-in-out';
    hamburger.classList.remove('hamburger-active');
    setTimeout(() => {
        nav.classList.add('hidden');
    }, 700);
}

function moveToProfil() {
    event.preventDefault();

    const target = document.querySelector('#profil');
    window.scrollTo({
        top: target.offsetTop - 30,
        behavior: 'smooth',
    });

    nav.style.transform = 'translateX(100%)';
    nav.style.transition = 'transform 0.7s ease-in-out';
    hamburger.classList.remove('hamburger-active');
    setTimeout(() => {
        nav.classList.add('hidden');
    }, 700);
}

function moveToBeritaPreview() {
    event.preventDefault();
    window.location.href = 'berita.html';
}

// toggle untuk dropdown menu

// const namaOnClick = document.querySelector('#nama');
// const namaLabel = document.querySelector('#nama-label')

// if(namaOnClick) {
//     document.addEventListener('click', function() {
//         namaLabel.style.transform = 'translate(20%)';
//         namaLabel.style.transition = 'transform 0.5s ease-in-out';
//         setTimeout(() => {
//             namaLabel.style.transform = 'translateX(0%)';
//         }, 500);
//     });
// };
