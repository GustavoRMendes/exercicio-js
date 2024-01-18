// Promises
function execute(){
  return new Promise((resolve)=>{
    console.log("Iniciando a promessa...")
    setTimeout(() => {
      console.log("Resolvendo")
      resolve('resultado')
    }, 1000);
})
}
const executPromise = execute()
console.log(executPromise)
setTimeout(() => {
  console.log(executPromise)
}, 2000);


const idade = 17
const newPromise = new Promise((resolve,reject) => {
  if(idade >= 18){
    resolve("maior")
  }else{
    reject('menor')
  }
})

newPromise
  .then(result => console.log(result))
  .catch(err => console.log(err))