// Try,catch,finally
function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Numbers!!!");
  }
  return a + b;
}
try {
  console.log(sum(10, 20));
  console.log(sum(18, null));
  console.log(sum(10, "zero"));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Account finalized");
}
console.log("Hello, World!");
