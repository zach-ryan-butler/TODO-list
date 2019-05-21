import template from '../src/todo-template.js';
const test = QUnit.test;

test('is true is checked', function(assert) {
    //Arrange
    const todo = {
        task: 'Learn templates',
        completed: true
    };

    const expected = /*html*/`
        <li>
            <input type="checkbox" checked> <span>Learn templates</span>
        </li>
`;
    //Act 
    const html = template(todo);
    

    //Assert
    assert.htmlEqual(html, expected);
});

test('is false not checked', function(assert) {
    //Arrange
    const todo = {
        task: 'Learn forEach',
        completed: false
    };

    const expected = /*html*/`
    <li>
        <input type="checkbox" > <span>Learn forEach</span>
    </li>
`;
    //Act 
    const html = template(todo);
    

    //Assert
    assert.htmlEqual(html, expected);
});