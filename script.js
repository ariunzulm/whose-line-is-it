const overlay = document.getElementById("prankOverlay");
const quote$ = document.querySelector(".quote p");
const score$ = document.querySelectorAll(".status-value");
const baatarvan$ = document.querySelector(".baatarvan");
const narantsogt$ = document.querySelector(".narantsogtc");
const others$ = document.querySelector(".others");
const modalContent$ = document.querySelector(".modal-content");
const winModal$ = document.getElementById("winModal");
const finalScore$ = document.getElementById("finalScore");

const endPrank = () => {
  overlay.innerHTML = "<h2>LOGIC FOUND! YOU KNOW WHAT I MEAN?</h2>";

  setTimeout(() => {
    overlay.style.display = "none";
    randomQuotes();
  }, 1500);
};

let baatarvanScore = 0;
let narantsogtScore = 0;
let othersScore = 0;
let currentQuote = {};
let quoteIndex = 0;

const renderQuotes = () => {
  if (quoteIndex >= quotes.length) {
    showWinModal();
    return;
  }
  currentQuote = quotes[quoteIndex];
  quote$.textContent = currentQuote.quote;
  quoteIndex++;
};

const checkSelection = (select) => {
  const isCorrect = select === currentQuote.whose;
  const selectedOption = document.querySelector(`.${select}`);
  const selected = select === "baatarvan" ? baatarvan$ : narantsogt$;

  if (isCorrect) {
    if (select === "baatarvan") baatarvanScore++;
    if (select === "narantsogt") narantsogtScore++;
    if (select === "others") othersScore++;
    selectedOption.classList.add("correct");
    updateScore();

    setTimeout(() => {
      selectedOption.classList.remove("correct");
      quoteIndex++;
      renderQuotes();
    }, 1000);
  } else {
    selectedOption.classList.add("wrong");
    setTimeout(() => {
      selectedOption.classList.remove("wrong");
    }, 1000);
  }
};

const updateScore = () => {
  if (score$[0] && score$[1]) {
    score$[0].textContent = `${baatarvanScore}/16`;
    score$[1].textContent = `${narantsogtScore}/16`;
  }
};

const resetGame = () => {
  baatarvanScore = 0;
  narantsogtScore = 0;
  othersScore = 0;
  quoteIndex = 0;

  winModal$.style.display = "none";
  updateScore();
  renderQuotes();
};

const showWinModal = () => {
  winModal$.style.display = "flex";
  finalScore$.textContent = ` Baatarvan: ${baatarvanScore}, Narantsogt: ${narantsogtScore}, Avengers at 9am:${othersScore},`;
};

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
