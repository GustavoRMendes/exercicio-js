const dataButton = document.querySelector("#dataBtn")
const input = document.querySelector("#inputTxt")
dataButton.addEventListener("click",() => {
    const data = input.dataset.somethingElse 
    console.log(data)
})

const btnValue = document.querySelector("#valueInput")

btnValue.addEventListener("click",() => {
    input.value = "Ola"
    console.log(input.value)
    const get = input.getAttribute("value")
    console.log(get)
})

const tipo = document.querySelector("#tipo").addEventListener("click",() => {
  // input.type =  input.type == "text" ? "radio": "text"
   input.type =  input.type == "text" ? "checkbox": "text"
})


const place = document.querySelector("#place").addEventListener("click",() => {
    input.placeholder = input.placeholder === ""? "Digite" : ""

})

const disable = document.querySelector("#disable").addEventListener("click",() => {
     input.setAttribute("disabled","disabled")
     
})