// Components
import Button from "./components/atoms/Button.js";
import IconList from "./components/molecules/IconList.js";
import Layout from "./components/organisms/Layout.js";
import Header from "./components/organisms/Header.js";
import Whiteboard from "./components/molecules/Whiteboard.js";
import Welcome from "/js/pages/welcome.js";
import AllInOne from "./components/organisms/AllInOn.js"

customElements.define("wc-button", Button);
customElements.define("wc-icon-list", IconList);
customElements.define("wc-layout", Layout);
customElements.define("wc-header", Header);
customElements.define("wc-whiteboard", Whiteboard);
customElements.define("wc-welcome", Welcome);
customElements.define("wc-all-in-one", AllInOne)