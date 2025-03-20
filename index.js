const phrases = document.querySelector(".home__phrases__display");
const ul = document.createElement("ul");
const li = document.createElement("li");

const style = document.createElement("style");
style.textContent = `
  li {
    list-style-type: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const phraseList = [
  "Hi there!",
  "How are you doing?",
  "How's it going?",
  "What's up?",
];

let index = 0;

document.head.appendChild(style);
ul.appendChild(li);
phrases.appendChild(ul);

function updatePhrase() {
  li.textContent = phraseList[index];
  index = (index + 1) % phraseList.length;
}

updatePhrase();
setInterval(updatePhrase, 2000);
