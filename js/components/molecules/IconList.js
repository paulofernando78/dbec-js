import {
  groupAdd,
  devices,
  schedule,
  badge,
  payment,
  mail,
} from "../../svg-icons.js";

class WcIconList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      ul, li {
      padding: 0;
    }
    li {
      list-style-type: none;
      font-size: var(--p-size);
      line-height: var(--p-line-height);
    }
      svg {
      }
    </style>
    <ul></ul>
    `;

    const icons = {
      groupAdd: groupAdd,
      devices: devices,
      schedule: schedule,
      badge: badge,
      payment: payment,
      mail: mail,
    };

    const items = JSON.parse(this.getAttribute("items"));
    const ul = this.shadowRoot.querySelector("ul");

    items.forEach((item) => {
      // const flex = 
      const li = document.createElement("li");
      const iconElement = document.createElement("div");
      iconElement.innerHTML = icons[item.icon];
      li.appendChild(iconElement.firstChild);
      li.appendChild(document.createTextNode(item.item));
      ul.appendChild(li);
    });
  }
}

export default WcIconList;
