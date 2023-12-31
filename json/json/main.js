// JSON
const json = '{"nome":"Gustavo","idade":19,"sexo":"Masculino"}';
const obj = JSON.parse(json);
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.sexo);

const objeto = {
    nome:"Gustavo",
    idade:19,
    sexo:"Masc"
}

const trans = JSON.stringify(objeto);
console.log(trans)
