function esperar(num,callback){
    console.log(num)
    setTimeout(() => {
       callback() 
    }, 1000); 
}


function mensagem(){
    console.log( "top");
}

esperar(1,mensagem)