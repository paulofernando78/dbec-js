// Components
import { WcButton } from "/src/components/atoms/Button.js";
import { WcIconList } from "/src/components/molecules/IconList.js";

// Function to register Web Components without repeating
const registerComponent = (name, component) => {
  if (!customElements.get(name)) {
    customElements.define(name, component);
  }
};

// Register components
registerComponent("wc-button", WcButton);
registerComponent("wc-icon-list", WcIconList);