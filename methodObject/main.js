// Object Assign (target,source)
const destino = { a: 2, b: 3 };
const origem = { b: 4, d: 5 };
const assign = Object.assign(destino, origem);
console.log(assign);

// 2

const obj = { a: 1 };
const copyObj1 = Object.assign({}, obj);
console.log(copyObj1);
console.log(obj);

// 3
const obj1 = { nome: "Gustavo" };
const obj2 = { idade: 20 };
const obj3 = { time: "Barcelona" };
const mesclar = Object.assign({}, obj1, obj2, obj3);
console.log(mesclar);

// FromEntries

const array = [["id", 2]];
const arrayToObj = Object.fromEntries(array);
console.log(arrayToObj);

// Entries

const object = {
  id: 2,
};
const objectToArray = Object.entries(object);
console.log(objectToArray);

// Keys e Values
const object1 = {
  nome: "Gustavo",
  idade: 20,
};
const keys = Object.keys(object1);
const values = Object.values(object1);
console.log(keys);
console.log(values);
