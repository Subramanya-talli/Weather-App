const apiKey = "185ea4a4e292415eead8dc4447f97b9c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wetherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (responce.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".wether").style.display = "none";
  } 
  else 
  {
    document.querySelector(".error").style.display = "none";
    let data = await responce.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      wetherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      wetherIcon.src = "images/raining.png";
    } else if (data.weather[0].main == "Clear") {
      wetherIcon.src = "images/sun.png";
    } else if (data.weather[0].main == "Drizzle") {
      wetherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      wetherIcon.src = "images/mist.png";
    }
  }
}

searchBtn.addEventListener("click", function () {
  if (searchinput.value) {
    checkWeather(searchinput.value);
  }
});

async function defaultweather() {
  const responce = await fetch(apiUrl + "Bengaluru" + `&appid=${apiKey}`);
  let data = await responce.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + " °C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  if (data.weather[0].main == "Clouds") {
    wetherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    wetherIcon.src = "images/raining.png";
  } else if (data.weather[0].main == "Clear") {
    wetherIcon.src = "images/sun.png";
  } else if (data.weather[0].main == "Drizzle") {
    wetherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    wetherIcon.src = "images/mist.png";
  }
}

defaultweather();
