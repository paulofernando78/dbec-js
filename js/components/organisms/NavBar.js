const style = document.createElement("style"); /*css*/
style.textContent = `
  nav {
    padding: var(--padding);
    border: var(--border);
    border-radius: var(--border-radius);
    height: 100dvh;
  }

  nav.visible {
    display: block;
  }

  span {
    display: block;
    font-size: 1.15rem;
    font-weight: bold;
    margin-top: 1.125rem;
    margin-bottom: 1.125rem;
  }
    nav span:first-of-type {
      margin-top: 0;
    }
  a {
    font-weight: bold;
    text-decoration: none;
    color: gray;
    display: block;
    margin-bottom: 0.5rem;
  }
  a:last-of-type {
    margin-bottom: 0;
  }
  a.active {
    color: blue;
  }

  @media (max-width: 768px) {
    nav {
      height: auto;
    }
  }
`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default NavBar;
