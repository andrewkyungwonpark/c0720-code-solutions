import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.name}</button>;
}

const element = <CustomButton name="Click Me!" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
