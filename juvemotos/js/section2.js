import { data_dco } from "../data/data-dco.js";

let jobs = document.querySelector('.jobs')

data_dco.forEach( i => {
  console.log(i.thumb)
  makeJob(i.thumb, i.cliente, i.descricao)
})



function makeJob(thumb, cliente, descricao) {
 
  let div1 = document.createElement('DIV')
  div1.className = 'job thumb'
  div1.style.backgroundImage = `url(${thumb})`
  jobs.appendChild(div1)
  
  let div3 = document.createElement('DIV')
  div3.className = 'job-description'
  div1.appendChild(div3)

  let h1 = document.createElement('h1')
  div3.appendChild(h1)
  h1.textContent = `${cliente}`

  let div4 = document.createElement('DIV')
  div4.className = 'title-divisor'
  div3.appendChild(div4)

  let hr1 = document.createElement('hr')
  let hr2 = document.createElement('hr')
  hr1.className = 'divisor'
  hr2.className = 'divisor'
  div4.appendChild(hr1)
  div4.appendChild(hr2)

  let p = document.createElement('p')
  div3.appendChild(p)
  p.textContent = `${descricao}`
}


