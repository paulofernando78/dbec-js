const style = document.createElement("style");
style.textContent = `
    p {
        font-size: 1.5rem;
        font-weight: bold;
    }
    `;

const template = document.createElement("template");
template.innerHTML = `
    <p>Welcome to the Daily Basis English Course</p>
    <p>Here you'll find a lot of interesting materials. Use it wisely.</p>
    `;

class WcLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(style);
  }
}

customElements.define("wc-layout", WcLayout);
