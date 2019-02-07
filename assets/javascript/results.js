//console.log("from results.js");

// temp vars for layout remove when done
var name = "KRU";
var cusine = "Sushi";
var loc = "Mid-Town";
var address = "1255 Folsom Blvd.";
var rating = 4.2;
var votes = 453;
var cost = 10;
var menuUrl = "https://www.krurestaurant.com/";

href = menuUrl

 // star icon unicode is f005
// stars logic 
var starsTotal = 5;
// get  Star percentage 
var starpercentage = (rating / starsTotal) * 100 ;
//console.log(starpercentage);

// ROUND TO NEAREST 10
var starPercentageRounded = `${Math.round(starpercentage / 10) * 10}%` ;
//console.log(starPercentageRounded)

// set width of inner to percentage
//document.querySelector(`<td> .stars-outer`).style.width = starPercentageRounded;







// A $( document ).ready() block.
$(document).ready(function () {


  // need to replace variablis with dbObj from database info

 
  // puts data to dom 
  var newRow = $('<tr>');
  newRow.append($(`<td>${name} </td>`));
  newRow.append($(`<td>${cusine}</td>`));
  newRow.append($(`<td>${loc} </td>`));
  newRow.append($(`<td>${rating} / 5  <span id="votes">- ${votes} Votes</span> </td>`));
  newRow.append($(`<td>$${cost}</td>`));
  newRow.append($(`<td><button type="button" value="Open Window" onclick="location.href='${href}';" class="btn btn-primary" href="${href}">Menu</button></td>`));

  $('tbody').append(newRow);

 
});