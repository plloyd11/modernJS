const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", e => {
    e.preventDefault();
    // looks at the form ID and use it as a reference
    console.log(form.username.value);

    // validation
    const name = form.username.value;

    if (usernamePattern.test(name)) {
        // feedback good info
        feedback.textContent = "That username is valid!";
    } else {
        // feedback help
        feedback.textContent = "That username must contain letters only & be between 6-12 characters in length!";
    }
});

form.username.addEventListener("keyup", e => {
    console.log(e);

    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute("class", "success");
    } else {
        form.username.setAttribute("class", "error");
    }
});

// Testing RegEx

const myName = "petemo2g!!";
const pattern = /^.{6,10}$/;

let result = pattern.test(myName);

console.log(result);

if (result) {
    console.log("regex test passed! :)");
} else {
    console.log("regex test FAILED");
}

let answer = myName.search(pattern);
