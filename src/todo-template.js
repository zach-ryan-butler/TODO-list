function template(todo) {
    let checked = '';

    if(todo.completed) {
        checked = 'checked';
    }

    return /*html*/`
    <li>
        <input type="checkbox" ${checked}> <span>${todo.task}</span>
    </li>
`;
}

export default template;