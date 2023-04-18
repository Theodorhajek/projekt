const form = document.getElementById("mainForm");
const msgBox = document.getElementById("vyhodnoceni");
const flagImg = document.getElementById("flagImg");
const userInput = document.getElementById("flagName");
const score = document.getElementById("score");
const userContinentPick = document.querySelectorAll('input[name="continent"]:checked');

// name of the picked country
let answer = "";
let counter = -1;
let scoreCount = 0;
let wrongAnswer = false;
let pickedContinents = [];
let finalContinent = x;

userContinentPick.forEach((checkbox) => {
  pickedContinents.push(checkbox.id);
});

const countries = {
  asia: [
    {
      name: "afghanistan",
      code: "af",
    },
    {
      name: "armenia",
      code: "am",
    },
    {
      name: "azerbaijan",
      code: "az",
    },
    {
      name: "bahrain",
      code: "bh",
    },
    {
      name: "bangladesh",
      code: "bd",
    },
    {
      name: "bhutan",
      code: "bt",
    },
    {
      name: "brunei",
      code: "bn",
    },
    {
      name: "cambodia",
      code: "kh",
    },
    {
      name: "china",
      code: "cn",
    },
    {
      name: "cyprus",
      code: "cy",
    },
    {
      name: "georgia",
      code: "ge",
    },
    {
      name: "india",
      code: "in",
    },
    {
      name: "indonesia",
      code: "id",
    },
    {
      name: "iran",
      code: "ir",
    },
    {
      name: "iraq",
      code: "iq",
    },
    {
      name: "israel",
      code: "il",
    },
    {
      name: "japan",
      code: "jp",
    },
    {
      name: "jordan",
      code: "jo",
    },
    {
      name: "kazakhstan",
      code: "kz",
    },
    {
      name: "kuwait",
      code: "kw",
    },
    {
      name: "kyrgyzstan",
      code: "kg",
    },
    {
      name: "laos",
      code: "la",
    },
    {
      name: "lebanon",
      code: "lb",
    },
    {
      name: "malaysia",
      code: "my",
    },
    {
      name: "maldives",
      code: "mv",
    },
    {
      name: "mongolia",
      code: "mn",
    },
    {
      name: "myanmar",
      code: "mm",
    },
    {
      name: "nepal",
      code: "np",
    },
    {
      name: "north korea",
      code: "kp",
    },
    {
      name: "oman",
      code: "om",
    },
    {
      name: "pakistan",
      code: "pk",
    },
    {
      name: "palestine",
      code: "ps",
    },
    {
      name: "philippines",
      code: "ph",
    },
    {
      name: "qatar",
      code: "qa",
    },
    {
      name: "russia",
      code: "ru",
    },
    {
      name: "saudi arabia",
      code: "sa",
    },
    {
      name: "singapore",
      code: "sg",
    },
    {
      name: "south korea",
      code: "kr",
    },
    {
      name: "sri lanka",
      code: "lk",
    },
    {
      name: "syria",
      code: "sy",
    },
    {
      name: "tajikistan",
      code: "tj",
    },
    {
      name: "thailand",
      code: "th",
    },
    {
      name: "timor-leste",
      code: "tl",
    },
    {
      name: "turkmenistan",
      code: "tm",
    },
    {
      name: "taiwan",
      code: "tw",
    },
    {
      name: "tanzania",
      code: "tz",
    },
    {
      name: "tunisia",
      code: "tn",
    },
    {
      name: "turkey",
      code: "tr",
    },
    {
      name: "turks and caicos islands",
      code: "tc",
    },
    {
      name: "united arab emirates",
      code: "ae",
    },
    {
      name: "uzbekistan",
      code: "uz",
    },
    {
      name: "vietnam",
      code: "vn",
    },
    {
      name: "yemen",
      code: "ye",
    },
  ],

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

function getRandomContinent() {
  const continent = Math.floor(Math.random() * 2);

  if (continent === 1) {
    finalContinent = countries.europe;
  } else {
    finalContinent = countries.asia;
  }
}

function getContinent() {
  if (pickedContinents.includes(europe, asia)) {
    getRandomContinent();
  } else if (pickedContinents.includes(europe)) {
    finalContinent = countries.europe;
  } else if (pickedContinents.includes(asia)) {
    finalContinent = countries.asia;
  }
}

function getCountry() {
  console.log("conrinent:", finalContinent);
  const newCountry = finalContinent[Math.floor(Math.random() * countries.europe.length)];
  if (newCountry.name === answer) {
    return getCountry();
  }
  return newCountry;
}

function hideCard() {
  let x = document.getElementById("home-box");
  let y = document.querySelector(".quiz");
  x.style.display = "none";
  y.style.display = "block";
}

function setFlag() {

  getContinent()

  const newCountry = getCountry();

  answer = newCountry.name;
  flagImg.src = `https://flagcdn.com/${newCountry.code}.svg`;
  msgBox.innerHTML = "";
  userInput.value = "";
  counter++;
  score.innerHTML = `Score: ${scoreCount} / ${counter}`;
  console.log(counter);
  wrongAnswer = false;
}

setFlag();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (userInput.value.toLowerCase() === answer) {
    // pokud uživatel přetím zadal špatnou odpověd, skore se mu nepricte
    // score se mu pricte, jen pokud nedal predtim spatnou odpoved

    msgBox.innerHTML = "That is right!";

    // wrongAnswer === false
    if (!wrongAnswer) {
      scoreCount++;
    }
    setFlag();
  } else {
    msgBox.innerHTML = `Wrong answer! <br> The right answer is: ${
      answer.charAt(0).toUpperCase() + answer.slice(1)
    }.`;
    console.log(answer);
    wrongAnswer = true;
  }
});
