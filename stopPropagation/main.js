document.querySelector(".container").addEventListener("click", () => {
  console.log("clicou");
  
});

const divs = [...document.querySelectorAll('.cx')]

divs.map((e)=> {
    e.addEventListener('click',(evento) =>{
        evento.stopPropagation()
    })
})

