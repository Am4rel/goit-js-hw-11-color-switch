const { func } = require("assert-plus");

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector("button[data-action=start]"),
    stopBtn: document.querySelector("button[data-action=stop]"),
    body: document.querySelector("body"),
}

let intervalId;

refs.startBtn.addEventListener("click", onStartButtonClick);
refs.stopBtn.addEventListener("click", onStopButtonClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartButtonClick() {
  refs.startBtn.disabled = true;
    intervalId = setInterval(() => {
        const num = randomIntegerFromInterval(0, colors.length);

        refs.body.setAttribute("style", `background-color:${colors[num]}`)
    }, 1000);
};

function onStopButtonClick() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}