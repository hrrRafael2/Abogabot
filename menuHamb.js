const menuButton = document.querySelector(".menu-button")
const nav = document.querySelector(".nav")

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("menu-button--open")
  nav.classList.toggle("nav--open")
})