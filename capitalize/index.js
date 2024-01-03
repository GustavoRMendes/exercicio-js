let texto = "OLÁ PESSOAL";
let texto2 = "ola gente"
let texto3 = "BoM dIa"

function capitalizeFirst(string){
    const result = string.toLowerCase().replace(/(?:^|\s)\S/g,function(letra){
        return letra.toUpperCase();
    })
    return result;
}
console.log(capitalizeFirst(texto))
console.log(capitalizeFirst(texto2))
console.log(capitalizeFirst(texto3))