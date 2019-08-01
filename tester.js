const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times5 = [];

numbers.forEach(number => {
    let timeser = number * 5;
    times5.push(timeser);
});

console.log(times5);

const movie = {
    title: "Wonder Woman",
    time: "2pm"
};

movie.status = "unavailable";

console.log(movie);

// Continue & Break

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    // will not log 0 to the console
    if (scores[i] === 0) {
        continue;
    }

    console.log("your score:", scores[i]);

    if (scores[i] === 100) {
        console.log("you're the fucking shit!");
        break;
    }
}
