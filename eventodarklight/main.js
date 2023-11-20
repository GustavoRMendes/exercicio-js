let tela = document.querySelector("main");
let btDark = document.querySelector("#btDark");
let btLight = document.querySelector("#btLight");

btDark.addEventListener("click", function () {
  tela.classList.remove("light");
  tela.classList.add("dark");
});

btLight.addEventListener("click", function () {
  tela.classList.remove("dark");
  tela.classList.add("light");
});

function olaMundo() {
  return "OLa";
}
function olaMundo2() {
  document.write("OLA");
}
olaMundo2();
console.log(olaMundo());
