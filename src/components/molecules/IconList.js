import { groupAdd } from "../../../assets/js/svg-icons.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
  ul, li {
    padding: 0;
    }
    li {
    list-style-type: none;
    font-size: var(--p-size);
    line-height: var(--p-line-height);
  }
    </style>
    <ul></ul>
`;
export class WcIconList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const items = JSON.parse(this.getAttribute("items"));
    const ul = this.shadowRoot.querySelector("ul");

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  }
}

customElements.define("wc-icon-list", WcIconList);
