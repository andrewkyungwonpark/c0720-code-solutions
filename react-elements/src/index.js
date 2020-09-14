import React from 'react';
import ReactDOM from 'react-dom';

const helloReact = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(
  helloReact,
  document.getElementById('root')
);
