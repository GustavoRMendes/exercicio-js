import calcular from "./module.js";

const input = document.getElementById("input");

export function handleButtonPress(ev) {
  const valor = ev.currentTarget.dataset.value;
  input.value += valor;
}
export function clear() {
  input.value = "";
  input.focus(); // Foca no Input depois que ele for limpado
}
export function handleType(ev) {
  ev.preventDefault();
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
  if (allowedKeys.includes(ev.key)) {
    // Se sim, pegamos o valor do input e junta com a tecla
    input.value += ev.key;
    // Return porque precisamos de outras teclas específicas
    return;
  }
  if (ev.key === "Backspace") {
    // Backspace para apagar
    input.value = input.value.slice(0, -1); // -1 penúltimo e exclui o último
  }
  if (ev.key === "Enter") {
    // Enter para captar o valor
    calcular();
  }
}
