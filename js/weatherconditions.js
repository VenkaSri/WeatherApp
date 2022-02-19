class Weather {
  constructor(id, desc, icon) {
    this.id = id;
    this.desc = desc;
    this.icon = icon;
  }
}


function weatherData(data) {
if(dayOrNight === 'night') {
  switch(typeOfWeather) {
    case 'Clouds': 
    addToArray(data.night.clouds) ;
      break;
    case 'Clear': 
      addToArray(data.night.clear) ;
      break;
    case 'Rain': 
      addToArray(data.night.rain) ;
      break;
    case 'Thunderstorm': 
      addToArray(data.night.thunderstorm) ;
      break;
    case 'Drizzle': 
      addToArray(data.night.drizzle) ;
      break;
    case 'Snow': 
      addToArray(data.night.snow) ;
      break;
    case 'Atmosphere': 
      addToArray(data.night.atmosphere) ;
      break;
    default:
      break;
  }
} else {
  switch(typeOfWeather) {
    case 'Clouds': 
    addToArray(data.day.clouds) ;
      break;
    case 'Clear': 
      addToArray(data.day.clear) ;
      break;
    case 'Rain': 
      addToArray(data.day.rain) ;
      break;
    case 'Thunderstorm': 
      addToArray(data.day.thunderstorm) ;
      break;
    case 'Drizzle': 
      addToArray(data.day.drizzle) ;
      break;
    case 'Snow': 
      addToArray(data.day.snow) ;
      break;
    case 'Atmosphere': 
      addToArray(data.day.atmosphere) ;
      break;
    default:
      break;
  }
}


}

//[rainMArray, cloudMArray, thunderMArray]



function addToArray(wData) {
  for(let x of wData) {
    if(x.id === weatherID) {
      cityInfo.innerHTML = x.desc;
      currentTempIcon.innerHTML = `<img src="images/icons/${x.img}">`;
    }
  }

}