import { login } from "../../../assets/js/svg-icons.js";

export class WcButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        button {
        // display: inline-block;
        background-color: var(--button-color);
        width: 35px;
        height: 35px;
        box-shadow: var(--neumorphism);
        border: none;
        border-radius: 100%;
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
    // Add accessibility attributes
    if (!this.hasAttribute("aria-label")) {
      this.button.setAttribute("aria-label", "Login");
    }

    // Add keyboard support
    this.button.setAttribute("tabindex", "0");
    this.button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.button.classList.add("active");
        this.buttonClicked.currentTime = 0;
        this.buttonClicked
          .play()
          .catch((e) => console.warn("Audio playback failed", e));
      }
    });

    this.button.addEventListener("keyup", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.button.classList.remove("active");
        this.buttonReleased.currentTime = 0;
        this.buttonReleased
          .play()
          .catch((e) => console.warn("Audio playback failed", e));
      }
    });

    this.button.addEventListener("mousedown", () => {
      this.button.classList.add("active");
      this.buttonClicked.currentTime = 0;
      this.buttonClicked
        .play()
        .catch((e) => console.warn("Audio playback failed", e));
    });

    this.button.addEventListener("mouseup", () => {
      this.button.classList.remove("active");
      this.buttonReleased.currentTime = 0;
      this.buttonReleased
        .play()
        .catch((e) => console.warn("Audio playback failed", e));
    });

    this.button.addEventListener("touchstart", () => {
      this.button.classList.add("active");
      this.buttonClicked.currentTime = 0;
      this.buttonClicked
        .play()
        .catch((e) => console.warn("Audio playback failed", e));
    });

    this.button.addEventListener("touchend", () => {
      this.button.classList.remove("active");
      this.buttonReleased.currentTime = 0;
      this.buttonReleased
        .play()
        .catch((e) => console.warn("Audio playback failed", e));
    });
  }

  disconnectedCallback() {
    // Clean up event listeners when component is removed
    this.button.removeEventListener("mousedown", this.handleMouseDown);
    this.button.removeEventListener("mouseup", this.handleMouseUp);
    this.button.removeEventListener("keydown", this.handleKeyDown);
    this.button.removeEventListener("keyup", this.handleKeyUp);
  }
}

customElements.define("wc-button", WcButton);
