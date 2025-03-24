const style = document.createElement("style");
style.textContent = `
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  `;

const template = document.createElement("template");
template.innerHTML = `
  <div class="header">
    <wc-button icon=""></wc-button>
    <span>DAILY BASIS ENGLISH COURSE</span>
  </div>
  `;

class WcHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(style);
  }
}

export default WcHeader;
