<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

//to validate email addresses entered, this API works!
var email;
var queryURL = "http://apilayer.net/api/check?access_key=079da406e2f7aaa1714f04c3adcc3efc&email=" + email + "&smtp=1&format=1"

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(response);
});
// collect email address check if it is real with above api
// password needed and email add to database or make sure is in database

//----------------------------------------------------------------//
var formKeyword = encodeURI(keyword);
var queryURL = "https://www.food2fork.com/api/search?key=7698efbc320ad7432bc2688700f3f72f&q=" + formKeyword;

//api key https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2 

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (response) {
    console.log(JSON.parse(response));
});
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

