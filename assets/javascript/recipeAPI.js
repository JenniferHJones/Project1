
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

        var object = response.data;
        var newRow;
        // var recipeArray = response.data.hits;
        var newJumbo = $("<div class='container jumbotron align-self-center jumbotron-fluid'>");
        $(".container2").append(newJumbo);

        for (var i = 0; i < recipeArray.length; i++) {

            var newRow = $("<div class='row'>");
            $(newJumbo).append(newRow);
            var newResImg = $("<div class='imagecol col-sm'>");
            var newResInfo = $("<div class='info col-sm'>");
            $(newResImg).html(object.hits[i].image);

            newRow.append($("<td>" + dbObj.name + "</td>"));
            newRow.append($("<td>" + dbObj.destination + "</td>"));
            newRow.append($("<td>" + dbObj.frequency + "</td>"));
            newRow.append($("<td>" + formNextTrain + "</td>"));
            newRow.append($("<td>" + trainMinutesAway + "</td>"));

        }
    });

})
