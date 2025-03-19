const template = document.createElement("template");
template.innerHTML = `
  <style>
    img {
      margin-right: .625rem;
    }
  </style>
  <ul>
    <li>
      <img src=${imgSrc} alt=${imgAlt}>${item}
    </li>
  </ul>
`;

class IconList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    this.shadowRoot.innerHTML = `
      <style>
        img {
          margin-right: .625rem;
        }
      </style>
      <ul>
        <li>
        <img src=${imgSrc} alt=${imgAlt}>${item}
        </li>
      </ul>
    `;
  }
}

customElements.define("wc-icon-list", IconList);