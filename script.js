// Função para alternar entre os modos claro e escuro
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Salva a preferência do usuário no localStorage
  const mode = html.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme-mode", mode);

  // Observação: as referências às imagens foram mantidas no código
  // para facilitar futuras implementações, mas como as imagens foram removidas
  // do HTML, este trecho não terá efeito até que as imagens sejam adicionadas

  // Path das imagens de referência:
  // Modo escuro: assets/avatar.png 
  // Modo claro: assets/avatar-light.png
}

// Verifica se há uma preferência de tema salva
document.addEventListener("DOMContentLoaded", function () {
  const savedMode = localStorage.getItem("theme-mode");
  if (savedMode === "light") {
    document.documentElement.classList.add("light");
  }

  // Atualiza o ano atual no footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Adiciona efeito de fadeIn nos elementos ao carregar a página
  const container = document.getElementById("container");
  container.style.opacity = "0";
  container.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    container.style.opacity = "1";
  }, 100);

  // Adiciona efeito de hover nos links
  const links = document.querySelectorAll(".links li a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "";
    });
  });

  // Adiciona efeito de pulsação na logo
  const logoText = document.querySelector(".logo-text");
  if (logoText) {
    setInterval(() => {
      logoText.style.boxShadow = "0 0 15px var(--brand-color)";
      setTimeout(() => {
        logoText.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
      }, 1000);
    }, 3000);
  }
});