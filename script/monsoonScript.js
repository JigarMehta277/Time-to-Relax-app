window.onload = function () {
    var text = document.getElementById("text");
    var duration = 8000;
    var breatheDuration = (duration / 5) * 2;
    var main_div = document.getElementById("main_div");
    var holdDuration = duration / 5;

    relax();

    function relax() {
        $(document).ready(function () {
            $("#muAudio").get(0).play();
        });
        text.innerHTML = 'Breath In!';
        main_div.className = 'main_div grow';

        setTimeout(() => {
            text.innerText = 'Hold'

            setTimeout(() => {
                text.innerHTML = 'Breathe Out!';
                main_div.className = 'main_div shrink';
            }, holdDuration)
        }, breatheDuration)
    }


    setInterval(relax, duration);
}