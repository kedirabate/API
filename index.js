const Apikey = '813fcafcaf1c8cf505aa0544b20a8666';
const fetchButton = document.getElementById('fetchweather');
const resultContainer = document.getElementById('result-container');

fetchButton.addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    console.log(city);


    if (city === '') {
        return;


    } else {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); // You can process and display weather data here
                const { main, weather, wind } = data;
                const { temp, humidity } = main;
                const { description, icon } = weather[0];
                const { speed } = wind;

                document.getElementById("temp").innerText = `Temperature: ${temp}°C`;  // Update temperature
                document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;  // Update humidity
                document.getElementById("description").innerText = `Description: ${description}`;  // Update description
                document.getElementById("wind-speed").innerText = `Wind Speed: ${speed} m/s`;  // Update wind speed


            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }
});
