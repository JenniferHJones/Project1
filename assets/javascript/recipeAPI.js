$(document).ready(function () {
    var keyword;
    var prepTime;

    $("#search").on("click", function () {

        var queryURL = "https://api.edamam.com/search?app_id=fa5fa3c7&app_key=c1479b4933942779535c50ed94e1de73&q=" + keyword;

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
        });
        keyword = $("#keyWordSearch").val().trim();
        prepTime = $("#prepTimeSearch").val().trim();

        

    }








}
