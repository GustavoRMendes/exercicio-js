let rowIndex = 0;
let idRow = 0
let expIndex = 0;
let expId = 0;
const formulario = document.querySelector("#form");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
function criarLabel(texto, htmlFor) {
  const label = document.createElement("label");
  label.innerHTML = texto;
  label.htmlFor = htmlFor;
  return label;
}
function criarInput(id, value, name, type = "text") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  return input;
}
const addTech = document.querySelector("#addTech").addEventListener("click",() => {
  const ul = document.querySelector("#techs");
  const buttonRemove = document.createElement("button")
  const lista = document.createElement("li");
  const labelTech = criarLabel("Nome da Tecnologia: ", "tech-" + rowIndex);
  const inputTech = criarInput(
    "tech-" + rowIndex,
    null,
    "tecnologia-" + rowIndex
  );
  lista.append(labelTech, inputTech);
  rowIndex += 1;
  const labelExperiencia1 = criarLabel(
    " Experiência: ", 
    "experiencia-" + expId //experiencia-0
  );
  const inputRadio1 = criarInput(
    "radio-" + idRow,  //radio-0
    null,
    "experiencia-" + expId, //experiencia-0
    "radio"
  );
  const labelRadio1 = criarLabel("0-2 anos", "radio-" + idRow); //radio-0
  
  ++idRow;
  const inputRadio2 = criarInput(
    "radio-" + idRow, //radio-1
    null,
    "experiencia-" + expId, //experiencia-0
    "radio"
  );
  const labelRadio2 = criarLabel("3-4 anos", "radio-" + idRow); //radio-1
  
  ++idRow ;
  const inputRadio3 = criarInput(
    "radio-" + idRow, //radio-2
    null,
    "experiencia-" + expId, //experiencia-0
    "radio"
  );
  const labelRadio3 = criarLabel("5+ anos ", "radio-" + idRow); //radio-2
  buttonRemove.textContent = "Remover Tecnologia"
  lista.append(
    labelExperiencia1,
    inputRadio1,
    labelRadio1,
    inputRadio2,
    labelRadio2,
    inputRadio3,
    labelRadio3,
    buttonRemove
    );
    buttonRemove.addEventListener("click",(e) => {
      e.preventDefault()
      ul.removeChild(lista)
      
    })
    ul.append(lista);
    const btnCadastrar = document.querySelector("#buttonCadastrar").addEventListener("click",() => {
      const radioButtons = document.querySelectorAll('input[type="radio"][name^="experiencia-" ]' );
  let experienciaSelecionada = "";

  radioButtons.forEach((radio) => {
    if (radio.checked) {
      experienciaSelecionada = radio.labels[0].textContent; // Obtém o texto da label associada ao radio selecionado
    }
  });

  alert(`
         Nome: ${document.querySelector("#iname").value} 
         Tecnologia: ${inputTech.value}
         Experiência: ${experienciaSelecionada}`);
});
expId+=1
idRow++
    })


 