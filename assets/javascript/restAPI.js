$(document).ready(function () {


//-------------------------------------Page 3 Choose Restaurant-------------//
// Zomato ajax call is limited to 20 results; need to use offset so user can see more results on button click
var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=499&entity_type=city&cuisines=indian&sort=rating";
// var offsetNumZomato = 0;

$.ajax({
    url: queryURL,
    headers: {
        "user-key": "28f92b35782adcf900a661e108616e3a",
        "Accept": "application/json"
    },
    method: "GET",
}).then(function (response) {
    console.log(response);
});

var newResDiv = $("<div class= 'restaurantBox'>");


$("#checkoutMenu").on("click", function () {


})




})
