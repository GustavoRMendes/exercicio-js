let cont = 1;
let fatorial = 1;
let numeroPedido = prompt("Informe um  número inteiro e positivo:");
numeroPedido = Number(numeroPedido); //convertendo numeroPedido para tipo number
for(cont = 1; cont <= numeroPedido; cont++ ){
    fatorial *= cont; 
}
alert("O fatorial desse número é: " + fatorial);
