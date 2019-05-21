const test = QUnit.test;

function template(todo) {

}

test('is true if checked', function(assert) {
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