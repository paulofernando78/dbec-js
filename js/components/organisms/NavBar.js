const style = document.createElement("style"); /*css*/
style.textContent = `
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
    `;

const template = document.createElement("template"); /*html*/
template.innerHTML = `
      <nav>
        <span>COURSES</span>
        <a href="/pages/courses/beginner.js">Beginner</a>
        <a href="/pages/courses/elementary.js">Elementary</a>
        <a href="/pages/courses/pre-intermediate.js">Pre Intermediate</a>
        <a href="/pages/courses/intermediate.js">Intermediate</a>
        <span>EXTRAS</span>
        <a href="/pages/pages/extras/audibook.js">Audiobook</a>
        <a href="/pages/extras/grammar.js">Grammar</a>
        <a href="/pages/extras/vocabulary.js">Vocabulary</a>
        <span>SPECIFIC PURPOSES</span>
        <a href="/pages/specific-purpuses/business.js">Business</a>
      </nav>
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
