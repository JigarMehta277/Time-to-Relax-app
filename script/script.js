window.onload = function () {

    var start = document.getElementById("start");
    var body = document.getElementById("body");
    var heading = document.getElementById("h1");
    var select_season = document.getElementById('slct_season');
    var seasons = document.getElementById("seasons");



    start.onclick = function () {
        body.style.background = "url(images/background2.jpg)";
        heading.style.display = "none";
        start.style.display = "none";
        select_season.style.display = "block";
        seasons.style.display = "block";
    }
}