import Router from "./router/Router.js";

window.app = {};  // Cria o objeto global 'app'
app.router = Router;  // Atribui o Router ao objeto global 'app'

window.addEventListener("DOMContentLoaded", () => {  // Garante que o DOM esteja carregado antes de rodar o código
  app.router.init();  // Inicializa o roteador
});