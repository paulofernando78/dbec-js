const style = document.createElement("style");
style.textContent = `
  nav {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }
  
  span { 
    font-size: 1.125rem;
    font-weight: bold;
  }
  `;

const template = document.createElement("template");
template.innerHTML = `
  <nav">
    <span>COURSES</span>
    <ul>
      <li><a href="/">Beginner</a></li>
      <li><a href="/">Elementary</a></li>
      <li><a href="/">Pre-Intermediate</a></li>
      <li><a href="/">Intermediate</a></li>
    </ul>
    <span>EXTRAS</span>
    <ul>
      <li><a href="/">Audiobooks</a></li>
      <li><a href="/">Grammar</a></li>
      <li><a href="/">Pronunciation</a></li>
    </ul>
    <span>SPECIFIC PURPOSES</span>
    <ul>
      <li><a href="/">Business</a></li>
      <li><a href="/">Travel</a></li>
      <li><a href="/">Job Interviews</a></li>
    </ul>
  </nav>
  `;

class NavBar {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(style);
  }
}

customElements.define("wc-nav-bar", NavBar);

export default NavBar;
