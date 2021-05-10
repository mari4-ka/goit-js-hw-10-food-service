import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');

themeSwitch.addEventListener('change', changeTheme);

function changeTheme(e) {
    const checkedButton = themeSwitch.checked


    if (checkedButton) {
        bodyTheme.classList.add(Theme.DARK);
        bodyTheme.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'dark-theme');

    } else {
        bodyTheme.classList.remove(Theme.DARK);
        bodyTheme.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', 'light-theme');
    }
}