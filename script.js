const apiKey = "fabd5a9dd155ec2a31096ada4bad9024";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feelsLike");
const weatherCondition = document.getElementById("weatherCondition");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const feel = document.getElementById("feel");

const weatherIcon = document.getElementById("weatherIcon");

async function getWeather(city){

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);

    const data = await response.json();

    cityName.innerHTML = data.name;

    temp.innerHTML =
    Math.round(data.main.temp) + "°C";

    feelsLike.innerHTML =
    Math.round(data.main.feels_like) + "°C";

    feel.innerHTML =
    Math.round(data.main.feels_like) + "°C";

    weatherCondition.innerHTML =
    data.weather[0].main;

    humidity.innerHTML =
    data.main.humidity + "%";

    wind.innerHTML =
    data.wind.speed + " km/h";

    pressure.innerHTML =
    data.main.pressure + " hPa";

    const icon = data.weather[0].icon;

    weatherIcon.src =
    `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

searchBtn.addEventListener("click", ()=>{

    const city = cityInput.value;

    if(city !== ""){
        getWeather(city);
    }

});

getWeather("Nagpur");

function updateTime(){

    const now = new Date();

    document.getElementById("dateTime").innerHTML =
    `${now.toLocaleTimeString()} - ${now.toDateString()}`;
}

setInterval(updateTime,1000);

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("dark-mode");

});
