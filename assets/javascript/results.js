//console.log("from results.js");

// temp vars for layout remove when done
var name = "KRU";
var cusine = "fast";
var loc = "fff";
var address = "1255 Folsom Blvd.";
var rating = 4.2;
var cost = 10;
var menuUrl = 'Menu';

href = menuUrl
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

  // star icon unicode is f005


  // puts data to dom 
  var newRow = $('<tr>');
  newRow.append($(`<td>${name} </td>`));
  newRow.append($(`<td>${cusine}</td>`));
  newRow.append($(`<td>${loc} </td>`));
  newRow.append($(`<td>${rating}</td>`));
  newRow.append($(`<td>$${cost}</td>`));
  newRow.append($(`<td><button class="btn btn-danger" href=${href}>Menu</buttom></td>`));

  $('tbody').append(newRow);

});