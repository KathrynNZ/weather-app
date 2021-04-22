//Search city and display current temp

function search(city) {
  let apiKey = "5238f8c1d406c12784c08d3c68d9a8e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}


function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city-input").value;

  search(city);
}

  let cityForm = document.querySelector("#search-city-form");
  cityForm.addEventListener("submit", handleSubmit)

search("New York");

function showTemperature(response) {
 document.querySelector("#current-city").innerHTML = response.data.name;
 document.querySelector("#current-temperature").innerHTML = Math.round(response.data.main.temp);

 document.querySelector("#current-temp-high").innerHTML = Math.round(response.data.main.temp_max);
 document.querySelector("#current-temp-low").innerHTML = Math.round(response.data.main.temp_min);
 console.log(response.data);
}



//Bonus location button

function searchLocation(position) {
  console.log(position);
  let apiKey = "5238f8c1d406c12784c08d3c68d9a8e7";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(position) {
 navigator.geolocation.getCurrentPosition(searchLocation);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentLocation);



//Day and time

let now = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = days[now.getDay()];
        
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes <10) {
      minutes = `0${minutes}`;
    }


    let currentDay = document.querySelector("#current-day");
    let currentTime = document.querySelector("#current-time");

    currentDay.innerHTML = `${today}`;
    currentTime.innerHTML = `${hours}:${minutes}`;


    if(hours <=11) {
      currentTime.innerHTML = `${hours}:${minutes} am`;
    } else {
      currentTime.innerHTML = `${hours}:${minutes} pm`;
    }