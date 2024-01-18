function age(age){
  return new Promise((resolve,reject) => {
    if(isNaN(age)){
      reject(new Error('somente number'))
    }else{
      resolve(age)
    }
  })
}
age(18).then((result) => console.log('O resultado é ' + result))    
  .catch((error) => console.log('O erro foi: ' + error))
  .finally(() => console.log('Promessa finalizada!'))