class APIDATA {
  constructor(data) {
    this.data = data;
    cityName.innerHTML = data.name;
    this.metric();
    this.weather();
    this.changeSelectedColor();
    this.dateAndTime();
  }

  metric() {
    let temp = this.data.main.temp - 273;
    let feels_like = this.data.main.feels_like - 273;
    let currWindSpeed = this.data.wind.speed * 3.6;
    let todayHigh = this.data.main.temp_max - 273;
    let todayLow = this.data.main.temp_min - 273;
    cityTemp.innerHTML = temp.toFixed(0);
    feelsLikeTemp.innerHTML = feels_like.toFixed(0);
    windData.innerHTML = `${currWindSpeed.toFixed(1)} km/h`;
    pressureData.innerHTML =  `${this.data.main.pressure / 10} kPa`;
    highData.innerHTML = `${todayHigh.toFixed(0)}&deg;C`;
    lowData.innerHTML = `${todayLow.toFixed(0)}&deg;C`;
  }

  imperial() {
    let temp = (this.data.main.temp - 273) * (9 / 5) + 32;
    let feels_like = (this.data.main.feels_like - 273) * (9 / 5) + 32;
    let currWindSpeed = this.data.wind.speed *  2.237;
    let todayHigh = (this.data.main.temp_max - 273) * (9 / 5) + 32;
    let todayLow = (this.data.main.temp_min - 273) * (9 / 5) + 32;
    cityTemp.innerHTML = temp.toFixed(0);
    feelsLikeTemp.innerHTML = feels_like.toFixed(0);
    windData.innerHTML = `${currWindSpeed.toFixed(1)} mph`;
    pressureData.innerHTML =  `${this.data.main.pressure} mb`;
    highData.innerHTML = `${todayHigh.toFixed(0)}&deg;F`;
    lowData.innerHTML = `${todayLow.toFixed(0)}&deg;F`;
  }

  changeSelectedColor() {
    if (isSelected) {
      degFara.classList.add("selected");
      degCel.classList.remove("selected");
    } else {
      degCel.classList.add("selected");
      degFara.classList.remove("selected");
    }
  }

  weather() {
    let weatherData = this.data.weather[0];
    if (weatherData.icon.includes("n")) {
      dayOrNight = "night";
    } else {
      dayOrNight = "morning";
    }
    typeOfWeather = weatherData.main;
    weatherID = weatherData.id;

    loadWeatherData();
  }

    
  

  dateAndTime() {
    // from stackoverflow
    const timezoneInMinutes = this.data.timezone / 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");
    const currDate = moment().utcOffset(timezoneInMinutes).format("dddd MMM, D");
    const sunriseTime = moment.unix(this.data.sys.sunrise).format("h:mm A");
    const sunsetTime = moment.unix(this.data.sys.sunset).format("h:mm A");
    currentTime.innerHTML = currTime;
    currentDate.innerHTML = currDate; 
    sunriseData.innerHTML = sunriseTime;
    sunsetData.innerHTML = sunsetTime;
  }
}

function apiData(data) {
  console.log(data);
  const aData = new APIDATA(data);
  humidityData.innerHTML = `${data.main.humidity}%`;
  degFara.addEventListener("click", () => {
    aData.imperial();
    isSelected = false;
    aData.changeSelectedColor();
  });

  degCel.addEventListener("click", () => {
    aData.metric();
    isSelected = true;
    aData.changeSelectedColor();
  });
}

function loadWeatherData() {
  $(document).ready(function () {
    $.getJSON("dataFiles/weather.json", function (data) {
      weatherData(data);
    });
  });
}
