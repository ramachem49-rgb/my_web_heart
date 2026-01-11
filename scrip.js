const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you Baby 😘";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";

});

function playAudio() {
  const audio = new Audio("ssstik.io_1768145349133.mp3");
  audio.loop = true;   // លេងជុំវិញ
  audio.volume = 0.5; // សម្លេង 50%
  audio.play();
}


noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
