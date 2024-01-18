// sicronidade
function log(){
  console.log(2)
}
console.log(1)
log()
console.log(3)

// Assícrono
console.log(4)
setTimeout(() => {
  console.log(5)
}, 1000 * 2);
console.log(6)