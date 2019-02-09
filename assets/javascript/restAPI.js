$(document).ready(function () {

    // Zomato ajax call is limited to 20 results
    var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=499&entity_type=city&sort=rating&order=desc";
    var start = 0;

    $("#searchRestaurant").on("click", function () {
        event.preventDefault();
        console.log("click");

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
            console.log(response.restaurants.name);

            displayData(response.data)
        })
    });

    function displayData(data) {
        for (var i = 0; i < data.length; i++) {
            var newRow = $("<tr>");
            newRow.append($("<td>" + data[i].name + "</td>"));
            newRow.append($("<td>" + data[i].cuisines + "</td>"));
            newRow.append($("<td>" + data[i].location.locality + "</td>"));
            newRow.append($("<td>" + data[i].user_rating.aggregate_rating + "&/5" + "</td>"));
            newRow.append($("<td>" + data[i].user_rating.votes + "</td>"));
            newRow.append($("<td>" + data[i].average_cost_for_two + "</td>"));
            newRow.append($("<td><button class='btn btn-success' data-key='" + data[i].menu_url + "'>Menu</button></td>"));
            
            var moreButton = ($("<button class='btn btn-success more' text='More Results'>"));

            $("tbody").append(newRow);
            $("tbody").append(moreButton);
        }
    }

    $(document).on("click", ".more", displayMore);

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
