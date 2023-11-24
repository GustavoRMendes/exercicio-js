//setTimeout

var x = 0
let timeout = setTimeout(function(){
    console.log('TESTE');
},2000);
var x = 5;

//clearTimeout

/*  if(x>0){
    console.log('passou de 0');
    clearTimeout(timeout);
}
*/

//setInterval 

let meuTempo = setInterval(function(){
    console.log('LOOP');
},500);

//clearInterval

setTimeout(function(){
    console.log("Ja deu de loop")
    clearInterval(meuTempo);
},1000);
