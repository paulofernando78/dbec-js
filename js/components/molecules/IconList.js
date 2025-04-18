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

      ul li:last-of-type div{
        margin-right: 0.110rem;
      }

      li {
        list-style: none;
        font-size: var(--p-size);
        display: flex;
        align-items: start;
        gap: 0.625rem;
      }

      li:last-child {
        margin-left: 0.150rem;
      }

      p {
        margin: 0
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
        link: "/amostra",
        linkItem: "Amostra",
      },
      {
        icon: "schedule",
        item: "Aulas de 50 minutes ou mais conforme a disponibilidade do aluno e do professor.",
        link: "https://calendar.google.com/calendar/u/0?cid=Zjg2Yzg1NWY0OGNkNmUwZWE5OGE3MTgxNGU4MTQ0MWIwMmNjZGQxMjI3NzIxZjQwODEwNjg0MmFhYjNkOTgyN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
        linkItem: "Ver horários disponíveis",
      },
      { icon: "badge", link: "/sobre", linkItem: "Sobre" },
      { icon: "payment", link: "/precos", linkItem: "Preço" },
      {
        icon: "mail",
        link: "mailto:paulofernando78@gmail.com",
        linkItem: "paulofernando78@gmail.com",
      },
      {
        icon: "whatsapp",
        link: "https://api.whatsapp.com/send/?phone=%2B5511981672145&text&type=phone_number&app_absent=0",
        linkItem: "+55 (11) 981672145",
      },
    ];

    const template = document.createElement("template"); /*html*/
    template.innerHTML = `
      <ul>${items.map((item) => `
          <li>
            <div>${icons[item.icon]}</div>
            <p>
              ${item.item ? `${item.item}` : ""}
              ${item.link ? `<a href="${item.link}">${item.linkItem}</a>` : ""}
            </p>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default IconList;
