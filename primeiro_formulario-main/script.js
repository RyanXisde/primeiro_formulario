function soma(){
     
    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);
    let soma_numero = numero_um + numero_dois;

    document.getElementById('resultado').textContent = 'O resultado da soma é: ' + soma_numero;
}
function subtrai(){
    
    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);
    let subtrair_numero = numero_um - numero_dois;

    document.getElementById('resultado').textContent = 'O resultado da subtração é: ' + subtrair_numero;
}
function multiplicar(){
    let numero_um = parseInt(document.getElementById('primeiro_numero').value);
    let numero_dois = parseInt(document.getElementById('segundo_numero').value);
    let multiplicar_numero = numero_um * numero_dois;

    document.getElementById('resultado').textContent = 'O resultado da multiplicação é: ' + multiplicar_numero;
}
function divisao(){
   let numero_um = parseFloat(document.getElementById('primeiro_numero').value);
   let numero_dois = parseFloat(document.getElementById('segundo_numero').value);
   let divisao_numero = numero_um / numero_dois
 
   if (numero_dois == 0) {
     alert("Não selecione um número zero.");
     return;
}

   document.getElementById('resultado').textContent = 'O resultado da divisão é: ' + divisao_numero;
}

function maior(){
   let numero_um = parseInt(document.getElementById('primeiro_numero').value);
   let numero_dois = parseInt(document.getElementById('segundo_numero').value);

   if(numero_um>numero_dois){
     document.getElementById('resultado').textContent = "O maior número é " + numero_um;
     return;
   }else if(numero_um<numero_dois){
     document.getElementById('resultado').textContent = "O maior número é " + numero_dois;
     return;
   }else{
     document.getElementById('resultado').textContent = "Os números são iguais.";
     return;
   }
}