import menuCardsTpl from '../templates/template.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');

const markupMenu = createMenuMarkup(menu);
menuListRef.insertAdjacentHTML('beforeend', markupMenu.join(''));

function createMenuMarkup(menu) {
  return menu.map(menuCardsTpl);
}
