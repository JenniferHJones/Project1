console.log("from results.js")

var img = '';
var name = "KRU";
var address = "1255 Folsom Blvd.";
var rating = 4.2;
var menuUrl = 'Menu';

img.src = '.assets/images/kru.png';

// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( " results ready!" );


// puts data to dom 
var newRow = $('<tr>');
newRow.append($("<td><img>" + img.src + "</img></td>"));
newRow.append($("<td>" + name + "</td>"));
newRow.append($("<td>" + address + "</td>"));
newRow.append($("<td>" + rating+ "</td>"));
newRow.append($('<td><button>' + menuUrl + "</buttom></td>"));



});