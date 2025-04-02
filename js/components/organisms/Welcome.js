const template = document.createElement("template");
template.innerHTML = `
  <p>Welcome to the Daily Basis English Course. Here you'll find a lot of interesting materials. Use it wisely.</p>
`;

class Welcome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      p {
          font-weight: bold;
      }
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Welcome;
