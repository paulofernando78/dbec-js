// Components
import { WcButton } from "/js/components/atoms/Button.js";

// Function to register Web Components without repeating
const registerComponent = (name, component) => {
  if (!customElements.get(name)) {
    customElements.define(name, component);
  }
};

// Register components
registerComponent("wc-button", WcButton);