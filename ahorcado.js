document.getElementById("input-nueva-palabra").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("input-nueva-palabra");
  const expr = new RegExp("[^A-Za-z]", 'g')
  x.value = x.value.toUpperCase().replace(expr, "");
}

var botonpalabra = document.querySelector("#nueva-palabra");
var lista = ["VECES", "EMBARGO", "PARTIDO", "ESPERPENTO", "SISTEMAS", "PUNTO", "NUESTRO", "CAMPO"];
var palabra = ""

var canvas = document.getElementById("ahorcado");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 3
var arraycadena = []
var arrayobjetivo = []

botonpalabra.addEventListener("click",function(event){
    event.preventDefault();
    var x = document.getElementById("input-nueva-palabra");
    if (x.value.length > 0){
        lista.push(x.value);
        x.value = "";
    }
});

function palabraAleatoria(lista){
    return( lista[Math.floor(Math.random() * lista.length)] );
}


var botoniniciar = document.querySelector("#iniciar-juego");
var juego = false;
var listacaracteres = "";
var contadorjuego = 0
const maximointento = 7
botoniniciar.addEventListener("click",function(event){
    event.preventDefault();
    palabra = palabraAleatoria(lista);
    console.log(palabra);
    juego=true;
    ctx.moveTo(70,700);
    ctx.lineTo(30,740);
    ctx.lineTo(110,740);
    ctx.lineTo(70,700);
    ctx.strokeStyle = "#f00";
    ctx.stroke();
    arraycadena = Array.from(palabra);
    var blanco = "";
    var listacaracteres = "";
    console.log(palabra.length);
    for (var i = 0; i<palabra.length; i++){
        blanco +=" ";
    }
    arrayblanco = Array.from(blanco);
    console.log(arrayblanco);
    for (var i = 0; i < palabra.length ;i++){
        ctx.moveTo(130 + i * 40, 740 );
        ctx.lineTo(130 + i * 40 + 30, 740 );
        ctx.strokeStyle = "#f00";
        ctx.stroke();
    }
});

function pintarahorcado(numero){


}
document.onkeypress = function(e) {
   if (juego){
        const expr = new RegExp("[^A-Za-z]", 'g')
        var key_press = e.key.toUpperCase().replace(expr, "");
        var contador = 0;
        console.log(key_press);      
        console.log(listacaracteres.search(key_press));      
        if (listacaracteres.search(key_press) == -1){
            listacaracteres += key_press;
            var acierto = false;
            for (var i = 0; i<arraycadena.length; i++){
                if (arraycadena[i] == key_press){
                    arrayblanco[i] = key_press
                    acierto = true
                }
            }
            if (! acierto ){
                console.log("ahorcado");
                contadorjuego ++;
                
            }else{
                console.log(arrayblanco);
                
            }
            console.log(arraycadena.join(""));
            console.log(arrayblanco.join(""));
            if (arrayblanco.join("") == arraycadena.join("")){
                console.log("ganaste se termino finito")
            }
            if (contadorjuego >= maximointento){
                console.log("te acabaste cavoevela")
            }
        }   
    }
}


