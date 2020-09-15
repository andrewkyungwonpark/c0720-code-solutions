import { createElement } from '../lib';

// the createElement function is being imported from '../lib'

export default class TodoList {
  constructor(onToggle) {
    this.onToggle = onToggle;
    this.handleChange = this.handleChange.bind(this);
  }

  // the export default class TodoList is being defined(?)
  // constructor function is being defined, passing in one paramater onToggle
  // onToggle is being assigned to the onToggle property on this object
  // the handleChange property is being binded to this object

  handleChange(event) {
    const todoItem = event.target.closest('[data-todo-id]');
    if (!todoItem) return;
    const todoId = parseInt(todoItem.getAttribute('data-todo-id'), 10);
    this.onToggle(todoId);
  }

  // the handleChange function is being defined passing in one paramter, event
  // the closest method is being called on the target property of the event object, passing in one argument. the return value is being assigned to the const variable named todoItem
  // line 18 there is an if statement, checking if const variable named todoItem is falsy. if it is falsy, return the function.
  // the parseInt method is being called, passing in two arguments the return value of the getAttribute method on the todoItem object, and the number 10
  // the onToggle method is being called on this object, passing in one object, todoId

  renderCheckbox(todo) {
    const checkbox = createElement('input', {
      type: 'checkbox',
      id: `task${todo.id}`,
      class: 'form-check-input'
    });
    checkbox.checked = todo.isCompleted;
    return checkbox;
  }

  // the function named renderCheckbox is being defined, passing in one parameter, todo
  // the createElement method is being called, with two arguments input and an object literal, and is being assigned to the const variable named checkbox
  // the isCompleted property on the todo object is being assigned to the checked property on the checkbox object
  // on line 36, the value stored in the const variable named checkbox is being returned

  renderTodoItem(todo) {
    const labelStyle = todo.isCompleted
      ? 'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
      : 'cursor: pointer; text-decoration: inherit;';
    const todoItem = (
      createElement('li', { class: 'list-group-item', 'data-todo-id': todo.id }, [
        createElement('div', { class: 'form-check d-flex' }, [
          this.renderCheckbox(todo),
          createElement('label', { style: labelStyle, class: 'form-check-label flex-grow-1', for: `task${todo.id}` }, todo.task)
        ])
      ])
    );
    return todoItem;
  }

  // the function named renderTodoItem is being defined, passing in one parameter, todo
  // the isCompleted property on the todo object is being assigned to the const variable named labelStyle
  // ??? lines 46-52
  // on line 56 the value stored in the const variable named todoItem is being returned

  render(todos) {
    const todoList = (
      createElement('ul', { class: 'list-group shadow-sm mb-4' }, todos.map(todo => {
        return this.renderTodoItem(todo);
      }))
    );
    todoList.addEventListener('change', this.handleChange);
    return todoList;
  }
}

// on line 64 the function named render is being returned, passing in one parameter todos
// idk how to read 65-67
// the addEventListener method on the todoList object is being called, passing 2 arguments - the string 'change' and the handleChange property on this object
// the value stored in the const variable todoList is being returned
