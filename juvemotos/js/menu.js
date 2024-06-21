let body = document.querySelector('body')
let header = document.querySelector('header')


onscroll = () => {
  if(scrollY > 10) {
    header.style.backgroundColor = '#222222f1'
    header.style.boxShadow = '#222222f1 0 0 2px 10px'
    header.style.marginTop = '0px'
    
  } else {
    header.style.backgroundColor = '#000000a1'
    header.style.boxShadow = '#000000a1 0 0 2px 10px'
    header.style.marginTop = '20px'
  }
}