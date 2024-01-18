// setTimeout
console.log("Esperando...")
const setTimeoutID = setTimeout(() => {
  console.log("2 segundos...")
}, 1000 * 2);

clearTimeout(setTimeoutID) 
console.log("Passa direto")