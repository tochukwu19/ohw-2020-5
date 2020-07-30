const hamburger = document.getElementById('hamburger');
const hamburgerSection = document.getElementById('hamburger-section');

hamburger.addEventListener('click', displayMenu);

function displayMenu(e) {
    if (e.target.src.includes('id=1os-XVZj9O17KJ4BdoKrG4qAhKn6t7Kvh')) {
        e.target.src = 'https://drive.google.com/uc?export=view&id=1Owa6ayH5H83k-NkSzV9fTo-GyhsBUKT0';
        hamburgerSection.style.display = 'flex';
    } else {
        e.target.src = 'https://drive.google.com/uc?export=view&id=1os-XVZj9O17KJ4BdoKrG4qAhKn6t7Kvh';
        hamburgerSection.style.display = 'none';
    }
}