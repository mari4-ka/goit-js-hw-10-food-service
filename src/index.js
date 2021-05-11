import menuTemplate from './templates/templates.hbs';
import menuItem from './menu.json';

import './theme.js';

import './styles.css';

const menuContainer = document.querySelector('.js-menu');
const menuMarkUp = menuListRender(menuItem);
menuContainer.insertAdjacentHTML('beforeend', menuMarkUp);

// console.log(menuTemplate(menuItem[1]))

function menuListRender(menuItem) {
    // return menuItem
    //     .map(item => menuTemplate(item))
    //     .join('');
    
    return menuItem
        .map(menuTemplate)
        .join('');
}
