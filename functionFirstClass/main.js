// First-class Function

function hello() {
  return "Hello, ";
}

function mensagem(funcaoHello, nome) {
  console.log(funcaoHello() + nome);
}

mensagem(hello, "Gustavo");
