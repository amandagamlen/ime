var track = document.getElementById('track')
var video = document.getElementById('myVideo')
var controlBtn = document.getElementById('play-pause')

function playPause() {
  if (track.paused) {
    track.play()
    video.play()
    //controlBtn.textContent = "Pause";
    controlBtn.className = 'pause'
  } else {
    track.pause()
    video.pause()
    //controlBtn.textContent = "Play";
    controlBtn.className = 'play'
  }
}

controlBtn.addEventListener('click', playPause)
track.addEventListener('ended', function () {
  controlBtn.className = 'play'
})
