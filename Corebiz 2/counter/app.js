document.addEventListener("DOMContentLoaded", function(){
    var botao1 = document.getElementById ("btn-dec");
    var botao2 = document.getElementById ("btn-inc");
    var valorCont = document.getElementById ("valor--counter");

    var contador = 0;

    function decrementar (){
        contador --;
        valorCont.innerHTML = contador;
    }
    
    function incrementar (){
        contador ++;
        valorCont.innerHTML = contador;
    }
    
    botao1.addEventListener("click", decrementar)
    botao2.addEventListener("click", incrementar)

})