$(document).ready(function () {

    loadPage();

    function loadPage() {
        $("#registerDiv").hide();
        $("#loginDiv").hide();
        $("#choicesDiv").hide();
    }

    // Function to run when user clicks Register button in navbar
    $("#navRegister").click(displayRegister);

    function displayRegister() {
        console.log("register clicked");
        $("#registerDiv").show();
        $("#loginDiv").hide();
        $("#choicesDiv").hide();
    }

    // Function to run when user clicks Login button in navbar
    $("#navLogin").click(displayLogin);

    function displayLogin() {
        console.log("login clicked");
        $("#loginDiv").show();
        $("#registerDiv").hide();
        $("#choicesDiv").hide();
    }

    // Function to run when user clicks Logout button in navbar
    $("#navLogout").click(userLogOut);

    function userLogOut() {
        console.log("logout clicked");
        firebase.auth().signOut();
        $("#choicesDiv").hide();
        $("#loginDiv").hide();
        $("#registerDiv").hide();
    };

    $("#showLogin").click(displayLogin);

    $("#showRegister").click(displayRegister);

    // Firebase setup
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

     // Function to run when user clicks submit button after registering or logging in
    //  $(".submit").click(displayChoices);

     function displayChoices() {
         $("#choicesDiv").show();
         $("#loginDiv").hide();
         $("#registerDiv").hide();
     }

    // Function to run based on if user is logged in or not
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            displayChoices();
        } else {
            // No user is signed in.
            userLogOut();
        }
    });

    // Function to register a new user
    $(".register form").on("submit", function (event) {
        event.preventDefault();

        var email = $(".register .email").val();
        var password = $(".register .password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (user) {
                console.log(user);
            })
            .catch(function (err) {
                console.log(err);
            })
    });

    // Function to login existing user
    $(".login form").on("submit", function (event) {
        event.preventDefault();

        var email = $(".login .email").val();
        var password = $(".login .password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
                console.log(user);
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    // // BONUS - Function to allow user to record their favorites
    // firebase.auth().onAuthStateChanged(function (user) {

    //     // turns event listener off
    //     $(".star").off();

    //     if (user) {

    //         $(".star").on("submit", function(event) {
    //             event.preventDefault();

    //             var favorite = $(".star").click;

    //             firebase.database().ref("/users/" + user.uid).child("/favorites").push(star);
    //         })
    //     } else {
    //         $(".star").on("submit", function(event) {
    //             console.log("Please log in");
    //         })
    //     }
    // });


    ///////////////////////////////////////////////
    //
    // work with Lindsay to incorporate code below
    //
    ///////////////////////////////////////////////

    // // to validate email addresses entered, this API works!
    // var email;
    // var queryURL = "http://apilayer.net/api/check?access_key=079da406e2f7aaa1714f04c3adcc3efc&email=" + email + "&smtp=1&format=1"

    // $.ajax({
    //     url: queryURL,
    //     method: "GET",
    // }).then(function (response) {
    //     console.log(response);
    // });
    // // collect email address check if it is real with above api
    // // password needed and email add to database or make sure is in database
    // //--------------------------PAGE 1 Login or Sign Up----------------------------//
    // var email;
    // var password;
    // var newName;
    // var newEmail;
    // var newPassword;
    // $("#login").on("click", function () {
    //     email = $("#loginEmail").val().firm();
    //     password = $("#loginPass").val().firm();

    //     // query the firebase database and check if this is a listed login
    //     // email and password are in database

    //     //     if (response.obj.email = email && response.obj.password= password){
    //     //     // then take them to page 2 where they can choose what to search by
    //     // }

    // })

    // // on click of sign up bottom show input fields email name and password
    // // then add these to the database and have an on click button of "Complete Sign Up"
    // // "Complete Sign Up" button brings you back to login
    // $("#signUp").on("click", function () {
    //     newEmail = $("#signupEmail").val().firm();
    //     newPassword = $("#signupPass").val().firm();
    //     newName = $("#signupName").val().firm();

    //     // add this login info to the database and 
    //     database.ref(loginCred).set({
    //         email: newEmail,
    //         password: newPassword,
    //         name: newName,
    //     });

    // });

})
