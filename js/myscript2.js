class clouds {
  constructor(id, desc, icon) {
    this.id = id;
    this.desc = desc;
    this.icon = icon;
  }
}

class Rain {
  constructor(id, desc, icon) {
    this.id = id;
    this.desc = desc;
    this.icon = icon;
  }
}

class Temp {
  constructor(data) {
    this.data = data;
  }

  
}

const morningCloudsArray = new Array();
const nightCloudsArray = new Array();
const cityName = document.querySelector(".city-name");
const cityInfo = document.querySelector(".city-type-time");
const cityTemp = document.querySelector(".city-temp");
const currentTempIcon = document.querySelector(".current-icon");
const userInput = document.querySelector("#userInput");
const feelsLikeTemp = document.querySelector(".feelsLikeTemp p:last-child");
const degFara = document.querySelector(".deg-f");
const degCel = document.querySelector(".deg-c");
const windData = document.querySelector('.wind-data');
let isSelected = true;

function apiData(response) {

console.log(response);
  cityName.innerHTML = response.name;
 

  const timezone = response.timezone; //needs to be converted in minutes
  const timezoneInMinutes = timezone / 60;
  const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");
  for (let x of morningCloudsArray) {
    if (x.id === response.weather[0].id) {
      cityInfo.innerHTML = `${x.desc} | ${currTime}`;
    }
  }

  if (response.weather[0].icon.includes("d")) {
    for (let x of morningCloudsArray) {
      // currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
      if (x.id === response.weather[0].id) {
        currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
      }
    }
  } else {

    for (let x of nightCloudsArray) {
      // currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
      if (x.id === response.weather[0].id) {
        currentTempIcon.innerHTML = `<img src="images/icons/${x.icon}">`;
        cityInfo.innerHTML = `${x.desc} | ${currTime}`;
      }
    }
  }

  changeSelectedColor();
  cityTemp.innerHTML = `${calculateCelsiusTemp(response)}`;
  feelsLikeTemp.innerHTML = `${calculateCelsiusFeelsTemp(response)}`;
  windData.innerHTML =  `${metersToKPH(response)}km/h ${convertDegreeToCompassPoint(response.wind.deg)}`;


  degFara.addEventListener("click", () => {
    cityTemp.innerHTML = calculateFaraTemp(response);
    feelsLikeTemp.innerHTML = calculateFaraFeelsTemp(response);
    windData.innerHTML =  `${metersToMPH(response)}mph ${convertDegreeToCompassPoint(response.wind.deg)}`;
	isSelected = false;
	changeSelectedColor();
  });

  degCel.addEventListener("click", () => {
    cityTemp.innerHTML = calculateCelsiusTemp(response);
    feelsLikeTemp.innerHTML = calculateCelsiusFeelsTemp(response);
    windData.innerHTML =  `${metersToKPH(response)}km/h ${convertDegreeToCompassPoint(response.wind.deg)}`;
	isSelected = true;
	changeSelectedColor();
  });

  // degFara.addEventListener('click', () => {
  // 	cityTemp.innerHTML = `${calculateCelsousTemp(response)}`;
  // })
}

function cloudData(data) {
  for (let i of data.dayCloudStatus) {
    morningCloudsArray.push(new clouds(i.id, i.desc, i.img));
  }
  for (let i of data.nightCloudStatus) {
    nightCloudsArray.push(new clouds(i.id, i.desc, i.img));
  }
}

function calculateCelsiusTemp(data) {
  let temp = data.main.temp;
  let currTemp = temp - 273;
  return currTemp.toFixed(0);
}

function calculateFaraTemp(data) {
  let temp = data.main.temp;
  let currTemp = (temp - 273) * (9 / 5) + 32;
  return currTemp.toFixed(0);
}

function calculateCelsiusFeelsTemp(data) {
  let temp = data.main.feels_like;
  let currTemp = temp - 273;
  return currTemp.toFixed(0);
}

function calculateFaraFeelsTemp(data) {
  let temp = data.main.feels_like;
  let currTemp = (temp - 273) * (9 / 5) + 32;
  return currTemp.toFixed(0);
}

function metersToKPH(data) {
  let speed = data.wind.speed;
  let currSpeed = speed * 3.6;
  return currSpeed.toFixed(1);
}

function metersToMPH(data) {
  let speed = data.wind.speed;
  let currSpeed = speed *  2.237;
  return currSpeed.toFixed(1);
}

document.onkeydown = (e) => {
  if (e.key === "Enter") {
    alert("e");
  }
};

function clearField() {
  userInput.value = "";
}

function changeSelectedColor() {
	if(isSelected) {
		degFara.classList.add('selected');
		degCel.classList.remove('selected');
	} else {
		degCel.classList.add('selected');
		degFara.classList.remove('selected');
	}
}

// degrees (meteorological) ----> point on a compass
function convertDegreeToCompassPoint(windDeg) {
  const compassPoints = ["N", "NNE", "NE", "ENE", 
                         "E", "ESE", "SE", "SSE",
                         "S", "SSW", "SW", "WSW", 
                         "W", "WNW", "NW", "NNW"];
  const rawPosition = Math.floor((windDeg / 22.5) + 0.5);
  const arrayPosition = (rawPosition % 16);
  return compassPoints[arrayPosition];
};