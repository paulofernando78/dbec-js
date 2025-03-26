import {
  groupAdd,
  devices,
  schedule,
  badge,
  payment,
  mail,
} from "../../svg-icons.js";

class IconList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const icons = {
      groupAdd: groupAdd,
      devices: devices,
      schedule: schedule,
      badge: badge,
      payment: payment,
      mail: mail,
    };

    const ul = document.createElement("ul");
    ul.style.padding = "0";
    ul.style.margin = "0";
    this.shadowRoot.appendChild(ul);

    const items = JSON.parse(this.getAttribute("items"));
    items.forEach((item) => {
      const li = document.createElement("li");
      li.style.listStyle = "none";
      li.style.fontSize = "var(--p-size)";
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.gap = "0.6rem";
      li.style.marginBottom = "0.625rem";

      const iconElement = document.createElement("div");
      iconElement.innerHTML = icons[item.icon];
      li.appendChild(iconElement.firstChild);
      li.appendChild(document.createTextNode(item.item));
      ul.appendChild(li);
    });
  }
}

export default IconList;
