//console.log("from results.js");


var name = "KRU";
var cusine = "fast";
var loc = "fff";
var address = "1255 Folsom Blvd.";
var rating = 4.2;
var cost= 10;
var menuUrl = 'Menu';

href = menuUrl



// A $( document ).ready() block.
$( document ).ready(function() {
 
  // puts data to dom 
  var newRow = $('<tr>');
  newRow.append($(`<td>${name} </td>`));
  newRow.append($(`<td>${cusine}</td>`));
  newRow.append($(`<td> ${loc}</td>`));
  newRow.append($(`<td> ${rating}/ 5</td>`));
  newRow.append($(`<td> ${cost}</td>`));
  newRow.append($(`<td><button href=${href}>Menu</buttom></td>`));

  $('tbody').append(newRow);

});