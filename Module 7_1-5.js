// Задание 1

function getOwnProp(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log("key: " + key + ", prop: " + obj[key]);
    }
  }
}

let someObject = {
  1: "first",
  2: "second",
  3: "third"
}

let fourth = Object.create(someObject);
fourth["4"] = "fourth";

getOwnProp(fourth);

// Задание 2

function getProp(obj, str) {
  for (let key in obj) {
    if (obj[key] == str) {
      console.log(true);
      break;
    } else {
      console.log(false);
      break;
    }
  }
}

let object1 = {
  a: "строка",
  b: "12",
}

let string1 = "строка";

getProp(object1, string1);

// Задание 3

function createObject() {
  let obj = new Object(null);
  return (obj);
}

createObject();

// Задание 4

function Device(name, consumption, power) {
  this.name = name;
  this.consumption = consumption;
  this.capability = "220W";
}

Device.prototype.switchPower = function () {
  if (this.power == "on") {
    this.power = "off";
    console.log("Прибор отключен");
  } else if (this.power == "off") {
    this.power = "on";
    console.log("Устройство " + this.name + " включено, энергопотребление " + this.consumption + " WT в час");
  }
}

DustCleaner.prototype = new Device();

function DustCleaner(name, consumption, power, type) {
  this.name = name;
  this.consumption = consumption;
  this.power = power;
  this.type = type;
}

DustCleaner.prototype.changeMode = function (mode) {
  console.log(`${this.name} работает в режиме '${mode}'`);
}

Lamp.prototype = new Device();

function Lamp(name, consumption, power, lightcolor) {
  this.name = name;
  this.consumption = consumption;
  this.power = power;
  this.lightcolor = lightcolor;
}

Lamp.prototype.changeMode = function (mode) {
  if (this.power == "on") {
    console.log(`${this.name} работает в режиме '${mode}'`);
  } else if (this.power == "off") {
    console.log(`${this.name} не подключена`);
  }
}

const bosh = new DustCleaner("Пылесос Bosh", 300, "off", "переносной");
const tableLamp = new Lamp("Лампа", 100, "off", "настольная");

// вызов функций

bosh.switchPower();
bosh.changeMode("бесшумный");
tableLamp.changeMode("неяркий");
tableLamp.switchPower();
tableLamp.changeMode("неяркий");


// Задание 5

class Device {
  constructor (name, consumption, power) {
    this.name = name;
    this.consumption = consumption;
    this.capability = "220W";
  }
  switchPower () {
    if (this.power == "on") {
    this.power = "off";
    console.log(this.name + " отключен(а)");
    } else if (this.power == "off") {
    this.power = "on";
    console.log("Устройство " + this.name + " включено, энергопотребление " + this.consumption + " WT в час");
    }
  }
}

class DustCleaner extends Device{
  constructor (name, consumption, power, type) {
      super(name, consumption);
      this.power = power;
      this.type = type;
  }
  changeMode (mode) {
    if (this.power == "on") {
    console.log(`${this.name} работает в режиме '${mode}'`);
    } else if (this.power == "off") {
    console.log(`${this.name} не подключен`);
    }
  }
}

class Lamp extends Device{
  constructor (name, consumption, power, lightcolor) {
    super(name, consumption);
    this.power = power;
    this.lightcolor = lightcolor;
  }
changeMode (mode) {
    if (this.power == "on") {
    console.log(`${this.name} работает в режиме '${mode}'`);
    } else if (this.power == "off") {
    console.log(`${this.name} не подключена`);
    }
  }
}

const bosh = new DustCleaner("Пылесос Bosh", 300, "off", "переносной");
const tableLamp = new Lamp("Лампа", 100, "off", "настольная");

bosh.switchPower();
bosh.changeMode("бесшумный");
tableLamp.changeMode("неяркий");
tableLamp.switchPower();
tableLamp.changeMode("неяркий");
