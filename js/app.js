
const showcaseText = document.querySelector(".showcase-text");

document.addEventListener("scroll", scrollAnimation);

function scrollAnimation() {
  let y = window.scrollY;
  // Setting the scroll effect 
  showcaseText.style = `margin-top : ${y/2+16}px; color: rgba(255, 255, 255, ${0.8-y/800})`;
}
