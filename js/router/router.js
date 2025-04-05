const Router = {
  init: () => {
    // console.log("Router is running...");

    // document.querySelectorAll("nav a").forEach((link) => {
    //   link.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     const url = e.target.getAttribute("href");
    //     Router.nav(url);
    //   });
    // });

    Router.handleRouter();

    window.addEventListener("popstate", (e) => {
      Router.nav(e.state.route, false);
    });

    customElements.whenDefined("wc-header").then(() => {
      const header = document.querySelector("wc-header");
      const shadowRoot = header.shadowRoot;

      const loginButton = shadowRoot.querySelector("[data-icon=login]");
      if (loginButton) {
        loginButton.addEventListener("click", () => {
          Router.nav("/dashboard");
        });
      }
    });
  },

  nav: (route, addToHistory = true) => {
    console.log(route);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
    Router.handleRouter();
  },

  handleRouter: () => {
    const path = window.location.pathname;

    let header = document.querySelector("wc-header");
    if (!header) {
      header = document.createElement("wc-header");
      document.body.appendChild(header);
    }

    if (header) {
      const loginButton = header.shadowRoot.querySelector("[data-icon=login]");
      if (loginButton) loginButton.style.display = "block";

      const logoutButton =
        header.shadowRoot.querySelector("[data-icon=logout]");
      if (logoutButton) logoutButton.style.display = "none";

      const menuButton = header.shadowRoot.querySelector("[data-icon=menu]");
      if (menuButton) menuButton.classList.add("hidden");

      const logo = header.shadowRoot.querySelector("span");
      if (logo) logo.style.display = "none";
    }

    if (path === "/dashboard") {
      document.body.innerHTML = ""; // Limpa o conteúdo
      document.body.appendChild(header);

      if (header) {
        const loginButton =
          header.shadowRoot.querySelector("[data-icon=login]");
        if (loginButton) loginButton.style.display = "none";
      }

      const logoutButton =
        header.shadowRoot.querySelector("[data-icon=logout]");
      if (logoutButton) logoutButton.style.display = "inline-block";

      const menuButton = header.shadowRoot.querySelector("[data-icon=menu]");
      if (menuButton) menuButton.classList.add("visible");

      const logo = header.shadowRoot.querySelector("span");
      if (logo) logo.style.display = "block";

      const layout = document.createElement("wc-layout");
      document.body.appendChild(layout);

      const content = layout.shadowRoot.querySelector("#content")
      content.innerHTML = "";
      const welcome = document.createElement("wc-welcome");
      content.appendChild(welcome);
    }

    
  },
};

export default Router;
