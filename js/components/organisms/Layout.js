const style = document.createElement('style');
style.textContent = `
  .header-navbar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const template = document.createElement('template');
template.innerHTML = `
  <div class="header-navbar-container">
    <wc-header></wc-header>
    <wc-nav-bar></wc-nav-bar>
  </div>
  <main id="root">
    <wc-welcome></wc-welcome>
  </main>
`;

class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
  
