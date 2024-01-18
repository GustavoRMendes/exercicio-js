function showPromise(){
  return new Promise((resolve,reject)=> {
    console.log("Iniciando...")
    if(false){
      reject('Motivo: erro')
    }else{
      resolve('Resultado da promise')
    }
  })
}
showPromise()
  .then(result => console.log("O resultado foi " + result))
  .catch(err => console.log("O motivo do erro foi: " + err))
  .finally(() => console.log("Promise finalizada"))