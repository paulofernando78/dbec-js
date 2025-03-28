import {
  spinner,
  login,
  darkMode,
  lightMode,
  menu,
  logout,
} from "../../../js/svg-icons.js";

class WcButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template"); /*html*/
    template.innerHTML = `
      <button></button>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const style = document.createElement("style"); /*css*/
    style.textContent = `
      button {
        background-color: var(--button-color);
        width: 35px;
        height: 35px;
        box-shadow: var(--neumorphism);
        border: none;
        border-radius: 100%;
        cursor: pointer;
      }

      button.active {
        box-shadow: var(--neumorphism-active);
      }

      button svg {
        width: 100%;
        height: 100%;
      }

      button.active svg {
        transform: scale(0.950);
      }
    `;
    this.shadowRoot.appendChild(style);

    this.button = this.shadowRoot.querySelector("button");
    this.buttonClicked = new Audio("/assets/audio/button-clicked.mp3");
    this.buttonReleased = new Audio("/assets/audio/button-released.mp3");
  }

  createButton(icon) {
    const svgIcons = {
      spinner: spinner,
      login: login,
      darkMode: darkMode,
      lightMode: lightMode,
      menu: menu,
      logout: logout,
    };

    if (this.button && svgIcons[icon]) {
      this.button.innerHTML = svgIcons[icon];
    } else {
      console.warn("Icon not found");
    }

    // Add accessibility attributes
    if (!this.hasAttribute("aria-label")) {
      this.button.setAttribute(
        "aria-label",
        icon.charAt(0).toUpperCase() + icon.slice(1)
      );
    }
    this.button.setAttribute("tabindex", "0");
  }

  connectedCallback() {
    const icon = this.getAttribute("data-icon");
    this.createButton(icon);

    // Add keyboard support
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

export default WcButton;
