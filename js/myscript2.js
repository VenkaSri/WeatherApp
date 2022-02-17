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

  degFara.addEventListener("click", () => {
    cityTemp.innerHTML = calculateFaraTemp(response);
    feelsLikeTemp.innerHTML = calculateFaraFeelsTemp(response);
	isSelected = false;
	changeSelectedColor();
  });

  degCel.addEventListener("click", () => {
    cityTemp.innerHTML = calculateCelsiusTemp(response);
    feelsLikeTemp.innerHTML = calculateCelsiusFeelsTemp(response);
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