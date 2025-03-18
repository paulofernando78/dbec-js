import { login } from "../../assets/img/index.js";

class WcButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        button {
        width: 35px;
        height: 35px;
          box-shadow: var(--neumorphism);
          border: none;
          border-radius: 100%;
          display: inline-block;
          cursor: pointer;
          transition: background 0.3s;
          position: relative;
        }

        button.active {
          box-shadow: var(--neumorphism-active);
        }

        button svg {
          width: 100%;
          height: 100%;
          fill: var(--color);
         
        }
      </style>

      <button>
        ${login}
      </button>
    `;
    this.button = this.shadowRoot.querySelector("button");
  }

  connectedCallback() {
    this.button.addEventListener("mousedown", () => {
      this.button.classList.toggle("active")
    })

    this.button.addEventListener("mouseup", () => {
      this.button.classList.toggle("active")
    })
  }
}

customElements.define("wc-button", WcButton);
