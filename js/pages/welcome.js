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
        grid-template-columns: repeat(auto-fit, 120px);
        justify-content: center;
        gap: 10px;
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
        width: 70px
      }
    `;
    this.shadowRoot.appendChild(style);

    const board = document.createElement("wc-whiteboard");
    board.items = {
      title: "Dashboard",
    }
    this.shadowRoot.appendChild(board)

    const container = document.createElement("div");
    container.classList.add("line-break");
    this.shadowRoot.appendChild(container);

    const texts = [
      {
        item: "Welcome to the Daily Basis English Course. Here you'll find a lot of interesting materials. Use it wisely.",
      },
      {
        item: "How are you feeling today? I'm / I'm feeling...",
      },
    ];

    texts.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text.item;
      container.appendChild(p);
    });

    const gifsContainer = document.createElement("div");
    gifsContainer.classList.add("gifs-container");
    container.appendChild(gifsContainer);

    const emojis = [
      {
        img: "/assets/img/gif/emoji/good.gif",
        word: "good",
      },
      {
        img: "/assets/img/gif/emoji/happy.gif",
        word: "happy",
      },
      {
        img: "/assets/img/gif/emoji/sad.gif",
        word: "sad",
      },
      {
        img: "/assets/img/gif/emoji/angry.gif",
        word: "angry",
      },
      {
        img: "/assets/img/gif/emoji/annoyed.gif",
        word: "annoyed",
      },
      {
        img: "/assets/img/gif/emoji/calm.gif",
        word: "calm",
      },
      {
        img: "/assets/img/gif/emoji/crazy.gif",
        word: "crazy",
      },
      {
        img: "/assets/img/gif/emoji/tired.gif",
        word: "tired",
      },
      {
        img: "/assets/img/gif/emoji/anxious.gif",
        word: "anxious",
      },
      {
        img: "/assets/img/gif/emoji/bored.gif",
        word: "bored",
      },
      {
        img: "/assets/img/gif/emoji/silly.gif",
        word: "silly",
      },
      {
        img: "/assets/img/gif/emoji/scared.gif",
        word: "scared",
      },
      {
        img: "/assets/img/gif/emoji/thoughtful.gif",
        word: "thoughtful",
      },
      {
        img: "/assets/img/gif/emoji/frustrated.gif",
        word: "frustrated",
      },
      {
        img: "/assets/img/gif/emoji/disappointed.gif",
        word: "disappointed",
      },
      {
        img: "/assets/img/gif/emoji/embarrassed.gif",
        word: "embarrassed",
      },
      {
        img: "/assets/img/gif/emoji/sleepy.gif",
        word: "sleepy",
      },
      {
        img: "/assets/img/gif/emoji/peaceful.gif",
        word: "peaceful",
      },
      {
        img: "/assets/img/gif/emoji/thankful.gif",
        word: "thankful",
      },
      {
        img: "/assets/img/gif/emoji/sick.gif",
        word: "sick",
      },
      {
        img: "/assets/img/gif/emoji/i-dont-know.gif",
        word: "I don't know",
      },
    ];

    emojis.forEach((emoji) => {
      const gifCard = document.createElement("div");
      gifCard.classList.add("gif-card");
      gifsContainer.appendChild(gifCard);

      const img = document.createElement("img");
      img.classList.add("emoji-img");
      img.src = emoji.img;
      gifCard.appendChild(img);

      const emojiName = document.createElement("span");
      // emojiName.classList.add("emoji-name")
      emojiName.textContent = emoji.word;
      gifCard.appendChild(emojiName);
    });
  }
}

export default Welcome;
