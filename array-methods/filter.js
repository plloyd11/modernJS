/*  The filter() method creates a new array with all 
    elements that pass the test implemented by the provided function.
*/

const scores = [10, 30, 15, 25, 50, 40, 5];

// Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise
const filteredScores = scores.filter(score => {
    return score > 20;
});

console.log(filteredScores);

const users = [{
        name: 'Bernie',
        premium: true
    },
    {
        name: 'Elaine',
        premium: false
    },
    {
        name: 'Joe',
        premium: false
    },
    {
        name: 'Maya',
        premium: true
    }
];

const premiumUsers = users.filter(user => {
    return user.premium
});

console.log(premiumUsers);