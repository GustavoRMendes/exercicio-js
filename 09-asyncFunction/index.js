async function sum(a,b){
  return a + b  
}
const promise1 = sum(50,50)
  .then((result) => console.log('O resultado é: ' + result))
  .catch((err) => console.log(err))
  