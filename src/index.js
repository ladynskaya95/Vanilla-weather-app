let apiKey = "217e1884eaeda1d000c71ab70e625169"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${apiKey}&units=metric`;

function displayTemperature(response) {
  document.querySelector("#temperature-degree").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-condition").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
}

axios.get(apiUrl).then(displayTemperature);