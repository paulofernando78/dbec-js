class WcLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      .header-navbar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f8f9fa;
        padding: 20px;
      }
    </style>
        <wc-navbar></wc-navbar>
        teste
        <main id=root><main>
    `;
  }
}

customElements.define("wc-layout", WcLayout);

export default WcLayout;
