import { array, roupas, Produto } from "./modulo.js";

array.forEach((nomes, cont) => {
  console.log(`Array ${cont}: ` + nomes);
});

roupas.forEach((produtos) => {
  if (produtos === "Blusa") {
    console.log("É uma blusa");
  } else {
    console.log("Não é blusa");
  }
});

let hambuguer = new Produto("BigMac", 13.99, 2023);
console.log(hambuguer);

