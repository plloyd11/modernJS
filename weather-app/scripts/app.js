const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
    // destructure properties
    const { cityDetails, weather } = data;

    // The above does the same as this:

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
        </div>
    `;

    // Update icon based on city weather
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // populate card img with ternarary operator
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    // remove d-none class if present

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const updateCity = async city => {
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value from user
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the UI with the new city
    updateCity(city).then(data => {
        updateUI(data).catch(err => {
            console.log(err);
        });
    });

    // Set local storage - first argument is key name, second is value
    localStorage.setItem('city', city);
});

// If check to see whether there is any local storage
if (localStorage.getItem('city')) {
    // if truthy, updateCity function gets the value of the city in local storage
    updateCity(localStorage.getItem('city'))
        .then(data => {
            updateUI(data);
        })
        .catch(err => {
            console.log(err);
        });
}
