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

// Message Validation
const errorMessage = document.getElementById("error-message");
const form = document.getElementById("message-form");
const message = document.getElementById("message");
form.addEventListener("submit", validate);

message.addEventListener("input", function () {
  if (errorMessage.classList.contains("message-show")) {
    errorMessage.classList.remove("message-show");
  }
});

function validate(e) {
  const email = document.getElementById("email");
  const name = document.getElementById("name");

  e.preventDefault();
  if (message.value.trim() == "") {
    errorMessage.classList.add("message-show");
  } else {
    email.value = "";
    name.value = "";
    message.value = "";
  }
}
