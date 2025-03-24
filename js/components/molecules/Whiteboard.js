class WcWhiteboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open"})
    this.shadowRoot.innerHTML = `
      <style>
      
      </style>
      <p>Whiteboard</p>
    `;  
  }
}

customElements.define("wc-whiteboard", WcWhiteboard);

export default WcWhiteboard;