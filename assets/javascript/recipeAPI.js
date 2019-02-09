
var keyword;
var prepTime;
var searchCriteria;

$("#search").on("click", function () {
    event.preventDefault();
    keyword = $("#keyWordSearch").val().trim();
    prepTime = $("#prepTimeSearch").val().trim();
    var encodeKey = encodeURI(keyword);
    var encodePrepTime = encodeURI(prepTime);
    if ($("#prepTimeSearch").val().trim() !== "" && $("#keyWordSearch").val().trim() !== "") {
        searchCriteria = "&q=" + encodeKey + "&time=" + encodePrepTime;
    }
    else if ($("#prepTimeSearch").val().trim() !== "") {
        searchCriteria = "&time=" + encodePrepTime;
    }
    else if ($("#keyWordSearch").val().trim() !== "") {
        searchCriteria = "&q=" + encodeKey;
    }
    console.log($("#keyWordSearch").val().trim());
    var queryURL = "https://api.edamam.com/search?app_id=fa5fa3c7&app_key=c1479b4933942779535c50ed94e1de73" + searchCriteria;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        var newRow;

        var newJumbo = $("<div class='container jumbotron align-self-center jumbotron-fluid'>");
        $(".container2").append(newJumbo);
        var object = response.data;
        var recipeArray = object.hits[i];
        for (var i = 0; i < recipeArray.length; i++) {
            var newRow = $("<div class='row'>");
            $(newJumbo).append(newRow);
            // <------------Image------------> //
            var newResImg = $("<div class='imagecol col-sm-4'>");
            var image = $("<image src=" + recipeArray[i].recipe.image + ">");
            $(newRow).append(newResImg);
            $(newResImg).append(image);
            // <------------Title------------> //
            var newRecInfo = $("<div class='info col-sm-8'>");
            $(newRow).append(newRecInfo);
            var newTitleRow = $("<div class='info row'>");
            $(newRecInfo).append(newTitleRow);
            $(newTitleRow).html(object.hits[i].recipe.label);
            // <------------Prep Time------------> //
            var newPrepRow = $("<div class='info row'>");
            $(newRecInfo).append(newPrepRow);
            if (recipeArray[i].recipe.totalTime = 0) {
                $(newPrepRow).html("Unknown");
            }
            else {
                $(newPrepRow).html(recipeArray[i].recipe.totalTime);
            }
            // <------------Ingredients------------> //
            var newIngredRow = $("<div class='info row'>");
            $(newRecInfo).append(newIngredRow);
            $(newRecIngred).html(recipeArray[i].recipe.ingredients);
            // <------------Link for Recipe------------> //
            var newIngredRow = $("<div class='info row'>");
            $(newRecInfo).append(newLinkRow);
            $(newRecLink).html("<a class='btn btn-primary' href='" + recipeArray[i].recipe.url + "' role='button'>Checkout the full recipe!</a>");
        }
    });
})
