export class WcIconList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.items = [];
    this.render();
  }

  static get observedAttributes() {
    return ["items"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "items" && newValue !== oldValue) {
      try {
        this.items = JSON.parse(newValue);
        this.render();
      } catch (e) {
        console.error("Failed to parse items attribute:", e);
      }
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ul, li {
          margin: 0;
          padding: 0;
        }
        li {
          list-style-type: none;
          font-size: var(--p-formatting);
          line-height: var(--p-line-height);
        }
      </style>
      <ul>
        ${this.items.map(
          (item) => `
          <li>
            ${item.list || ""}
          </li>
        `
        ).join('')}
      </ul>
    `;
  }

  // Helper method to set items programmatically
  setItems(items) {
    this.items = items;
    this.render();
  }
}

customElements.define("wc-icon-list", WcIconList);
