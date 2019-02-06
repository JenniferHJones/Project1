$(document).ready(function () {

    //firebase setup
    var config = {
        apiKey: "AIzaSyAXBHM2-Rfs25DdM3vmaGK3CDbjGlZMkQM",
        authDomain: "cravings-7c8a8.firebaseapp.com",
        databaseURL: "https://cravings-7c8a8.firebaseio.com",
        projectId: "cravings-7c8a8",
        storageBucket: "cravings-7c8a8.appspot.com",
        messagingSenderId: "928328970018"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    // var clickCounter = 0;

    // $("#test").on("click", function () {
    //     clickCounter++;

    //     database.ref().set({
    //         clickCount: clickCounter
    //     });
    // });

    // to validate email addresses entered, this API works!
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
    //--------------------------PAGE 1 Login or Sign Up----------------------------//
    var email;
    var password;
    var newName;
    var newEmail;
    var newPassword;
    $("#login").on("click", function () {
        email = $("#loginEmail").val().firm();
        password = $("#loginPass").val().firm();

        // query the firebase database and check if this is a listed login
        // email and password are in database
        if (response.obj.email = email && response.obj.password= password){
        // then take them to page 2 where they can choose what to search by

        }

    })

// on click of sign up bottom show input fields email name and password
// then add these to the database and have an on click button of "Complete Sign Up"
// "Complete Sign Up" button brings you back to login
$("#signUp").on("click", function () {
    newEmail = $("#signupEmail").val().firm();
    newPassword = $("#signupPass").val().firm();
    newName = $("#signupName").val().firm();

    // add this login info to the database and 
    database.ref(loginCred).set({
        email: newEmail,
        password: newPassword,
        name: newName,
    });
})



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
