function addInput() {    
    const ul = document.querySelector("#inputs")
    const newLi = document.createElement("li")
    newLi.innerText = "Texto da Li  "
    newLi.className = "item-list"
    const input = document.createElement("input")
    input.type = "text"
    input.name = "inputTexto"
    input.placeholder = "Digite seu texto..."
    newLi.appendChild(input)
    ul.appendChild(newLi)
}
