import { br, input as entrada, label } from "./module.js";
import { hello as ola } from "./non-inline.js";
import defaultInline from "./module.js";
console.log(ola())
console.log(label({ for: "fullname", textContent: "Nome Completo" }));
console.log(
  entrada({
    id: "fullname",
    name: "fullname",
    placeholder: "Digite seu nome completo...",
  })
);
console.log(br());

console.log(defaultInline());
