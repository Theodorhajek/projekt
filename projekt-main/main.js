
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-submit").onclick = function (event) {
        event.preventDefault();

        var answer = document.getElementById("flagName").value;
        console.log("hello", answer);

        if (answer === ("česko")) {
            document.getElementById("vyhodnoceni").innerHTML = ("správně!")
        }
        else {
            document.getElementById("vyhodnoceni").innerHTML = ("odpověď není správná!")
        }


    }
});