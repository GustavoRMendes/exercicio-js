export default function copy(ev){
    const button = ev.currentTarget; // Valor do evento
    if (button.innerText === "Copy") {
      button.innerText = "Copied";
      button.classList.add("success");
  
      //navigator.clipboard.writeText === copia o resultado
      window.navigator.clipboard.writeText(result.value);
    } else {
      button.innerText = "Copy"; // Assim o usuário consegue copiar novamente
      button.classList.remove("success");
    }
  };