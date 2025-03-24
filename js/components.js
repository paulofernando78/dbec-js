// Components
import WcButton from "./components/atoms/Button.js";
import WcLayout from "./components/organisms/Layout.js";
import WcWhiteboard from "./components/molecules/Whiteboard.js";

// Function to register Web Components without repeating
const registerComponent = (name, component) => {
  if (!customElements.get(name)) {
    customElements.define(name, component);
  }
};

// Register components
registerComponent("wc-button", WcButton);
registerComponent("wc-layout", WcLayout);
registerComponent("wc-whiteboard", WcWhiteboard);