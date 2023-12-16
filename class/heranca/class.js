class Dev {
    constructor (nome,idade,linguagem,area){
        this.nome = nome
        this.idade = idade
        this.linguagem = linguagem
        this.area = area
    }
    apresentacao (){
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} e trabalho como ${this.area} com a linguagem ${this.linguagem}.`);
    }
}

class FrontEnd extends Dev {
    constructor(nome,idade,linguagem,area,framework){
        super(nome,idade,linguagem,area)
        this.framework = framework
    }
} 

class BackEnd extends Dev {
    constructor(nome,idade,linguagem,area,bancoDeDados){
        super(nome,idade,linguagem,area)
        this.bancoDeDados = bancoDeDados
    }
} 

const programador1 = new FrontEnd("Gustavo",19,"JavaScript","FrontEnd","React JS" ); 

const programador2 = new BackEnd("Felipe",19,"Java","BackEnd","SQL Server");

programador1.apresentacao() 
programador2.apresentacao()

console.log(programador1)
console.log(programador2)