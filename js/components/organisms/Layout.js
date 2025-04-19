class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const imports = document.createElement("link");
    imports.rel = "stylesheet";
    imports.href = "/css/imports.css";
    this.shadowRoot.appendChild(imports);

    const style = document.createElement("style"); /*css*/
    style.textContent = `
      .container {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.625rem;

        nav {
          padding: var(--padding);
          border: var(--border);
          border-radius: var(--border-radius);
          height: 100dvh;
        }
      
        span {
          display: block;
          font-size: 1.15rem;
          font-weight: bold;
          margin-top: 1.125rem;
          margin-bottom: 1.125rem;
        }

        a {
          font-weight: bold;
          text-decoration: none;
          color: gray;
          display: block;
        }

        a:last-of-type {
          // margin-bottom: 0;
        }

        a.active {
          color: blue;
        }
        
        main {
          padding: var(--padding);
          border: var(--border);
          border-radius: var(--border-radius);          
        }
      }

      @media (max-width: 768px) {
        .container {
          grid-template-columns: 1fr;

          nav {
            height: auto;
          }
        }

      }
    `;
    this.shadowRoot.appendChild(style);

    const container = document.createElement("div");
    container.classList.add("container");

    const nav = document.createElement("nav");
    container.appendChild(nav);

    const links = [
      { href: "/js/pages/welcome.js", text: "Dashboard" },
      { span: "COURSES" },
      {
        href: "/js/pages/courses/beginner/contents.js",
        text: "Beginner",
      },
      { href: "/js/pages/courses/elementary/contents.js", text: "Elementary" },
      {
        href: "/js/pages/courses/pre-intermediate.js",
        text: "Pre-Intermediate",
      },
      {
        href: "/js/pages/courses/intermediate/contents.js",
        text: "Intermediate",
      },
      { span: "EXTRAS" },
      {
        href: "/js/pages/extras/audibook/contents.js",
        text: "Audiobook",
      },
      {
        href: "/js/pages/extras/grammar/contents.js",
        text: "Grammar",
      },
      {
        href: "/js/pages/extras/vocabulary/contents.js",
        text: "Vocabulary",
      },
      {
        href: "/js/pages/extras/pronunciation/contents.js",
        text: "Pronunciation",
      },
      { span: "SPECIFIC PURPOSES" },
      {
        href: "/js/pages/specific-purpuses/business/contents.js",
        text: "Business",
      },
    ];

    links.forEach((link) => {
      if (link.span) {
        const span = document.createElement("span");
        span.textContent = link.span;
        span.classList.add("span");
        nav.appendChild(span);
      }

      if (link.href && link.text) {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        a.classList.add("a");
        nav.appendChild(a);
      }
    });

    const main = document.createElement("main");
    main.id = "content";
    main.classList.add("main");
    container.appendChild(main);

    this.shadowRoot.appendChild(container);
  }
}

export default Layout;
