async function sum(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    return Promise.reject('Somente numbers')
  }
  return a + b  
}
const promise = sum(50,'null')
  .then((result) => console.log('O resultado é: ' + result))
  .catch((err) => console.log(err))
  