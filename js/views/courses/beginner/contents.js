const template = document.createElement("template");
template.innerHTML = `
<h1>Beginner contents</h1>
`

class BeginnerContents {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
  }
}