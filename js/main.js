
//  start Countdown Timer


let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();


let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
//  end Countdown Timer 


let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No



// start skills animation width 
function progress () {

  progressSpans.forEach((span) => {
    span.style.width = span.dataset.width;
  });

}
progress();
// end skills animation width 


//  start Stats Increase Number
window.onscroll = function () {

    if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  this.scrollY >= 500 ? spanss.classList.add("show") : spanss.classList.remove("show");//button to up
  behavior: "smooth";
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//  end Stats Increase Number


let spanss = document.querySelector(".up");

// start button to up
spanss.addEventListener("click", myFunction);
function myFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// end button to up
 


// start descount letter progress
let countt = document.querySelector(".count-letter");
let progresss = document.querySelector(".progress-letter");
let input = document.querySelector("textarea");
let div = document.querySelector("div");
let maxLength = input.getAttribute("maxlength");

countt.innerHTML = maxLength;

input.oninput = function () {
  countt.innerHTML = maxLength - this.value.length;
  countt.innerHTML == 0 ? countt.classList.add("zero") : countt.classList.remove("zero");
  // Set The Progress
  progresss.style.width = `${(this.value.length * 100) / maxLength}%`;
};

// end start descount letter progress