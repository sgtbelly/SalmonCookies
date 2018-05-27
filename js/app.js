'use strict';
// Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Create Object literals for all locations
// Pike Place Market Shop
var pikePlace = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
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
  // method for total cookies
  calcTotalCookies: function () {
    for (var total = 0; total < hours.length; total++) {
      this.totalCookies = (this.totalCookies + this.cookiesSoldByHour[total]);
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var pPlace = document.getElementById('pPlace');
    var pikePlace = document.getElementById('pikePlace');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    // this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    pikePlace.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      pPlace.appendChild(liEl);

    }
    var totEl = document.createElement('li');
    totEl.textContent = 'Total :' + this.totalCookies;
    console.log(totEl);
    pPlace.appendChild(totEl);
  }
};

pikePlace.render();


// SeaTac Airport Shop
var SeaTac = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesSoldPerHour: 1.2,
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
  // method for total cookies
  calcTotalCookies: function () {
    for (var total = 0; total < hours.length; total++) {
      this.totalCookies = (this.totalCookies + this.cookiesSoldByHour[total]);
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var SeTac = document.getElementById('SeTac');
    var sTac = document.getElementById('sTac');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    // this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    sTac.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      SeTac.appendChild(liEl);
    }
    var totEl = document.createElement('li');
    totEl.textContent = 'Total :' + this.totalCookies;
    console.log(totEl);
    SeTac.appendChild(totEl);
  }
};

SeaTac.render();

// Seattle Center Shop
var SeaCen = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
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
  // method for total cookies
  calcTotalCookies: function () {
    for (var total = 0; total < hours.length; total++) {
      this.totalCookies = (this.totalCookies + this.cookiesSoldByHour[total]);
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var SeCen = document.getElementById('SeCen');
    var sCen = document.getElementById('sCen');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    // this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    sCen.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      SeCen.appendChild(liEl);

    }
    var totEl = document.createElement('li');
    totEl.textContent = 'Total :' + this.totalCookies;
    console.log(totEl);
    SeCen.appendChild(totEl);
  }
};

SeaCen.render();

// Capital Hill Shop
var CapHill = {
  name: 'Capital Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 2.3,
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
  // method for total cookies
  calcTotalCookies: function () {
    for (var total = 0; total < hours.length; total++) {
      this.totalCookies = (this.totalCookies + this.cookiesSoldByHour[total]);
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var caHill = document.getElementById('caHill');
    var cHill = document.getElementById('cHill');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    // this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    cHill.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      caHill.appendChild(liEl);

    }
    var totEl = document.createElement('li');
    totEl.textContent = 'Total :' + this.totalCookies;
    console.log(totEl);
    caHill.appendChild(totEl);
  }
};

CapHill.render();

// Alkai Beach Shop
var Alkai = {
  name: 'Alkai Beach',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesSoldPerHour: 3.7,
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
  // method for total cookies
  calcTotalCookies: function () {
    for (var total = 0; total < hours.length; total++) {
      this.totalCookies = (this.totalCookies + this.cookiesSoldByHour[total]);
      console.log(this.totalCookies);
    }
  },
  render: function () {
    var AlBea = document.getElementById('alBea');
    var aBea = document.getElementById('aBea');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    this.calcTotalCookies();
    // this.calcTotalCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    aBea.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      AlBea.appendChild(liEl);

    }
    var totEl = document.createElement('li');
    totEl.textContent = 'Total :' + this.totalCookies;
    console.log(totEl);
    AlBea.appendChild(totEl);
  }
};

Alkai.render();