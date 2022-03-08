let computadores; 
let total = 0;
let valorCompras = 0;
let valorDescuento = 0;
let totalpagar = 0;

//document
//.getElementById("form")
//.addEventListener("submit", function (e) {
  //e.preventDefault();

function comp(computadores) {
    console.log(computadores);
    total = total + computadores;
    localStorage.setItem("Ncomputadores",total)
    document.getElementById("checkout").innerHTML = `Comprar (${total})` 
}

