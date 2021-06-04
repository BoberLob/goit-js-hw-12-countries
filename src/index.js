import './scss/style.scss';
import menuJson from './templates-menu/menu.json';
import menuTemplate from './templates-menu/menu.hbs';

const menuData = {
  menu: menuJson,
};
const menuHtml = menuTemplate(menuData);
document.querySelector('.js-menu').innerHTML = menuHtml;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const body = document.body;

body.setAttribute('class', localStorage.getItem('theme') || Theme.LIGHT);
if (localStorage.getItem('theme') === Theme.DARK) themeSwitcher.checked = true;

themeSwitcher.addEventListener('click', e => {
  if (e.target.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});

// const checkbox = document.querySelector('#theme-switch-toggle');
// const body = document.querySelector('body');
// body.setAttribute('class', localStorage.getItem('theme') || Theme.LIGHT);

// function switcherTheme() {
//   if (event.target.checked) {
//     body.classList.replace(Theme.LIGHT, Theme.DARK);
//     localStorage.setItem('theme', Theme.DARK);
//     return;
//   }

//   body.classList.replace(Theme.DARK, Theme.LIGHT);
//   localStorage.setItem('theme', Theme.LIGHT);
// }

// checkbox.addEventListener('change', switcherTheme());
