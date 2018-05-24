'use strict';

// these are notes for your co-working session to help you get started
// consider using math.random(); look that up in MDN
// Hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Create Object literals for all locations
// Pike Place Market Shop

var pikePlace = {
  minCustPerHour: 3,
  maxCustPerHour: 9,
  avgCookiesSoldByHour: 6.1,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  CalcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    //getters and setters!
    var pikePlace = document.getElementById('pikePlace');
    var pPlace = document.getElementById('pPlace');
    //calling the methods in the object literal
    this.randCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
  }
  getRandom: function (min, max) {
    return Math.random() * (max - min) + min;
  }
};
console.log;
pikePlace.getRandom(pikePlace.min, pikePlace.max);
var listPikePlace = function (pikePlace) {
  for (var prop in pikePlace) {
    var elListPikePlace = document.getElementById('').sales.html = prop;
  }
};
function pikePlace_table (pikePlace) {
  // get the reference for the body
  var bodyPikePlace = document.getElementsByTagName('pikePlace')[0];
  pikePlace_table();
  console.log(pikePlace);

  // SeaTac Shop
  var seaTac = {
    min: 3,
    max: 24,
    avg: 6.1,
    getRandom: function (min, max) {
      return Math.random() * (max - min) + min;
    }
  };
  seaTac.getRandom(seaTac.min, seaTac.max);
  var listSeaTac = function (SeaTac) {
    for (var prop in SeaTac) {
      var elListSeaTac = document.getElementById('seaTac').innerHTML = prop;
    }
  };

  // Seattle Center Shop
  var seaCen = {
    min: 11,
    max: 38,
    avg: 3.7,
    getRandom: function (min, max) {
      return Math.random() * (max - min) + min;
    }
  };
  seaCen.getRandom(seaCen.min, seaCen.max);
  var listSeaCen = function (seaCen) {
    for (var prop in seaCen) {
      var elListSeaCen = document.getElementById('seaCen').innerHTML = prop;
    }
  };

  // Capital Hill Shop
  var capHill = {
    min: 20,
    max: 38,
    avg: 2.3,
    getRandom: function (min, max) {
      return Math.random() * (max - min) + min;
    }
  };
  capHill.getRandom(capHill.min, capHill.max);
  var listCapHill = function (capHill) {
    for (var prop in capHill) {
      var elListCapHill = document.getElementById('capHill').innerHTML = prop;
    }
  };

  // ALKI SHOP
  var alki = {
    min: 2,
    max: 16,
    avg: 4.6,
    getRandom: function (min, max) {
      return Math.random() * (max - min) + min;
    }
  };
  alki.getRandom(alki.min, alki.max);
  var listAlki = function (alki) {
    for (var prop in alki) {
      var elListAlki = document.getElementById('alki').innerHTML = prop;
    }
  };

  // 1.) Create one object literal that will aggregate data, generate for each hour a number of cookies that need to be baked.
  // 2.) Once you have that data you will populate your DOM dynamically
  // 3.) With that data you'll create an unordered list.
  // 4.) You'll write a final method on the object literal called render and that will populate your data in the browser with DOM manipulation.
  // 5.) document.createElement(''); it takes a string argument that is the element that we want to create

  // example
  // var h1El = document.createElement('h1') creates an element with js but havent' attached it to the browser
  // latch onto any id name

// DOM Interactions
// These are the most used and common methods for interacting with the DOM:
//     Getters: // Document or element methods:
//     document.getElementById() //returns a single element
// document.getElementsByClassName() //returns an array of elements with same class
// document.getElementsByTagName() //returns an array of elements by tag
// document.querySelectorAll(some css shiz) //returns an array of element nodes.
// Elements:
// document.createElement('div') //returns a new 'div' element with the provided string.
// element.children //returns all of the element's children with their own corresponding children.
// element.parentElement // refers to the element's parent element.
// element.appendChild(element) //puts the element arg and pushes it to the end of its children.
// element.removeChild(child element) //takes in the child element node to remove.
// element.insertBefore(new element, existing element); //inserts a new element before the 2nd parameter.
// Steps:
// Make a JavaScript reference(a variable) to the parent element
// Create the child element we want to add and save it as a variable
// Give the child content - in this case, the content is text
// Append the child to the parent
}
