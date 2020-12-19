const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");

function toggle() {
  trailer.classList.toggle("active");
  video.pause();
  video.currentTime = 0;
}
