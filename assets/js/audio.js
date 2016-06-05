function aud_play_pause() {
  var myAudio = document.getElementById("theme");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}