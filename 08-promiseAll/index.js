function sum(a,b){
  return new Promise((resolve,reject) => {
    if(isNaN(b) || isNaN(b)){
      reject('ERRO,SOMENTE NUMBER')
    }else{
      resolve(a + b)
    }
  })
}
function subtract(a,b){
  return new Promise((resolve,reject) => {
    if(isNaN(a) || isNaN(b)){
      reject('ERRO,SOMENTE NUMBER')
    }else{
      resolve(a - b)
    }
  })
}
const promise1 = sum(50,50)
  .then((result) => console.log('O resultado é: ' + result))
  .catch((err) => console.log(err))
const promise2 = subtract(150,50)
  .then((result) => console.log('O resultado é: ' + result))
  .catch((err) => console.log(err.message))
Promise.all([promise1,promise2])