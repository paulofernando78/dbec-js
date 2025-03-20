import { groupAdd } from "../../../assets/js/svg-icons.js";

export class WcIconList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = "aaa";

    this.shadowRoot.appendChild(ul);
    this.shadowRoot.appendChild(li);
  }
}

customElements.define("wc-icon-list", WcIconList);
