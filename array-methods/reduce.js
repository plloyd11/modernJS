/*  The reduce() method executes a reducer function (that you provide) 
    on each member of the array resulting in a single output value.

    ie - reduce an Array into a single value
*/

// more reading: https://medium.freecodecamp.org/reduce-f47a7da511a9

const reduceScores = [10, 30, 15, 25, 80, 50, 40, 5, 70];

// acc = accumulator
// curr = current

const result = reduceScores.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    }
    return acc;
}, 0);

console.log("what the hell is this! " + result);

let data = [{
        country: 'China',
        pop: 1409517397,
    },
    {
        country: 'India',
        pop: 1339180127,
    },
    {
        country: 'USA',
        pop: 324459463,
    },
    {
        country: 'Indonesia',
        pop: 263991379,
    }
]

const sum = data.reduce((acc, val) => {
    return val.country === 'China' ? acc : acc + val.pop;
}, 0);

console.log(sum);

const votes = [
    'angular',
    'angular',
    'react',
    'angular',
    'vue',
    'vue',
    'react',
    'angular',
    'vanilla',
    'vue'
]

const reducer = votes.reduce((acc, curr) => {
    if (!acc[curr]) {
        acc[curr] = 1;
    } else {
        acc[curr] = acc[curr] + 1
    }

    return acc;

},{});

console.log(reducer);