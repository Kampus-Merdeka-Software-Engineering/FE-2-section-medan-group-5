/* Preloader */

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".spinner-wrapper").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000);
});

const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});
