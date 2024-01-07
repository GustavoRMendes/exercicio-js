let person = {
    nome:"Gustavo",
    idade:19,
    falar(){
        console.log("Hello, my name is " + this.nome + " e tenho " + this.idade + " anos!")
    }

}

person.falar()