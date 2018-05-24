'use strict';
// Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Create Object literals for all locations
// Pike Place Market Shop
var pikePlace = {
  name: 'First and Pike',
  minCustPerHour: 3,
  maxCustPerHour: 9,
  avgCookiesSoldPerHour: 6.1,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function () {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  //method for total cookies by Locations
  // calcTotalCookies: function() {
  //   for(var total = 0; total < hours.length; total++) {
  //     this.totalCookies.push(math.floor(this.cookiesSoldbyhour*math.random + this.avgCookiesSoldPerHour))
  //   }
  render: function () {
    var pikeplace = document.getElementById('pikePlace');
    var pPlace = document.getElementById('pPlace');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    // this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    pPlace.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      pikeplace.appendChild(liEl);
    }
  }
};

pikePlace.render();