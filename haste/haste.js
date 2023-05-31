// $(document).ready(function() {
//   $("#play").click(function() {
//     $("#vinyl").addClass("spin-animation");
//     $("#vinyl").css("animation-play-state", "running");
//   });

//   $("#stop").click(function() {
//     $("#vinyl").css("animation-play-state", "paused");
//   });
// });
// var vinyl = document.getElementById('vinyl')
// var track = document.getElementById('track')
// var spin = document.getElementById('spin-animation').style.WebkitAnimationPlayState = "running";

// function spin() {
//   vinyl.classList.add('spin-animation')
// }
// track.addEventListener('click', spin)

function play() {
  var audio = document.getElementById('audio')
  var vinyl = document.getElementById('vinyl')
  vinyl.classList.remove('spin-animation-paused')
  vinyl.classList.add('spin-animation')
  var svg = document.querySelector('svg')
  svg.classList.add('active')
  //  var vinyl = document.getElementById("vinyl");
  // vinyl.classList.add("spin-animation");
  // vinyl.css("animation-play-state", "running");
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

// var btnDraw = document.getElementById('play')
// var btnErase = document.getElementById('canvas')
// var wrapper = document.querySelector('svg')

// function draw() {
//   wrapper.classList.add('active')
// }

// function erase() {
//   wrapper.classList.remove('active')
// }
// btnDraw.addEventListener('click', draw, false)
// btnErase.addEventListener('click', erase, false)

// Play draw animation once
// setTimeout(draw, 300)
