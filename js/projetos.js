// JavaScript para Página de Projetos

// Variáveis para controle de imagens expandidas
let imagensExpandidas = [];
let indiceAtual = 0;

// Abrir modal de projeto
function abrirModal(id) {
  document.getElementById(id).style.display = 'block';
  const modal = document.getElementById(id);
  imagensExpandidas = Array.from(modal.querySelectorAll('.modal-img')).map(img => img.src);
}

// Fechar modal de projeto
function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
  fecharImagemExpandida();
}

// Fechar modal ao clicar fora
window.onclick = function (event) {
  const modais = document.querySelectorAll('.modal');
  modais.forEach(function (modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Expandir imagem em tela cheia
function expandirImagem(img) {
  const modal = img.closest('.modal');
  imagensExpandidas = Array.from(modal.querySelectorAll('.modal-img')).map(el => el.src);
  indiceAtual = imagensExpandidas.indexOf(img.src);
  
  const expandedModal = document.getElementById('imageExpanded');
  const expandedImg = document.getElementById('expandedImage');
  
  expandedImg.src = imagensExpandidas[indiceAtual];
  expandedModal.classList.add('show');
  
  atualizarContador();
  document.addEventListener('keydown', handleKeyPress);
}

// Fechar imagem expandida
function fecharImagemExpandida() {
  const expandedModal = document.getElementById('imageExpanded');
  expandedModal.classList.remove('show');
  document.removeEventListener('keydown', handleKeyPress);
}

// Fechar ao clicar fora
function fecharAoClicarFora(event) {
  if (event.target.id === 'imageExpanded') {
    fecharImagemExpandida();
  }
}

// Próxima imagem
function proximaImagem() {
  if (indiceAtual < imagensExpandidas.length - 1) {
    indiceAtual++;
    atualizarImagemExpandida();
  }
}

// Imagem anterior
function imagemAnterior() {
  if (indiceAtual > 0) {
    indiceAtual--;
    atualizarImagemExpandida();
  }
}

// Atualizar imagem expandida
function atualizarImagemExpandida() {
  const expandedImg = document.getElementById('expandedImage');
  expandedImg.src = imagensExpandidas[indiceAtual];
  atualizarContador();
}

// Atualizar contador de imagens
function atualizarContador() {
  const counter = document.getElementById('imageCount');
  counter.textContent = (indiceAtual + 1) + ' / ' + imagensExpandidas.length;
}

// Navegar com teclado (setas e ESC)
function handleKeyPress(event) {
  if (event.key === 'ArrowRight') {
    proximaImagem();
  } else if (event.key === 'ArrowLeft') {
    imagemAnterior();
  } else if (event.key === 'Escape') {
    fecharImagemExpandida();
  }
}
