$(document).ready(function () {

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