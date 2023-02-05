const goUpBtn = document.querySelector("button.go-up");
// Skills Section
const skillSec = document.querySelector(".our-skills");
const progressSpan = document.querySelectorAll(".the-progress span");
// Stats Section
const statsSec = document.querySelector(".stats");
const numbers = document.querySelectorAll(".stats .number");
let started = false;

window.onscroll = (_) => {
  // Go up button
  if (scrollY > 1200) {
    goUpBtn.classList.add("show-btn");
  } else {
    goUpBtn.classList.remove("show-btn");
  }
  // Skills Section
  if (scrollY >= skillSec.offsetTop - 30) {
    progressSpan.forEach((e) => (e.style.width = e.dataset.width));
  }
  // Stats Section
  if (window.scrollY >= statsSec.offsetTop - 260) {
    if (!started) {
      numbers.forEach((num) => increaseNum(num));
    }
    started = true;
  }
};

// Events Section
goUpBtn.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
let counter = setInterval(() => {
  let targetDate = new Date("sep 13, 2023, 05:01:01:PM");
  let restTime = targetDate.getTime() - new Date().getTime();

  let days = Math.floor(restTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((restTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((restTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((restTime % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML =
    days < 100 && days > 10 ? `0${days}` : days < 10 ? `00${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (restTime < 0) {
    clearInterval(counter);
  }
}, 1000);

// Stats Section
function increaseNum(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;

    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
