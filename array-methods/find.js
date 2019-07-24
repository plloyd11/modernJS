/*  The find() method returns the value of the first element in the 
    array that satisfies the provided testing function. Otherwise undefined is returned.
*/

const gameScores = [10, 30, 15, 25, 80, 50, 40, 5, 70];

const firstHighScore = gameScores.find(score => {
    // return either a true or false value
    return score > 70;
});

console.log("The high score is " + firstHighScore);