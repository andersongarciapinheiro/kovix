let faqContainer = document.querySelectorAll('.faq-container')
let title = document.querySelector('.title')
let arrowImg = document.querySelectorAll('.title img')
let textFaq = document.querySelectorAll('.text')

faqContainer.forEach( (i, index) => {
  i.addEventListener('click', () => {
    arrowImg[index].classList.toggle('rotate')
    textFaq[index].classList.toggle('none')
  })
})


