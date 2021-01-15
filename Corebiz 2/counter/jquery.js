$(document).ready(function(){

    var contador = 0;

    $("#btn-dec").click(function(){
        --contador
       $("#valor--counter").html(contador);
     });

    $("#btn-inc").click(function(){
        ++contador
       $("#valor--counter").html(contador);
      });
})