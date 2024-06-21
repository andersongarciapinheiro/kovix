let sandwichmenu = document.getElementById('sandwichmenu')
let bar = document.querySelectorAll('.bar')
let navMenu = document.querySelector('.nav-menu')

sandwichmenu.addEventListener('click', function () {
  bar.forEach((i, index) => {
    let newClass = 'bar'+[index]
    i.classList.toggle(newClass)
  });
  
  navMenu.classList.toggle('toggle-menu')
})