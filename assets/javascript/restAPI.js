$(document).ready(function () {
    $("#search").hide();

    // Zomato ajax call is limited to 20 results
    var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=499&entity_type=city&sort=rating&order=desc";
    var start = 0;

    $("#searchRestaurant").on("click", function () {
        event.preventDefault();
        console.log("click");

        $("#search").show();

        $("tbody").empty();
        var search = $("#keyword").val().trim();

        start = 0;
        queryURL = queryURL + "&q=" + search;
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            headers: {
                "user-key": "28f92b35782adcf900a661e108616e3a",
                "Accept": "application/json"
            },
            method: "GET",
        }).then(function (response) {
            console.log(response);

            displayData(response.restaurants)
        })
    });

    function displayData(restaurants) {
        for (var i = 0; i < restaurants.length; i++) {
            var newRow = $("<tr>");
            newRow.append($("<td>" + restaurants[i].restaurant.name + "</td>"));
            newRow.append($("<td>" + restaurants[i].restaurant.cuisines + "</td>"));
            newRow.append($("<td>" + restaurants[i].restaurant.locality + "</td>"));
            newRow.append($("<td>" + restaurants[i].restaurant.user_rating.aggregate_rating + " / 5" + "</td>"));
            newRow.append($("<td>" + restaurants[i].restaurant.user_rating.votes + "</td>"));
            newRow.append($("<td>" + restaurants[i].restaurant.average_cost_for_two + "</td>"));
            newRow.append($("<td><a class='btn btn-primary' href='" + restaurants[i].restaurant.menu_url + "' role='button'>Menu</button></a></td>"));

            $("tbody").append(newRow);
        }
        var moreButton = $("<button><a class='btn btn-primary more'>More Results</button>");
        $(".moreResults").append(moreButton);
        $(document).on("click", ".more", displayMore);

    }


    function displayMore() {
        start += 20;
        console.log(start);


        var queryUrlAgain = queryURL + "&start=" + start;
        console.log(queryUrlAgain);

        $.ajax({
            url: queryUrlAgain,
            headers: {
                "user-key": "28f92b35782adcf900a661e108616e3a",
                "Accept": "application/json"
            },
            method: "GET",
        }).then(function (response) {

            displayData(response.data)
        })
    }


})
