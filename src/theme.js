const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');

themeSwitch.addEventListener('change', changeBodyTheme);

function changeBodyTheme(e) {
    if (e.target.checked) {
        replaceTheme(Theme.LIGHT, Theme.DARK);
    } else {
        replaceTheme(Theme.DARK, Theme.LIGHT);
    }
}

function setThemeCheckbox() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        bodyTheme.classList.add(Theme.DARK)
        themeSwitch.setAttribute('checked', 'true');
    } else {
        bodyTheme.classList.add(Theme.LIGHT)
    }
}

setThemeCheckbox();

const replaceTheme = (oldTheme, newTheme) => {
  bodyTheme.classList.add(newTheme);
  bodyTheme.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
}