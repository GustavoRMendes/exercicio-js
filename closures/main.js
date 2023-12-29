function init() {
  var x = 5;
  function somar() {
    let y = 2;
    console.log(x + y);
  }
  return somar();
}
const myFunction = init();
console.log(myFunction);
