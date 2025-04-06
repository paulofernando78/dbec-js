class Welcome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const imports = document.createElement("link");
    imports.rel = "stylesheet";
    imports.href = "/css/imports.css";
    this.shadowRoot.appendChild(imports);

    const style = document.createElement("style"); /*css*/
    style.textContent = `
      p {
          font-weight: bold;
      }

      .gifs-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, 150px);
        gap: 10px;
        height: 100px
      }
      
      .gif-card {
        border: var(--border);
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: max-content;
        padding-bottom: 5px
      }

      .emoji-img {
        width: 80px
      }
    `;
    this.shadowRoot.appendChild(style);

    const container = document.createElement("div");
    container.classList.add("line-break");
    this.shadowRoot.appendChild(container);

    const title = document.createElement("h1");
    title.textContent = "Welcome to your dashboard";
    container.appendChild(title);

    const p = document.createElement("p");
    p.textContent =
      "Welcome to the Daily Basis English Course. Here you'll find a lot of interesting materials. Use it wisely.";
    container.appendChild(p);

    const gifsContainer = document.createElement("div");
    gifsContainer.classList.add("gifs-container");
    container.appendChild(gifsContainer);

    const emojis = [
      {
        item: "/assets/img/gif/emoji/good.gif",
        name: "good"
      },
      {
        item: "/assets/img/gif/emoji/happy.gif",
        name: "happy"
      },
    ];

    emojis.forEach((emoji) => {
      const gifCard = document.createElement("div");
      gifCard.classList.add("gif-card");
      gifsContainer.appendChild(gifCard);

      const img = document.createElement("img");
      img.classList.add("emoji-img")
      img.src = emoji.item;
      gifCard.appendChild(img);

      const emojiName = document.createElement("span")
      // emojiName.classList.add("emoji-name")
      emojiName.textContent = emoji.name;
      gifCard.appendChild(emojiName)
    });
  }
}

export default Welcome;
