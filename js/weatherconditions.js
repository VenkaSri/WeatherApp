class Rain {
  constructor(id, desc, icon) {
    this.id = id;
    this.desc = desc;
    this.icon = icon;
  }
}


function rainData(data) {
  for (let i of data.dayStatus) {
    rainMArray.push(new Rain(i.id, i.desc, i.img));
  }
  for (let i of data.nightStatus) {
    rainNArray.push(new Rain(i.id, i.desc, i.img));
  }
}

//[rainMArray, cloudMArray, thunderMArray]


function iconM() {
  for(let i of rainMArray) {
    for(let x of weatherConditions) {
      if(i.id === x.id) {
        currentTempIcon.innerHTML = `<img src="images/icons/${i.icon}">`;
        wType.innerHTML = x.description;
      }
    }
  }
}