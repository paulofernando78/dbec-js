import { login } from "../../assets/img/index.js";

export class WcButton extends HTMLElement {
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
          position: relative;

          }
          
          button.active {
          box-shadow: var(--neumorphism-active);
        }

        button svg {
          width: 100%;
          height: 100%;
          fill: #a8a8a8;
        }

        button.active svg {
          transform: scale(0.950);
        }
      </style>

      <button>
        ${login}
      </button>
    `;
    this.button = this.shadowRoot.querySelector("button");
    this.buttonClicked = new Audio("/assets/audio/button-clicked.mp3");
    this.buttonReleased = new Audio("/assets/audio/button-released.mp3");
  }

  connectedCallback() {
    this.button.addEventListener("mousedown", () => {
      this.button.classList.toggle("active");
      this.buttonClicked.currentTime = 0;
      this.buttonClicked.play();
    });

    this.button.addEventListener("mouseup", () => {
      this.button.classList.toggle("active");
      this.buttonReleased.currentTime = 0;
      this.buttonReleased.play();
    });
  }
}

// customElements.define("wc-button", WcButton);
