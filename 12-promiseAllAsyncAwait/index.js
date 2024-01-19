// Promise.all com async e await
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}
const numbers = [4, 9, 7, 13, 77];
async function execute() {
  const squares = await Promise.all(
    numbers.map(async (number) => {
      await wait(2);
      return number * number;
    })
  );
  console.log(squares);
}
execute();