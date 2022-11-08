 var texto = document.getElementById("paragrafo").innerHTML;
 document.getElementById("paragrafo").innerHTML = "";
 var tamanho = texto.length;
 var contador = 0;

 function digitar(){
    if (contador == tamanho){
        clearInterval(digitar)
    }
    else{
        document.getElementById("paragrafo").innerHTML += texto[contador];
        contador += 1;
    }
 }
 
 setInterval(digitar, 30);