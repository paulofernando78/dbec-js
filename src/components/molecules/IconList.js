import { groupAdd } from "../../../assets/js/svg-icons.js";

export class WcIconList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      ul {
        padding: 0;
        }
      li {
        list-style-type: none;
      }
    `;

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = this.getAttribute("list");

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(ul);
    this.shadowRoot.appendChild(li);
  }
}

customElements.define("wc-icon-list", WcIconList);
