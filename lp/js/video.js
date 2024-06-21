const html = document.querySelector('html')
const player = document.getElementById('player')
const videos = document.querySelectorAll('.videos')
let video = document.getElementById('video')
const arrSrc = ['./galeria/videos/01_fiat.mp4', 
              './galeria/videos/02_deezer.mp4',
              './galeria/videos/03_havaianas.mp4', 
              './galeria/videos/04_veja.mp4', 
              './galeria/videos/05_meta.mp4', 
              './galeria/videos/06_samsung.mp4', 
              './galeria/videos/07_loggi.mp4', 
              './galeria/videos/08_outback.mp4', 
              './galeria/videos/09_only.mp4', 
              './galeria/videos/10_seara.mp4', 
              './galeria/videos/11_big.mp4', 
              './galeria/videos/12_elseve.mp4', 
              './galeria/videos/13_lopes.mp4', 
              './galeria/videos/14_vanish.mp4',
              './galeria/videos/15_timburtn.mp4', 
              './galeria/videos/16_livelo.mp4', 
              './galeria/videos/17_benegrip.mp4', 
              './galeria/videos/18_globoplay.mp4']


videos.forEach((i, index) => {
  i.addEventListener('click', function() {
    removeClass(player, 'video-off')
    addClass(player, 'video-on')
    html.style.overflowY = 'hidden'
    video.src = arrSrc[index]
    video.play();
  })
})

player.addEventListener('click', function (e) {
  let ehVideo = e.target.tagName != 'VIDEO'
  if(ehVideo) {
    addClass(player, 'video-off')
    removeClass(player, 'video-on')
    html.style.overflowY = 'scroll'
    video.pause();
  }
})

function addClass(element, className) {
  element.classList.add(className)
}
function removeClass(element, className) {
  element.classList.remove(className)
}


console.log(videos.length)



