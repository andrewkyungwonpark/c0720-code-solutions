import { createElement, noop } from '../lib';
import TodoList from './todo-list';
import TodoForm from './todo-form';

// on line 1, the createElement and noop functions are being imported from '../lib'
// on line 2 the TodoList function is being imported from './todo-list'
// on line 3 the TodoForm function is bieng imported from './todo-form'

export default class TodoApp {
  constructor(container, nextId, todos, onUpdate = noop) {
    this.container = container;
    this.todos = todos;
    this.nextId = nextId;
    this.todoForm = null;
    this.todoList = null;
    this.isStarted = false;
    this.onUpdate = onUpdate;
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  // on line 9 the export default class TodoApp is being defined
  // on line 10 the constructor function is being defined, passing in 4 parameters
  // container property on this object is being assigned to container
  // todos property on this object is being assigned to todos
  // nextId property on this object is being assigned to nextId
  // todoForm property on this object is being assigned the value of null
  // todoList property on this object is being assigned the value of null
  // isStarted property on this object is being assigned the value of false
  // onUpdate property on this object is being assigned to onUpdate
  // addTodo property is being binded to this object
  // toggleCompleted property is being binded to this object

  start() {
    if (this.isStarted) return;
    this.todoForm = new TodoForm(this.addTodo);
    this.todoList = new TodoList(this.toggleCompleted);
    this.update();
    this.isStarted = true;
  }

  // on line 34, function named start is being defined
  // line 35 return the function if the isStarted property on this object is truthy
  // on line 36 the TodoForm object is being instantiated, passing in one argumnent, the addTodo property on this object. The return value is being assigned to the todoForm property of this object
  // on line 37 the todoList object is being instantiated, passing in one argumnent, the toggleCompleted property on this object. The return value is being assigned to the todoForm property of this object
  // on line 38 the update method on this object is being called
  // on line 39 the isStarted property on this object is being assigned to the boolean value true

  addTodo(task) {
    const id = this.nextId;
    const isCompleted = false;
    const newTodo = { id, task, isCompleted };
    this.todos = this.todos.concat(newTodo);
    this.nextId++;
    this.update();
  }

  // on line 49 addTodo function is being defined, passing in one parameter task
  // on line 50 the nextId property on this object is being assign to the constant variable id
  // ??
  // the concat method is being called on the todos property on this object, passing in one argument new Todo. the return value is being assigned to the todos property on this object
  // the nextId property on this object is being incremented
  // the update method on this object is being called

  toggleCompleted(todoId) {
    this.todos = this.todos.map(todo => {
      if (todo.id !== todoId) return todo;
      return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    });
    this.update();
  }

  // the toggleCompleted function is being defined, passing in one parameter todoId
  // the map method on the todos property on this object is  being assigned to the todos property on this object, passing in one argument, the arrow function named todo
  // on line 67 there is an if statement, checking if the id property on the todo object is not equal to todoId. if it isnot equal, return todo;
  // on line 68, if it is equal, return the assign method on the Object object, passing in three arguments
  // on line 70 the update method on this object is being called

  update() {
    this.container.innerHTML = '';
    this.container.append(
      createElement('h1', { class: 'mb-4' }, 'JS Todo'),
      this.todoForm.render(),
      this.todoList.render(this.todos)
    );
    const { nextId, todos } = this;
    this.onUpdate({ nextId, todos });
  }
}

// function named update is being defined
// on line 80, the innerHTML property of the container property of this object is being assigned to an empty string
// on line 81 the append method of the container property of this object is being called
// the createElement method is being called, passing in three arguments
// the render method on the todoForm property on this object is being called
// the render method on the todoList property on this object is being called, passing in one argument, the todos property on this object
// ?? (idk how to read)
// the onUpdate method on this object is being called, passing in one argumenet
