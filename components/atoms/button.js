class wcButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        button {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border: none;
          border-radius: 50%;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          transition: background 0.3s;
        }
      </style>
      
      <button>
        <slot></slot>
      </button>
    `;
  }
}

// Registrando o componente
customElements.define("wc-button", wcButton);
