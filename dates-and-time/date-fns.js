// https://date-fns.org/

const rightNow = new Date();

// formatting options

console.log(dateFns.format(rightNow, 'YYYY'));
console.log(dateFns.format(rightNow, 'MMMM'));
console.log(dateFns.format(rightNow, 'MMM'));
console.log(dateFns.format(rightNow, 'dddd'));
console.log(dateFns.format(rightNow, 'Do'));
console.log(dateFns.format(rightNow, 'dddd, Do, MMMM, YYYY'));

// comparing dates

const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(rightNow, before, {
    addSuffix: true
}));