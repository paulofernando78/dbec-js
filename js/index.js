import "./components.js";
import "./router/Router.js";

const phrases = document.querySelector(".home__phrases__display");

if (phrases) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  const style = document.createElement("style");
  style.textContent = `
    li {
      list-style-type: none;
      font-family: "Slackey", sans-serif;
      font-size: 1.5rem;
      font-weight: bold;
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    }
  `;

  const phraseList = [
    "Hi there!",
    "How are you doing?",
    "How's it going?",
    "What's up?",
    "How are you?",
    "How are you feeling?",
  ];

  let index = 0;

  document.head.appendChild(style);
  ul.appendChild(li);
  phrases.appendChild(ul);

  function updatePhrase() {
    li.style.opacity = 0;

    setTimeout(() => {
      li.textContent = phraseList[index];
      li.style.opacity = 1;
      index = (index + 1) % phraseList.length;
    }, 500); // Tempo igual ao da transição CSS
  }

  updatePhrase();
  setInterval(updatePhrase, 2000);
}

// Inicializa o roteamento
// Router.init();