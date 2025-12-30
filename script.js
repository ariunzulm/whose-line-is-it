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
  overlay.innerHTML =
    "<h2>LOGIC FOUND! YOU KNOW WHAT I MEAN? and REACT.JS is coming by the way!!</h2>";

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
    score$[0].textContent = `${baatarvanScore}/28`;
    score$[1].textContent = `${narantsogtScore}/28`;
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
  playSong();
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
  {
    quote: "Өнөөдөртөө ингээд болноо манайхан! ОДОО ТАЙВШИРРРР",
    whose: "baatarvan",
  },
  {
    quote: "За мэдкүэээ нэг иймэрхүү юм байгааа!!",
    whose: "baatarvan",
  },
  {
    quote: "Энэ манай ангийн хүүхэд!",
    whose: "narantsogt",
  },
  {
    quote: "React гайхалтай!",
    whose: "baatarvan",
  },
  {
    quote: "Чи явж наад нүүрээ угаалдаа!",
    whose: "baatarvan",
  },
  {
    quote: "Уух нь дээ!",
    whose: "narantsogt",
  },
  {
    quote: "Надаа нэг санаа байнаа!",
    whose: "others",
  },
  {
    quote: "Чиний кодыг ч хэн үзэхэвдээ!",
    whose: "baatarvan",
  },
  {
    quote: "!",
    whose: "narantsogt",
  },
];
console.log(quotes);

let audioContext;

const FREQUENCIES = {
  C: 261.63,
  D: 293.66,
  E: 329.63,
  F: 349.23,
  G: 392.0,
  A: 440.0,
  B: 493.88,
  C2: 523.25,
  P: 0,
};

const NOTE_DURATION = 0.1;
const AMPLITUDE = 0.5;

const SONG_SEQUENCE = [
  "E",
  "P",
  "E",
  "P",
  "E",
  "P",
  "P",
  "E",
  "P",
  "E",
  "P",
  "E",
  "P",
  "P",
  "E",
  "P",
  "G",
  "P",
  "C",
  "P",
  "D",
  "P",
  "E",
  "P",
  "P",
  "P",
  "F",
  "P",
  "F",
  "P",
  "F",
  "P",
  "F",
  "P",
  "F",
  "P",
  "E",
  "P",
  "E",
  "P",
  "E",
  "P",
  "E",
  "P",
  "E",
  "P",
  "D",
  "P",
  "D",
  "P",
  "E",
  "P",
  "D",
  "P",
  "G",
];

function createNoteBuffer(freq, duration, sampleRate) {
  const numSamples = Math.floor(duration * sampleRate);
  const channelData = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const time = i / sampleRate;
    const envelope = Math.exp((-3 * time) / duration);
    channelData[i] = AMPLITUDE * Math.sin(2 * Math.PI * freq * time) * envelope;
  }
  return channelData;
}

function playSong() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  const FS = audioContext.sampleRate;
  const noteDataArrays = SONG_SEQUENCE.map((noteKey) => {
    const freq = FREQUENCIES[noteKey];
    return createNoteBuffer(freq, NOTE_DURATION, FS);
  });

  const totalLength = noteDataArrays.reduce(
    (total, arr) => total + arr.length,
    0
  );
  const buffer = audioContext.createBuffer(1, totalLength, FS);
  const channelData = buffer.getChannelData(0);

  let offset = 0;
  noteDataArrays.forEach((noteArray) => {
    channelData.set(noteArray, offset);
    offset += noteArray.length;
  });

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
}
