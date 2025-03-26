class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const layout = document.createElement("div");
    // layout.style.border = "1px solid green";
    
    const navbarMain = document.createElement("div");
    navbarMain

    const header = document.createElement("wc-header");
    layout.appendChild(header);

    const navBar = document.createElement("wc-nav-bar");

    layout.appendChild(navBar);

    const main = document.createElement("main");
    main.style.padding = "var(--padding)";
    main.style.border = "var(--border)";
    main.style.borderRadius = "var(--border-radius)";
    main.id = "root";
    const p = document.createElement("p");
    p.textContent = "Main";
    main.appendChild(p);
    layout.appendChild(main);

    this.shadowRoot.appendChild(layout);
  }
}

export default Layout;
