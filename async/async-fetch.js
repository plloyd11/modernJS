// Fetch API

fetch('todos/bernie.json')
    .then(response => {
        console.log('resolved', response);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('rejected', err);
    });

// async & await

const getShit = async () => {
    const response = await fetch('todos/ralph.json');

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    const data = await response.json();

    return data;
};

getShit()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));
