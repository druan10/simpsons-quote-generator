

function changeQuote() {

    $.getJSON('https://thesimpsonsquoteapi.glitch.me/quotes', function (data) {

        console.log(data);

        // Align character image to face toward quote
        if (data[0].characterDirection == "Left") {

            $("#leftCol").removeClass("col-8");
            $("#leftCol").addClass("col-4");
            $("#rightCol").removeClass("col-4");
            $("#rightCol").addClass("col-8");
            $("#rightCol").html(`
                <h3 id="quote"></h3>
                <p id="speaker"></p>
            `);
            $("#rightCol").addClass("my-auto");
            $("#leftCol").removeClass("my-auto");
            $("#leftCol").html(`<img src="` + data[0].image + `" alt=`+ data[0].character + `" class="img-fluid">`);
        } else {
            $("#leftCol").removeClass("col-4");
            $("#leftCol").addClass("col-8");
            $("#rightCol").removeClass("col-8");
            $("#rightCol").addClass("col-4");
            $("#leftCol").html(`
                <h3 id="quote" ></h3>
                <p id="speaker"></p>
            `);
            $("#leftCol").addClass("my-auto");
            $("#rightCol").removeClass("my-auto");
            $("#rightCol").html(`<img src="` + data[0].image + `" alt=`+ data[0].character + `" class="img-fluid">`);
        };

        // Update the quote on screen
        $('#quote').text('"' + data[0].quote + '"');
        $('#speaker').text(" - " + data[0].character);

        // Update the tweet button
        var tweetDiv = document.querySelector(".twitter-share-button");
        var link = document.createElement("a");
        link.setAttribute("href", "https://twitter.com/share");
        link.setAttribute("class", "twitter-share-button");
        link.setAttribute('id', 'twitter');
        link.setAttribute("data-text", "\"" + data[0].quote + "\" - " + data[0].character);
        link.setAttribute("data-size", "large");
        tweetDiv.parentNode.replaceChild(link, tweetDiv);
        twttr.widgets.load();
    });
};

$('#newQuote').click(function () {
    $("#quoteBox").hide();
    $(".twitter-share-button").hide();
    changeQuote();
    $("#quoteBox").fadeIn("slow");
    $(".twitter-share-button").fadeIn("slow");
});

$(".twitter-share-button").hide();
$("#quoteBox").hide();

window.onload = function () {
    
    changeQuote();
    $("#quoteBox").fadeIn("slow");
};

