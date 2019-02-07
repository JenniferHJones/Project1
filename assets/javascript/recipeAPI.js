$(document).ready(function () {
    
//-----------------------------Page 3 Recipe Select-----------------------------------//

var formKeyword = encodeURI(keyword);
var queryURL = "https://www.food2fork.com/api/search?key=7698efbc320ad7432bc2688700f3f72f&q=" + formKeyword;

//api key https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2 

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(JSON.parse(response));
});

var newRevcDiv = $("<div class= 'recipeBox'>")


$("#checkoutRecipe").on("click", function () {


})


//-------------------------------Page 3 Look at recipe-----------------------//

var queryURL = "https://www.food2fork.com/api/get?key=7698efbc320ad7432bc2688700f3f72f&rId=" + recipeId;

//api key https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2 

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(JSON.parse(response));
});

// $("#chosenRecipe").on("click", function (){
//     var recipeId=response.recipe.id


// })




})
