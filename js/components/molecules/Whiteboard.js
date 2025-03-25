
class WcWhiteboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const items = JSON.parse(this.getAttribute("items"));
    const whiteboards = items.map((item) => {
      return `
      <h1>${item.title}</h1>
      <h2>${item.subtitle}</h2>
      <p>${item.description}</p>
      <span>${item.time}</span>
      <span>American English</span>
      <span>British English</span>
      `;
    }).join("");

    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="/css/global.css">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/typography.css">

    <style>
    div {
      padding: 10px;
      border: 8px solid black;
      border-radius: 5px;
      background-image: url("/assets/img/general/whiteboard.png");
      background-size: cover;
      background-position: center;
      }
    </style>
    <div>
      ${whiteboards}
    </div>
    `;
    }
  }

export default WcWhiteboard;
