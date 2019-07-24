// Function declaration

function greet () {
    console.log('hello there!');
}

// Calling / invoking the function
greet();


// Function Expression - USE THIS

const speak = function() {
    console.log('I RULE');
};

// Calling / invoking the function
speak();

// Arguments & Parameters

const chee = function(name, age, butt) {
    console.log(`Good day, ${name}. You are ${age} years old, and you have nice ${butt}`);
}

chee('ASSMAN', 30, "tits!");

// Returning a value

const calcArea = function(radius) {
    return 3.14 * radius**2;
};

const area = calcArea(5);

console.log(calcArea(552), area);

// ARROW FUNCTIONS

// When we only have one parameter, we dont need ()
// If we return one value, we can scoot it to one line and remove the {}

const calcAreas = radius => 3.14 * radius**2;

const supDawg = () => 'hello, world';

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([20, 30, 50], .20));

// Callbacks & foreach

// Passing in a function as an argument

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    // do something
    console.log(value);
});

// These are the same!

myFunc(value => {
    // do something
    console.log(value);
});


// FOREACH

let people = ['mario', 'luigi', 'ryu', 'shaun', 'bernie'];

const logPerson = (person, index) => {
    console.log(`${index} - hello, ${person} what's good!?`);
}

people.forEach(logPerson);

// FOREACH IN ACTION

const ul = document.querySelector('.people');

let html = ``;

people.forEach(person => {
    // create HTML template for each person
    html += `<li>${person}</li>`
});

ul.innerHTML = html;