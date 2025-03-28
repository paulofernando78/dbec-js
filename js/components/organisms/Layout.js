const style = document.createElement("style"); /*css*/
style.textContent = `
  .container {
    display: flex;
    gap: 0.625rem;
    
    main {
      padding: var(--padding);
      border: var(--border);
      border-radius: var(--border-radius);
      flex-grow: 1;
      
      p {
        margin: 0;
      }
    }
  }
`;

const template = document.createElement("template"); /*html*/
template.innerHTML = `
  <div class="container">
    <wc-nav-bar></wc-nav-bar>  
    <main id="root">
      <p>Main</p>
    </main>
  </div>
`;

class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Layout;
