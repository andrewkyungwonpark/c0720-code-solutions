import { createElement } from '../lib';

// on line 1 the createElement function is being imported from ../lib

export default class TodoForm {
  constructor(onSubmit) {
    this.newTask = '';
    this.element = null;
    this.onSubmit = onSubmit;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // the export default class TodoForm is being defined
  // the newTask property on this property is being assigned an empty string
  // the element property on this property is being assigned a value of null
  // the onSubmit property on this property is being assigned onSubmit
  // the handleChange property is being bound to this object
  // the handleSubmit proeprty is being bound to this object

  handleChange(event) {
    this.newTask = event.target.value;
  }

  // on line 21 the handleChange function is being defined, passing in one parameter, event
  // the value property on the target property of the event object is being assigned to the newTast property on this object

  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit(this.newTask);
    this.newTask = '';
    event.target.reset();
    event.target.querySelector('input').focus();
  }

  // the handleSubmit function is being defined, passing in one argument, the event
  // the preventDefault method on this object is being called
  // the onSubmit method on this object is being called, passing in on argument, the value stored in the newTask property on this object
  // an empty string is being assigned to the newTask property on this object
  // the reset method on the target property on the event object is being called
  // the focus method is being chained (?) to the querySelector method, which is passing 1 argument, on the target property on the event object (???)

  render() {
    if (this.element) return this.element;
    this.element = (
      createElement('form', { class: 'shadow-sm mb-4' }, [
        createElement('div', { class: 'input-group' }, [
          createElement('input', {
            type: 'text',
            required: true,
            class: 'form-control',
            placeholder: 'What to do?'
          }),
          createElement('div', { class: 'input-group-append' }, [
            createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Add Todo')
          ])
        ])
      ])
    );
    this.element.addEventListener('change', this.handleChange);
    this.element.addEventListener('submit', this.handleSubmit);
    return this.element;
  }
}

// the function named render is being called
// on line 45 there is an if statement checkign if the element property on this object is truthy. if it is truthy, return the element property.
// idk how to read 47-56
// the addEventListener method on the element property on this object is being called, passing in 2 arguments - the string 'change' and the handlechange property on this object
// the addEventListener method on the element property on this object is being called, passing in 2 arguments - the string 'submit' and the handlesubmit property on this object
// the value stored in the element property on this object is being returned
