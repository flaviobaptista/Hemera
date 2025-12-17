// Atualizar o ano automaticamente
function updateYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', updateYear);