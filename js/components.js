// Components
import Button from "./components/atoms/Button.js";
import IconList from "./components/molecules/IconList.js";
import Layout from "./components/organisms/Layout.js";
import Header from "./components/organisms/Header.js";
import NavBar from "./components/organisms/NavBar.js";
import Whiteboard from "./components/molecules/Whiteboard.js";
import Welcome from "./components/organisms/Welcome.js";

customElements.define("wc-button", Button);
customElements.define("wc-icon-list", IconList);
customElements.define("wc-layout", Layout);
customElements.define("wc-header", Header);
customElements.define("wc-nav-bar", NavBar);
customElements.define("wc-whiteboard", Whiteboard);
customElements.define("wc-welcome", Welcome);