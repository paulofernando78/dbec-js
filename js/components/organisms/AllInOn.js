class AllInOne extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"});

    const imports = document.createElement("link");
    imports.rel = "stylesheet";
    imports.href = "/css/imports.css";
    this.shadowRoot.appendChild(imports);

    const style = document.createElement("style");
    style.textContent = `
    
    `
    this.shadowRoot.appendChild(style);

    const p = document.createElement(p)
    p = this.innerHTML("Teste")
    this.shadowRoot.appendChild(p)
  }
}

export default AllInOne