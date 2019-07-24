const ul = document.querySelector('ul');
const button = document.querySelector('button');


// Create new element and add it to the bottom of a list

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'New god damn task!';
    ul.append(li);
    //ul.prepend(li);
});


// Remove element completely from the DOM

/*** SHITTY WAY TO DO IT
    const items = document.querySelectorAll('li');

    items.forEach(item => {
        item.addEventListener('click', e =>{
            console.log(e);
            console.log(e.target);
            e.stopPropagation(); // Stop event bubbling up to the parent
            e.target.remove();
        });
    });

*/

// BETTER WAY TO DO IT. THANX EVENT BUBBLING
// Target the parent element and search for children to run the callback on

ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});