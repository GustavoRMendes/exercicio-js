const result = document.querySelector("#result");
export default function calcular() {
    // Verifica se a conta está correta!
    result.value = "ERROR";
    result.classList.add("error");
      
    // se nao o valor e a classe vão permanecer
    const resultado = eval(input.value); // Eval === AVALIA O CÓDIGO
    result.value = resultado;
    
    // se sim continua e removemos a classe e o valor de erro
    resultado.value = result;
    result.classList.remove("error");
  }