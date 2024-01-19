async function sum(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    return Promise.reject('Somente numbers')
  }
  return a + b  
}
async function showSum(){
  try {
    const result = await sum('50',50) 
    console.log(result)
  }catch (error) {
    console.log(error)
  }
}
console.log(showSum())