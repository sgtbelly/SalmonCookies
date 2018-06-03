'use strict';
// Hours, Locations, Net Total

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var alllocations = [];
// var netTotal = 0

// Create Object Constructors

function MakeShop (name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  alllocations.push(this);
}
console.log(MakeShop);
console.log(alllocations);

// New Locations

function createShops () {
  new MakeShop('First and Pike', 23, 65, 6.3);
  new MakeShop('Seatac Airport', 3, 24, 1.2);
  new MakeShop('Seattle Center', 11, 38, 3.7);
  new MakeShop('Capitol Hill', 20, 38, 2.3);
  new MakeShop('Alki Beach', 2, 16, 4.6);
}
console.log(createShops);
createShops();
// Table Data
// method for random customers by hour
MakeShop.prototype.calcRandCustByHour = function () {
  for (var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    console.log(this.randCustByHour[i]);
  }
};
// method for cookies sold by hour
MakeShop.prototype.calcCookiesSoldByHour = function () {
  for (var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
    console.log(this.cookiesSoldByHour[j]);
  }
};
// method for total cookies
MakeShop.prototype.calcTotalCookies = function () {
  for (var total = 0; total < hours.length; total++) {
    this.totalCookies = (this.totalCookies + this.cookiesSoldByHour[total]);
    console.log(this.totalCookies);
  }
};
// making the table
// making the header
function headerRow () {
  var cookieShops = document.getElementById('cookieShops');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Location Total';
  trEl.appendChild(thEl);
  cookieShops.appendChild(trEl);
}

function tblBody () {
  var cookieShops = document.getElementById('cookieShops');
  var tdEl = document.createElement('td');
  for (var j = 0; j < alllocations.length; j++) {
    var trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = alllocations[j].name;
    console.log(alllocations[j]);
    trEl.appendChild(tdEl);
    alllocations[j].calcRandCustByHour();
    alllocations[j].calcCookiesSoldByHour();
    alllocations[j].calcTotalCookies();
    for (var k = 0; k < hours.length; k++) {
      tdEl = document.createElement('td');
      console.log(alllocations[j]);
      tdEl.textContent = alllocations[j].cookiesSoldByHour[k];
      trEl.appendChild(tdEl);
    }
    console.log(alllocations[j].totalCookies);
    tdEl = document.createElement('td');
    tdEl.textContent = alllocations[j].totalCookies;
    trEl.appendChild(tdEl);
    cookieShops.appendChild(trEl);
  }
}

function tblFooter () {
  var cookieShops = document.getElementById('cookieShops');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  trEl.textContent = 'Total';
  for (var m = 0; m < hours.length; m++) {
    alllocations[m].calcTotalCookies[m];
    tdEl = document.createElement('td');
    tdEl.textContent = alllocations[m].totalCookies[m];
    trEl.appendChild(tdEl);
  }
  cookieShops.appendChild(trEl);
}
headerRow();
tblBody();
tblFooter();
// form

function form (event) {
  var storeform = document.getElementById('storeform');
  event.preventDefault();
  // add negstive input rules later :)

  console.log(event);
  // key value pairs need match to constructor function key value
  // you are creating a new instance by using 'new' of your constructor function
  var newName = event.target.name.value;
  var newMinCustPerHour = Number(event.target.minCustPerHour.value);
  var newMaxCustPerHour = Number(event.target.maxCustPerHour.value);
  var newAvgCookiesSoldPerHour = Number(event.target.avgCookiesSoldPerHour.value);

  new MakeShop(newName, newMinCustPerHour, newMaxCustPerHour, newAvgCookiesSoldPerHour);


  headerRow();
  tblBody();
  tblFooter();

  event.target.name.value = 0;
  event.target.minCustPerHour.value = 0;
  event.target.maxCustPerHour.value = 0;
  event.target.avgCookiesSoldPerHour.value = 0;

  storeform.innerHTML = '';
}

form.addEventListener('submit', form);

console.log(headerRow);
console.log(tblBody);