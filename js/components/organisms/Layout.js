class WcLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #f8f9fa;
        padding: 20px;
      }
    </style>
        <div container>
          <wc-navbar></wc-navbar>
          > Layout
          <main id=root><main>
        </div>
    `;
  }
}

export default WcLayout;
