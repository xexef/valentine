const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const response = document.getElementById("response");

let noClicks = 0;

const noMessages = [
  "T’es sûre ? 🤨",
  "Vraiment sûre ?? 😳",
  "Réfléchis bien… 😏",
  "Dernière chance 😭",
  "💻 Piratage de votre cœur en cours… ❤️‍🔥"
];

noBtn.addEventListener("click", () => {
  if (noClicks < noMessages.length) {
    question.textContent = noMessages[noClicks];
    noClicks++;

    // Le bouton Oui devient plus gros 😈
    yesBtn.style.transform = `scale(${1 + noClicks * 0.2})`;
  }
});

yesBtn.addEventListener("click", () => {
    question.textContent = "💖 Tu me rends heureux chaque jour de ma vie 💖";
    response.textContent = "❤️❤️❤️❤️❤️";
    document.querySelector(".buttons").style.display = "none";
  
    // Explosion de cœurs
    for (let i = 0; i < 30; i++) {
      createHeart();
      createLight();
    }
  });
  
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 300);
function createLight() {
    const light = document.createElement("div");
    light.classList.add("light-effect");
  
    light.style.left = Math.random() * window.innerWidth + "px";
    light.style.top = Math.random() * window.innerHeight + "px";
    light.style.width = 30 + Math.random() * 50 + "px";
    light.style.height = 30 + Math.random() * 50 + "px";
  
    heartsContainer.appendChild(light);
  
    setTimeout(() => {
      light.remove();
    }, 600);
  }
  