console.log("from results.js")

var img = 'dd';
var name = "KRU";
var address = "1255 Folsom Blvd.";
var rating = 4.2;
var menuUrl = 'Menu';


// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( " results ready!" );


// puts data to dom 
var newRow = $('<tr>');
newRow.append($("<td>" + img + "</td>"));
newRow.append($("<td>" + name + "</td>"));
newRow.append($("<td>" + address + "</td>"));
newRow.append($("<td>" + rating+ "</td>"));
newRow.append($("<td><button>" + menuUrl + "</buttom></td>"));



});