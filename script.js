const nameText = document.getElementById("name");
const info = document.getElementById("info");

nameText.addEventListener("click", () => {
  info.classList.toggle("hidden");
});

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.innerText = "Sound Off";
  } else {
    music.pause();
    btn.innerText = "Sound On";
  }
});
