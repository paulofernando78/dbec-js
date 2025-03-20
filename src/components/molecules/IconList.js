
export class WcIconList extends HTMLElement {
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
        ${svg}>${item}
        <p>teste</p>
        </li>
      </ul>
    `;
  }
}