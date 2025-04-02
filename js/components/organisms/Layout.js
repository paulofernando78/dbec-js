

const template = document.createElement("template"); /*html*/
template.innerHTML = `
  <div class="container">
    <nav>
      <span>COURSES</span>
      <a href="/js/pages/courses/beginner.js">Beginner</a>
      <a href="/js/pages/courses/elementary.js">Elementary</a>
      <a href="/js/pages/courses/pre-intermediate.js">Pre Intermediate</a>
      <a href="/js/pages/courses/intermediate.js">Intermediate</a>
      <span>EXTRAS</span>
      <a href="/js/pages/pages/extras/audibook.js">Audiobook</a>
      <a href="/js/pages/extras/grammar.js">Grammar</a>
      <a href="/js/pages/extras/vocabulary.js">Vocabulary</a>
      <a href="/js/pages/extras/pronunciation.js">Pronunciation</a>
      <span>SPECIFIC PURPOSES</span>
      <a href="/js/pages/specific-purpuses/business.js">Business</a>
    </nav>
    <main id="content">
      <p>Main</p>
    </main>
  </div>
`;

class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

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
        
        main {
          padding: var(--padding);
          border: var(--border);
          border-radius: var(--border-radius);          
          margin: 0;
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
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default Layout;
