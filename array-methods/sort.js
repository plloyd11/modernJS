/*  The sort() method sorts the elements of an array in place and returns the array. 
    The default sort order is built upon converting the elements into strings, 
    then comparing their sequences of UTF-16 code units values.
*/

// Sort is a destructive array method

// Sorting Strings 
const names = ['mario', 'bernie', 'bob', 'steve', 'rufus'];

names.sort();
names.reverse();

// Sorting numbers

const moreScores = [10, 50, 24, 40, 98, 100];

moreScores.sort((a, b) => b - a);

// to reverse
moreScores.sort((a, b) => a - b);


// Sorting objects

const playerHaters = [
    {name: 'Rufus', score: 20},
    {name: 'Al', score: 50},
    {name: 'Ted', score: 10},
    {name: 'Xavier', score: 90},
    {name: 'Jason', score: 60}
];


// the a & b parameters represent two consecutive elements inside the array
playerHaters.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0;
    }
});

// shorthand way of writing the callback function above. This sorts the objects by highest score

playerHaters.sort((a, b) => b.score - a.score);

console.log(playerHaters);