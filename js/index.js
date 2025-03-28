import "./components.js";

const phrases = document.querySelector(".home__phrases__display");
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
  li.style.opacity = 0; // Aplica fade-out

  setTimeout(() => {
    li.textContent = phraseList[index]; // Troca a frase
    li.style.opacity = 1; // Aplica fade-in
    index = (index + 1) % phraseList.length;
  }, 500); // Tempo deve ser igual ao da transição CSS
}

updatePhrase();
setInterval(updatePhrase, 2000);

const header = document.querySelector("wc-header");
if (header) {
  const logoutButton = header.shadowRoot.querySelector("[data-icon=logout]");
  if (logoutButton) {
    logoutButton.remove();
  }

  const menuButton = header.shadowRoot.querySelector("[data-icon=menu]");
  if (menuButton) {
    menuButton.remove();
  }

  const logo = header.shadowRoot.querySelector("span");
  if (logo) {
    logo.remove();
  }
}

// Adding layout component
document.getElementById("dashboard").addEventListener("click", () => {
  document.body.innerHTML = "";
  const header = document.createElement("wc-header");
  const layout = document.createElement("wc-layout");
  document.body.appendChild(header);
  document.body.appendChild(layout);

  const loginButton = header.shadowRoot.querySelector("[data-icon=login]");
  if (loginButton) {
    loginButton.remove();
  }

  history.pushState({}, "", /dashboard/);
});
