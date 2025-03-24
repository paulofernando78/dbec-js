// Definindo o objeto Router, que vai gerenciar as rotas da aplicação
const Router = {
  // Método 'init' será responsável por inicializar a lógica de navegação
  init: () => {
    console.log("Router is running...");
    
    // Seleciona todos os links dentro da tag <nav> (a barra de navegação)
    document.querySelectorAll("nav a").forEach((link) => {
      // Para cada link encontrado, adicionamos um 'eventListener' para capturar o clique do usuário
      link.addEventListener("click", (e) => {
        e.preventDefault();  // Previne a navegação padrão (evita o recarregamento da página ao clicar no link)

        // Aqui, extraímos o valor do atributo 'href' do link, que vai nos dizer a rota para qual o usuário quer navegar
        const url = link.getAttribute("href");

        // Chama o método 'nav' do Router, passando a rota (url) como argumento
        Router.nav(url); 
      });
    });
  },

  // O método 'nav' é responsável por navegar para uma nova página, alterando a URL sem recarregar a página
  nav: (route, addToHistory = true) => {
    // O parâmetro 'addToHistory' por padrão é 'true', indicando que devemos adicionar a nova rota ao histórico do navegador
    console.log(route)
    
    if (addToHistory) {
      // Aqui usamos o 'history.pushState' para atualizar a URL sem recarregar a página
      // A função 'pushState' permite que você adicione um novo estado no histórico do navegador
      // Ela aceita três parâmetros: o estado (um objeto), o título da página (pode ser null) e a URL
      history.pushState({ route }, null, route);  
    }
  }
};

// Exporta o objeto Router para que ele possa ser utilizado em outros arquivos (ex: app.js)
export default Router;