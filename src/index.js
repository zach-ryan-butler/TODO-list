import template from './todo-template.js';
import htmlToDom from './html-to-DOM.js';
import todos from '../data/todo-list.js';

const list = document.getElementById('list');

todos.forEach(todo => {
    const html = template(todo);
    const dom = htmlToDom(html);
    list.appendChild(dom);
});