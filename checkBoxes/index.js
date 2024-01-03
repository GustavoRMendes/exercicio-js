const checkbox = document.querySelectorAll(".checkboxs")
let btn = document.querySelector("#btn")
btn.addEventListener("click", (e) =>{
    e.preventDefault();
   let itensSelecionados = 0
    checkbox.forEach(el => {
        if(el.checked){
            itensSelecionados++;
        }
    })
    console.log(itensSelecionados)
})