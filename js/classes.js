class APIDATA {
  constructor(data) {
    this.data = data;
    cityName.innerHTML = data.name;
    this.celsius();
    this.weather();
    this.changeSelectedColor();
    this.dateAndTime();
  }

  updateData() {
    console.log(this.data);
  }

  celsius() {
    let temp = this.data.main.temp - 273;
    let feels_like = this.data.main.feels_like - 273;
    cityTemp.innerHTML = temp.toFixed(0);
    feelsLikeTemp.innerHTML = feels_like.toFixed(0);
  }

  fahrenheit() {
    let temp = (this.data.main.temp - 273) * (9 / 5) + 32;
    let feels_like = (this.data.main.feels_like - 273) * (9 / 5) + 32;
    cityTemp.innerHTML = temp.toFixed(0);
    feelsLikeTemp.innerHTML = feels_like.toFixed(0);
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
    for (let i of this.data.weather) {
      if (i.icon.includes("n")) {
        dayOrNight = "night";
      } else {
        dayOrNight = "morning";
      }

      typeOfWeather = i.main;
      weatherID = i.id;
    }
    loadWeatherData();
  }

  dateAndTime() {
    // from stackoverflow
    const timezoneInMinutes = this.data.timezone / 60;
    const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");
    const currDate = moment().utcOffset(timezoneInMinutes).format("dddd MMM, D");
    currentTime.innerHTML = currTime;
    currentDate.innerHTML = currDate;
    
  }
}

function apiData(data) {
  const aData = new APIDATA(data);
  aData.updateData();

  degFara.addEventListener("click", () => {
    aData.fahrenheit();
    isSelected = false;
    aData.changeSelectedColor();
  });

  degCel.addEventListener("click", () => {
    aData.celsius();
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
