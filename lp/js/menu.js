let headerContainer = document.querySelector("#header")
let logoMenu = document.querySelector(".logo")
let logosMenu = document.querySelectorAll(".logos")
let headerMenu = document.querySelector('.menu > ul')
let headerMenuItens = document.querySelectorAll('.menu > ul > li > a')



if (window.innerWidth > 720) {
  window.addEventListener("scroll", onScrollIndexDesktop)
} else {
  scrollMenuOn()
  logoMenu.addEventListener('click', logoOnClick)
}

function onScrollIndexDesktop() {
  window.scrollY > 0 ? scrollMenuOn() : scrollMenuOff()
}

function scrollMenuOn() {
  headerContainer.classList.add("header-fixed")
  headerContainer.style.top = "0px"
  headerContainer.style.backgroundColor = "#595959"
}

function scrollMenuOff() {
  headerContainer.classList.remove("header-fixed")
  headerContainer.style.top = "20px"
  headerContainer.style.backgroundColor = "#ffffff47"
}

// function setColorMenu(color) {
//   headerMenuItens.forEach(i => {
//     i.style.color = color
//   })
// }

logosMenu.forEach(i => {
  logoMenu.addEventListener('mouseenter', () => {
    let interval = setInterval(() => {
      i.classList.toggle('display-none')
    }, 80);

    setTimeout(function () {clearInterval(interval);}, 160);
  });
})








function logoOnClick() {
  headerMenu.classList.toggle('margin-top-menu')
}