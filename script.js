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
