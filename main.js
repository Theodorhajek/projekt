const form = document.getElementById("mainForm");
const msgBox = document.getElementById("vyhodnoceni");
const flagImg = document.getElementById("flagImg");
const userInput = document.getElementById("flagName");


// name of the picked country
let answer = "";

const countries = {
  europe: [
    {
      name: "albania",
      code: "al",
    },
    {
      name: "andorra",
      code: "ad",
    },
    {
      name: "austria",
      code: "at",
    },
    {
      name: "belarus",
      code: "by",
    },
    {
      name: "belgium",
      code: "be",
    },
    {
      name: "bosnia and herzegovina",
      code: "ba",
    },
    {
      name: "bulgaria",
      code: "bg",
    },
    {
      name: "croatia",
      code: "hr",
    },
    {
      name: "cyprus",
      code: "cy",
    },
    {
      name: "czech republic",
      code: "cz",
    },
    {
      name: "denmark",
      code: "dk",
    },
    {
      name: "estonia",
      code: "ee",
    },
    {
      name: "finland",
      code: "fi",
    },
    {
      name: "france",
      code: "fr",
    },
    {
      name: "germany",
      code: "de",
    },
    {
      name: "greece",
      code: "gr",
    },
    {
      name: "hungary",
      code: "hu",
    },
    {
      name: "iceland",
      code: "is",
    },
    {
      name: "ireland",
      code: "ie",
    },
    {
      name: "italy",
      code: "it",
    },
    {
      name: "kosovo",
      code: "xk",
    },
    {
      name: "latvia",
      code: "lv",
    },
    {
      name: "liechtenstein",
      code: "li",
    },
    {
      name: "lithuania",
      code: "lt",
    },
    {
      name: "luxembourg",
      code: "lu",
    },
    {
      name: "macedonia",
      code: "mk",
    },
    {
      name: "malta",
      code: "mt",
    },
    {
      name: "moldova",
      code: "md",
    },
    {
      name: "monaco",
      code: "mc",
    },
    {
      name: "montenegro",
      code: "me",
    },
    {
      name: "netherlands",
      code: "nl",
    },
    {
      name: "norway",
      code: "no",
    },
    {
      name: "poland",
      code: "pl",
    },
    {
      name: "portugal",
      code: "pt",
    },
    {
      name: "romania",
      code: "ro",
    },
    {
      name: "russia",
      code: "ru",
    },
    {
      name: "san marino",
      code: "sm",
    },
    {
      name: "serbia",
      code: "rs",
    },
    {
      name: "slovakia",
      code: "sk",
    },
    {
      name: "slovenia",
      code: "si",
    },
    {
      name: "spain",
      code: "es",
    },
    {
      name: "sweden",
      code: "se",
    },
    {
      name: "switzerland",
      code: "ch",
    },
    {
      name: "turkey",
      code: "tr",
    },
    {
      name: "ukraine",
      code: "ua",
    },
    {
      name: "united kingdom",
      code: "gb",
    },
    {
      name: "vatican city",
      code: "va",
    },
  ],
};

function getCountry() {
  const newCountry = countries.europe[Math.floor(Math.random() * countries.europe.length)];
  if ((newCountry.name === answer)) {
    return getCountry();
  }
  return newCountry;
}

// function hideCard() {
//   let x = document.getElementById("home-box");
//   let y = document.querySelector(".quizz");
//   x.style.display = "none";
//   y.style.display = "block";
// }

function setFlag() {
  const newCountry = getCountry();
  answer = newCountry.name;
  flagImg.src = `https://flagcdn.com/${newCountry.code}.svg`;
  msgBox.innerHTML = ""
  userInput.value = ""
}

setFlag();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("ok", answer);
  if (userInput.value.toLowerCase() === answer) {
    msgBox.innerHTML = "správně!";
    setFlag();
  } else {
    msgBox.innerHTML = "odpověď není správná!";
    console.log(answer);
  }
});
