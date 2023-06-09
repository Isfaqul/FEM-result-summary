let data = [
  {
    category: "Reaction",
    score: 81,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 75,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 65,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

let reactionEl = document.getElementById("reaction");
let memoryEl = document.getElementById("memory");
let verbalEl = document.getElementById("verbal");
let visualEl = document.getElementById("visual");

let totalEl = document.getElementById("total");

displayCounter();

function getTotal(arr) {
  let total = 0;
  for (let obj of arr) {
    total += obj.score;
  }
  return Math.floor(total / arr.length);
}

// Assigning the score
reactionEl.textContent = data[0].score;
memoryEl.textContent = data[1].score;
verbalEl.textContent = data[2].score;
visualEl.textContent = data[3].score;

totalEl.textContent = 0;

function displayCounter() {
  let i = 0;
  let total = getTotal(data);

  let timer = setInterval(() => {
    totalEl.textContent = i;
    i++;
    if (i === total + 1) {
      clearInterval(timer);
    }
  }, 10);
}
