/* eslint-disable no-console */
fetch('https://pokeapi.co/api/v2/pokemon/blastoise')
  .then(response => response.json())
  .then(data => console.log(data));
