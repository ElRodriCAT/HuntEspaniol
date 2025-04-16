async function includeComponent(id, url) {
    const container = document.getElementById(id);
    const response = await fetch(url);
    const content = await response.text();
    container.innerHTML = content;
  }
  
  // Reemplazar "header-container" y "footer-container" en el HTML
  window.addEventListener("DOMContentLoaded", () => {
    includeComponent("header-container", "../componentes/header.html");
    includeComponent("footer-container", "../componentes/footer.html");
  });
  