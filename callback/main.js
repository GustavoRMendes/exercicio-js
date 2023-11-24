//CallBacks - Funções que recebem outras Funções que são executadas em algum momento ou depois de uma ação ou rotina

function exibirNome (callback){
    let nome = 'Gustavo';
    callback(nome);
}

exibirNome((name) => {
     console.log(name);
})

//Outro exemplo

function minhaIdade(idade){
    console.log(idade);
}

function exibir(callback){
    let idade = 20;
    callback(idade);
}
exibir(minhaIdade);