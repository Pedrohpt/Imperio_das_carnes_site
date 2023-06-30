var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");

// Abre o modal
function openModal() {
  modal.style.display = "block";
}

// Fecha o modal
function closeModal() {
  modal.style.display = "none";
}

// Fecha o modal se o clique for fora do conteúdo do modal
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Fecha o modal se o clique for fora do conteúdo do modal no caso de rolagem
modalContent.onclick = function(event) {
  event.stopPropagation();
}

function adicionarItem(item) {
    // Crie um novo elemento de lista (li)
    var li = document.createElement("li");

    // Defina o conteúdo do elemento de lista
    li.innerHTML = item;

    // Adicione um evento de clique ao elemento de lista
    li.onclick = function() {
      // Remova o item da lista quando clicado
      this.parentNode.removeChild(this);
    };

    // Adicione o elemento de lista à lista existente
    document.getElementById("lista").appendChild(li);
  }