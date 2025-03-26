const style = document.createElement("style");
style.textContent = `
    p {
        font-size: 1.5rem;
        font-weight: bold;
    }
    `;

class Welcome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    const p = document.createElement("p");
    p.textContent = "Welcome to the Daily Basis English Course. Here you'll find a lot of interesting materials. Use it wisely.";
    thisshadowRoot.appendChild(style);
    this.shadowRoot.appendChild(p);
  }
}

export default Welcome;