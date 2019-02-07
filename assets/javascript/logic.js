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


})
