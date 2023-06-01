function play() {
  var audio = document.getElementById('audio')
  var vinyl = document.getElementById('vinyl')
  vinyl.classList.remove('spin-animation-paused')
  vinyl.classList.add('spin-animation')
  var svg = document.querySelector('svg')
  svg.classList.add('active')
  audio.play()
}
function pause() {
  var audio = document.getElementById('audio')
  var vinyl = document.getElementById('vinyl')
  vinyl.classList.remove('spin-animation')
  vinyl.classList.add('spin-animation-paused')

  audio.pause()
}

function openNav() {
  document.getElementById('mySidenav').style.width = '250px'
  document.getElementById('main').style.marginLeft = '250px'
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0'
  document.getElementById('main').style.marginLeft = '0'
}

function cs_change_music(track) {
  document.getElementById('audio').pause()
  document.getElementById('audio').setAttribute('src', track)
  document.getElementById('audio').load()
  document.getElementById('audio').play()
  closeNav()
  play()
}
