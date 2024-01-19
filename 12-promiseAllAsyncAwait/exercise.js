const lista = [2, 4, 5, 7, 8, 9];
const square = lista.map(async (number) => {
  return number * number;
});
console.log(square);
function time() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolvendo...");
    }, 2000);
  });
}
async function showTime() {
  await time()
    .then((result) => console.log(result));
}
console.log(showTime());
