class APIDATA {
  constructor(data) {
    this.data = data;
    cityName.innerHTML = data.name;
    this.celsius();
    this.weatherArray();
    this.changeSelectedColor(); 
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
    if(isSelected) {
      degFara.classList.add('selected');
      degCel.classList.remove('selected');
    } else {
      degCel.classList.add('selected');
      degFara.classList.remove('selected');
    }
  }

  weatherArray() {
    // weatherConditions.push(this.data.weather);
    weatherConditions.length = 0;
    for (let i of this.data.weather) {
      weatherConditions.push(i);
    }
  }

  dayNightStatus() {
    for (let i of weatherConditions) {
      if (i.icon.includes("n")) {
        this.night();
      } else {
        this.morning();
      }
    }
  }

  morning() {
    iconM();
  }

  night() {
    console.log(rainNArray);
    // currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
  }
}

function apiData(data) {
  const aData = new APIDATA(data);
  aData.updateData();
  aData.dayNightStatus();

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




$(document).ready(function () {
  $.getJSON("dataFiles/weather.json", function( data ) {

    weatherData(data);
  });
})

}