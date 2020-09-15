import toArray from './to-array';

// there is a function definition named createElement
// passing in 3 parameters tagName, attributes, and children
// on line 8, the createElement method of the document object is being called
// passing in the argument tagName. That value is being assigned to the constant variable named parent
// on line 10, there is a for in loop - for each constant variable named name in the attributes object
// line 13 the setAttribute method of the parent object is being called, with two arguments - name, and attribuate @ name
// on line 16 the forEach method passing one argument, the arrow function named child. is being chained onto the toArray method
// line 17 there is an if statement, checking if there is not an instance of child in the HTMLElement object
// if there is not an instancem, the createTextNode property of the document object is being called, passing in one argument, child, and is being assigned to the variable named child
// line 23 the appendChild method of the parent object is being called, passing in one argument - child
// line 26 the constant variable named parent is being returned
export default function createElement(tagName, attributes, children = []) {
  const parent = document.createElement(tagName);
  for (const name in attributes) {
    parent.setAttribute(name, attributes[name]);
  }
  toArray(children).forEach(child => {
    if (!(child instanceof HTMLElement)) {
      child = document.createTextNode(child);
    }
    parent.appendChild(child);
  });
  return parent;
}
