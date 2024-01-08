function registrarProduto() {
  const inputProduto = document.querySelector("#produto").value;
  const inputId = document.querySelector("#number").value;
  const confirmar = confirm("Quer salvar esse produto no seu carrinho? ");
  if (confirmar) {
    const lista = document.querySelector("#lista");
    const newLi = document.createElement("li");
    newLi.id = "produto-" + inputId;
    newLi.textContent = `
        Produto: ${inputProduto} (${inputId})
        `;
    lista.appendChild(newLi);
  }
}
function excluirProduto() {
  const remover = document.querySelector("#remover").value;
  const li = document.querySelector("#produto-" + remover);
  const confirmar = confirm("Tem certeza de que quer excluir este produto? ");
  if (confirmar) {
    document.querySelector("#lista").removeChild(li);
  }
}
