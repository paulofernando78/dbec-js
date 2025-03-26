class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    const header = document.createElement("header");
    header.style.border = "var(--border)";
    header.style.borderRadius = "5px";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.padding = "var(--padding";
    header.style.marginBottom = ".625rem";

    const menuButton = document.createElement("wc-button");
    menuButton.setAttribute("data-icon", "menu");
    header.appendChild(menuButton);

    const span = document.createElement("span");
    span.style.display = "inline-block";
    span.textContent = "DAILY BASIS ENGLISH COURSE";
    span.style.fontFamily = "Impact, sans-serif";
    span.style.fontSize = "1.25rem";
    span.style.textAlign = "center";
    header.appendChild(span);

    const darkModeButton = document.createElement("wc-button");
    darkModeButton.setAttribute("data-icon", "darkMode");
    header.appendChild(darkModeButton);

    this.shadowRoot.appendChild(header);
  }
}

export default Header;
