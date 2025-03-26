class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const nav = document.createElement("nav");
    nav.style.padding = "0";
    nav.style.border = "var(--border)";
    nav.style.padding = "var(--padding)";
    nav.style.borderRadius = "var(--border-radius)";
    nav.style.marginBottom = "0.625rem" 
    
    const span = document.createElement("span");
    span.style.display = "block";
    span.textContent = "COURSES";
    span.style.fontSize = "1.15rem";
    span.style.fontWeight = "bold";
    span.style.marginBottom = "1.125rem"
    nav.appendChild(span);

    const courses = [
      { href: '#', text: 'Beginner' },
      { href: '#', text: 'Intermediate' },
      { href: '#', text: 'Advanced' }
    ];

    courses.forEach(course => {
      const link = document.createElement("a");
      link.href = course.href;
      link.textContent = course.text;
      link.style.display = 'block';
      link.style.marginBottom = '0.5rem';
      nav.appendChild(link);
    });

    

    this.shadowRoot.appendChild(nav);
  }
}

export default NavBar;
