const spanJogador1 = document.querySelector("#j1")
const spanJogador2 = document.querySelector("#j2")
const main = document.querySelector('main')

export {spanJogador1,spanJogador2,main}
export function activePlayer(){
    let vezJogador = Number(prompt("Quem vai começar? \n 1- Jogador 1 \n 2- Jogador 2"));
    if(vezJogador === 1){
        spanJogador1.classList.add("active")
        document.querySelector("#start").setAttribute("disabled","disabled")
        let btn1 = document.querySelector("#bt1").addEventListener("click",() =>{btn1.setProperty("innerText","top") })
    }else{
        spanJogador2.classList.add("active")
        document.querySelector("#start").setAttribute("disabled","disabled")
    }
    
}
