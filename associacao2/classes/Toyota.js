class Toyota{
    constructor(descricao,preco){
        this.descricao = descricao
        this.preco = preco
    }
    descripitionOfCar(){
        return `Descrição: ${this.descricao} | Preço: ${this.preco}`
    }
}

module.exports = Toyota