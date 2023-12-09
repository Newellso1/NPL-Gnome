// Nav Bar
const navButton = document.getElementById("nav-button");
const navTop = document.getElementById("nav-top");
const navList = document.getElementById("nav-list");

function expandNav() {
  if (navButton.classList.contains("rotate")) {
    navButton.classList.remove("rotate");
    navTop.classList.remove("nav-drop");
    navList.classList.remove("show");
  } else {
    navButton.classList.add("rotate");
    navTop.classList.add("nav-drop");
    navList.classList.add("show");
  }
}

// Pop up
const currentDay = document.getElementById("current-day");
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday,",
  "Saturday",
  "Sunday",
];
const date = new Date();
let day = weekdays[date.getDay() - 1];

currentDay.innerHTML = `${day}'s`;

// Pop up validation

const popUp = document.getElementById("pop-up");
const tick = document.getElementById("tick");
const cross = document.getElementById("cross");
const email = document.getElementById("pop-up-email");
const emailCheck = document.getElementById("email-check");

function closePopUp() {
  setTimeout(function () {
    popUp.classList.add("collapse");
  }, 250);
}

function show(e) {
  e.classList.add("show-email");
}

cross.addEventListener("click", closePopUp);

tick.addEventListener("click", function () {
  if (email.value.includes("@" && ".")) {
    closePopUp();
  } else {
    emailCheck.classList.add("show-email");
  }
});

email.addEventListener("input", () => {
  emailCheck.classList.remove("show-email");
});
