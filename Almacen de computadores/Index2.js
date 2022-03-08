
let contador = localStorage.getItem("Ncomputadores");
document.getElementById("input").value=contador;

let boton = document.getElementById('calcular');
    boton.addEventListener('click', function (){
    let input = document.getElementById("input").value;
    valorCompras = input * 820000;
    document.getElementById("valor-compras").innerHTML=valorCompras;

if(valorCompras>=1640000 && valorCompras<=3280000){
    valorDescuento =((valorCompras*15)/100)
    let descuento=" SU COMPRA TIENE UN DESCUENTO DEL 15%"
    document.getElementById("descuento").innerHTML= descuento;
    document.getElementById("Total").innerHTML=valorCompras-valorDescuento;

}else if(valorCompras>3280000 && valorCompras<=6560000){
    valorDescuento =((valorCompras*25)/100)
    let descuento=" SU COMPRA TIENE UN DESCUENTO DEL 25%"
    document.getElementById("descuento").innerHTML= descuento;
    document.getElementById("Total").innerHTML=valorCompras-valorDescuento;

}else if(valorCompras>6560000 && valorCompras<=9840000){
    valorDescuento =((valorCompras*35)/100)
    let descuento=" SU COMPRA TIENE UN DESCUENTO DEL 35%"
    document.getElementById("descuento").innerHTML= descuento;
    document.getElementById("Total").innerHTML=valorCompras-valorDescuento;

}else{
    let descuento=" SU COMPRA NO TIENE UN DESCUENTO"
    document.getElementById("descuento").innerHTML= descuento;
    document.getElementById("Total").innerHTML=valorCompras;
}

});

function agrupar (){
    let ocultar = document.getElementById("ocultar")
    ocultar.style.display="none"
}