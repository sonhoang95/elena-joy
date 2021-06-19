const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll("a");

burger.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
