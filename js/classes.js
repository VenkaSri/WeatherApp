class APIDATA {
  constructor(data) {
    this.data = data;
    cityName.innerHTML = data.name;
    this.celsius();
    this.weatherArray();
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

  weatherArray() {
    // weatherConditions.push(this.data.weather);
    weatherConditions.length = 0;
    for (let i of this.data.weather) {
        weatherConditions.push(i);
      }


  }

  dayNightStatus() {
    weatherConditions.length = 1;
      for(let i of weatherConditions) {
         if(i.icon.includes('n')) {
             this.night();
         } else {
            this.morning();
         }
      }
      this.weatherArray();
  }

  morning() {
    console.log(`m`);
    // currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
  }

  night() {
    console.log(`night`);
    // currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
  }
}

function apiData(data) {
  const aData = new APIDATA(data);
  aData.updateData();
  aData.dayNightStatus();

  degFara.addEventListener("click", () => {
    aData.fahrenheit();
  });

  degCel.addEventListener("click", () => {
    aData.celsius();
  });



for(let x of weatherConditions) {
    let id = x.id.toString();
    let icon = x.icon;
    if(id.charAt(0) === '5' ) console.log('x');
}


}
