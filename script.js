let master = document.getElementById("masterPlay");
let newAudio = new Audio("1.mp3");
let masterprogress = document.getElementById("progress");
let newmaster = document.getElementById("master");

master.addEventListener("click", () => {
  if (newAudio.paused || newAudio.currentTime <= 0) {
    newAudio.play();
    newmaster.classList.remove("fa-play");
    newmaster.classList.add("fa-pause");
  } else {
    newAudio.pause();
    newmaster.classList.remove("fa-pause");
    newmaster.classList.add("fa-play");
  }
});

newAudio.addEventListener("ended", () => {
  newmaster.classList.remove("fa-pause");
  newmaster.classList.add("fa-play");
  masterprogress.value = parseInt("0");
});

newAudio.addEventListener("timeupdate", () => {
  progress = parseInt((newAudio.currentTime / newAudio.duration) * 100);
  masterprogress.value = progress;
});

progress.addEventListener("change", () => {
  newAudio.currentTime = (masterprogress.value * newAudio.duration) / 100;
});
