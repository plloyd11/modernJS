// Local storage is a method on the window object, so you can just type
// localStorage in the console and it refers to the window

// store data in local storage

localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

// get data from local storage

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(`This motherfuckers name is ${name}, and he is fuckin' ${age} years old!`);

// updating data

localStorage.name = 'Bernie';

name = localStorage.getItem('name');

console.log(`This motherfuckers name is ${name}, and he is fuckin' ${age} years old!`);

// Remove a single item from local storage

localStorage.removeItem('name');

name = localStorage.getItem('name');

console.log(name);

// remove ALL data from local storage
localStorage.clear();

// Stringify & parsing data

const todos = [{ text: 'play mariokart', author: 'Bob' }, { text: 'buy some almonds', author: 'Steve' }, { text: 'eat toast chee', author: 'Ralph' }];

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));
