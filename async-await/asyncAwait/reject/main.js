// Async Await com reject
// Usamos o try and catch para não parar o programa e sim só logar o erro!
// Se não tivessemos usado, o programa geraria um erro com a mensagem, porém travaria o programa
async function forcarErro(){
    try {
        const promessa = new Promise((reject) => {
            setTimeout(reject,1000,"valor com erro");
         })
         const result = await promessa;
         console.log(result)

    } catch (error) {
        console.log(error)
    }
}

forcarErro()