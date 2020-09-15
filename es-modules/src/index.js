import TodoApp from './components/todo-app';

const container = document.querySelector('#app');

const nextId = 4;

const todos = [
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

const app = new TodoApp(container, nextId, todos, newState => {
  /* eslint-disable no-console */
  console.log(newState);
});

app.start();

// on line 1 the TodoApp function is being imported from './components/todo-app'
// on line 2 the querySelector method on the document object is being called, passing in one argument, #app and being assigned to the constant variable container
// on line 4 the number 4 is being assigned to the constant variable nextId
// on line 7 an array literal containing 3 object literals is being assigned to the constant variable todos
// on line 25 the Todo function is being initialized and being assigned to the constant variable named app, passing in four arguments - container, nextID, todos, and the arrow function named newState
// on line 27 the log method of the console object is being called, passing in one argument, newState
// one line 30 the start method on the app object is being called
