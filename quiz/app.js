const correctAnswers = ['C', 'B', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const resultContainer = document.querySelector('.result');
const finalScore = document.querySelector('.result span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // Show results on page and scroll to top
    resultContainer.classList.remove('d-none');
    scrollTo(0, 0);

    let output = 0;
    const timer = setInterval(() => {
        finalScore.textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer)
        } else {
            output++;
        }
    }, 10);

});




let i = 0;
const timer = setInterval(() => {
    console.log('hell');
    i++;
    if (i === 5) {
        clearInterval(timer);
    }
}, 1000);