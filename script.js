const quote$ = document.querySelector(".quote p");
const score$ = document.querySelectorAll(".status-value");
const winModal$ = document.getElementById("winModal");
const finalScore$ = document.getElementById("finalScore");

let baatarvanScore = 0;
let narantsogtScore = 0;
let currentQuote = {};

function quoteRandomer() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomQuote];
  quote$.textContent = currentQuote.quote;
}

function checkAnswer(select) {
  if (select === currentQuote.whose) {
    if (select === "baatarvan") {
      baatarvanScore++;
    }
    if (select === "narantsogt") {
      narantsogtScore++;
    }

    updateScore();
    alert("That's correct Bro! 🎉");
    if (baatarvanScore >= 16 || narantsogtScore >= 16) {
      showWinModal();
    } else {
      quoteRandomer();
    }
  } else {
    alert("Oops! Wrong one. Let's try again!");
  }
}

function updateScore() {
  score$[0].textContent = `${baatarvanScore}/16`;
  score$[1].textContent = `${narantsogtScore}/16`;
}

function startGame() {
  baatarvanScore = 0;
  narantsogtScore = 0;

  updateScore();
  winModal$.style.display = "none";
  quoteRandomer();
}
function showWinModal() {
  winModal$.style.display = "flex";
  finalScore$.textContent = `Final Scores - Baatarvan: ${baatarvanScore}, Narantsogt: ${narantsogtScore}`;
}

const quotes = [
  { quote: "За яагаад хоцрооод байнааа!", whose: "baatarvan" },
  { quote: "Хаана хурхирааад байнаа айнн?", whose: "baatarvan" },
  {
    quote: "3G class on random Friday: It is time to do KAHOOT! guys :))",
    whose: "narantsogt",
  },
  { quote: "Нэгдэх өдөр хичээл орохгүй шүү. Хүрээд ирвээ", whose: "baatarvan" },
  { quote: "Pixel Perfect л баймаар байна аа!", whose: "baatarvan" },
  {
    quote: "За манайхаан TEAMS дээр бодлого орсон байгаа шүү!",
    whose: "narantsogt",
  },
  { quote: "Бодлогонуудаа бодож дууссан нь харьна шүү!", whose: "baatarvan" },
  { quote: "2 цагаас давтлагатай шүү манайхаан!", whose: "narantsogt" },
  {
    quote: "Хүн ингэж хичээж сурж байна та нар хичэээгээч эээ!",
    whose: "baatarvan",
  },
  {
    quote: "TEAMS post on 08 Dec: Amlalt",
    whose: "baatarvan",
  },
  {
    quote: "Наад санааг чинь бас бодсоон.",
    whose: "others",
  },
  {
    quote: "За зүгээр суухгүй шүү, юмаа хийгээрэй! ;))",
    whose: "baatarvan",
  },
  {
    quote: "Асуугаарай манайхаан",
    whose: "narantsogt",
  },
  {
    quote: "Та нар намайг ЯАГААД дуудахгүй байна ай",
    whose: "baatarvan",
  },
  {
    quote: "At 9:00am: За ирцээ авчий",
    whose: "narantsogt",
  },
  {
    quote: "Цаасан дээр бичихгүй бол минут нэмж өгөхгүй ээ хө",
    whose: "baatarvan",
  },
  {
    quote: "Сэрээрэй манайхаан!!!!!",
    whose: "narantsogt",
  },
  {
    quote:
      "Зэээ манайхан 12сарын 30нд ангийн шинэ жилтэйг мэдэж байгаа шдээ тэ?",
    whose: "others",
  },
  {
    quote: "Багшаа одоо бодлогонуудаа хүндрүүлмээр байна өөө кккк",
    whose: "others",
  },
];
