import {
  groupAdd,
  devices,
  schedule,
  badge,
  payment,
  mail,
  whatsapp,
} from "../../svg-icons.js";

class IconList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style"); /*css*/
    style.textContent = `
      ul {
        padding: 0;
        margin: 0;
      }

      div {
        position: relative;
        bottom: 0.125rem;
      }

      li {
        list-style: none;
        font-size: var(--p-size);
        display: flex;
        align-items: start;
        gap: 0.625rem;
      }

      ul li:last-of-type div{
        margin-right: 0.1rem;
      }

      li:last-child {
        margin-left: 0.157rem;
      }
    `;
    this.shadowRoot.appendChild(style);

    const icons = {
      groupAdd: groupAdd,
      devices: devices,
      schedule: schedule,
      badge: badge,
      payment: payment,
      mail: mail,
      whatsapp: whatsapp,
    };

    const items = [
      { icon: "groupAdd", item: "Aula individual ou em grupo." },
      {
        icon: "devices",
        item: "Material como áudios, vídeos e exercícios online.",
      },
      {
        icon: "schedule",
        item: "Aulas de 50 minutes ou mais conforme a disponibilidade do aluno e do professor.",
      },
      { icon: "badge", item: "Sobre" },
      { icon: "payment", item: "Preço" },
      { icon: "mail", item: "Mail" },
      { icon: "whatsapp", item: "WhatsApp" },
    ];

    const template = document.createElement("template"); /*html*/
    template.innerHTML = `
      <ul>
        ${items.map((item) => `
          <li>
            <div>${icons[item.icon]}</div>
            ${item.item}
          </li>
        `
          ).join("")}
      </ul>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
  }
}

export default IconList;
