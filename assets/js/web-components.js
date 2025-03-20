// Components
import { WcButton } from "/src/components/atoms/Button.js";
import { WcIconList } from "/src/components/molecules/IconList.js";

// Função para registrar Web Components sem repetir
const registerComponent = (name, component) => {
  if (!customElements.get(name)) {
    customElements.define(name, component);
  }
};

// Registrar os componentes
registerComponent("wc-button", WcButton);
registerComponent("wc-icon-list", WcIconList);