/*  The map() method creates a new array with the results 
    of calling a provided function on every element in the calling array.
*/

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => {
    return price / 2;
});

console.log(salePrices);

const products = [{
        name: 'gold star',
        price: 20
    },
    {
        name: 'mushroom',
        price: 40
    },
    {
        name: 'green shells',
        price: 30
    },
    {
        name: 'banana skin',
        price: 10
    },
    {
        name: 'red shells',
        price: 50
    }
];

const saleProdcuts = products.map(product => {
    if ( product.price > 30 ) {
        return {name: product.name, price: product.price / 2};
    } else {
        return product;
    }
});

console.log(saleProdcuts);

// Method Chaining

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} dollars`);

console.log(promos);