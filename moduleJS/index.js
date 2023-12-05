import { mensagem,nome,calcular,arr,obj } from "./main.js"
import valor from "./main.js"
//=====================================================
mensagem()
//=====================================================
alert(nome)
//=====================================================
alert(calcular(10,3))
//=====================================================
for(let key of arr ){
    alert(key)
}
//=====================================================
for(let cont in obj){
    alert(obj[cont])
}
//=====================================================
alert('o export default é ' + valor)