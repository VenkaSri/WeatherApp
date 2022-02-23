class Atmosphere {
  constructor(id, desc, icon) {
    this.id = id;
    this.desc = desc;
    this.icon = icon;
  }
}

function weatherData(data) {
  if (dayOrNight === "night") {
    atmosphereData(data.night.atmosphere);
    switch (typeOfWeather) {
      case "Clouds":
        loopThroughJSON(data.night.clouds);
        break;
      case "Clear":
        loopThroughJSON(data.night.clear);
        break;
      case "Rain":
        loopThroughJSON(data.night.rain);
        break;
      case "Thunderstorm":
        loopThroughJSON(data.night.thunderstorm);
        break;
      case "Drizzle":
        loopThroughJSON(data.night.drizzle);
        break;
      case "Snow":
        loopThroughJSON(data.night.snow);
        break;
      default:
        break;
    }
  } else {
    atmosphereData(data.day.atmosphere);
    switch (typeOfWeather) {
      case "Clouds":
        loopThroughJSON(data.day.clouds);
        break;
      case "Clear":
        loopThroughJSON(data.day.clear);
        break;
      case "Rain":
        loopThroughJSON(data.day.rain);
        break;
      case "Thunderstorm":
        loopThroughJSON(data.day.thunderstorm);
        break;
      case "Drizzle":
        loopThroughJSON(data.day.drizzle);
        break;
      case "Snow":
        loopThroughJSON(data.day.snow);
        break;
      default:
        break;
    }
  }
}

//[rainMArray, cloudMArray, thunderMArray]

function loopThroughJSON(wData) {
  for (let x of wData) {
    if (x.id === weatherID) {
      cityInfo.innerHTML = x.desc;
      currentTempIcon.innerHTML = `<img src="images/icons/${x.img}">`;
    }   
  }
}

function atmosphereData(atmosData) {
  for (let x of atmosData) {
    if (x.id === weatherID) {
      cityInfo.innerHTML = x.desc;
      currentTempIcon.innerHTML = `<img src="images/icons/${x.img}">`;
    }   
  }
}