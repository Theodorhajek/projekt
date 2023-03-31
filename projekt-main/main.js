function hideCard() {
  let x = document.getElementById("home-box");
  let y = document.querySelector(".quizz");
  x.style.display = "none";
  y.style.display = "block";
}

const form = document.getElementById("mainForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let answer = document.getElementById("flagName").value;
  console.log("ok", answer);

  

  if (answer.toLowerCase() === "česko") {
    document.getElementById("vyhodnoceni").innerHTML = "správně!";
  } else {
    document.getElementById("vyhodnoceni").innerHTML = "odpověď není správná!";
  }
});
