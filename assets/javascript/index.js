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

    // Add login event
    $("#signInButton").on("click", function (event) {
        event.preventDefault();

        // Sign in
        var email = $("#email").val();
        var password = $("#password").val();

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)

            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    });

    // Add signup event
    $("#signUpButton").on("click", e => {
        e.preventDefault();
        var email = $("#signup-email").val();
        var password = $("#signup-password").val();
        // Get  FB authentication
        auth = firebase.auth();
        // Sign In
        promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

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

        //     if (response.obj.email = email && response.obj.password= password){
        //     // then take them to page 2 where they can choose what to search by
        // }

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

    });

})
