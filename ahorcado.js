document.getElementById("input-nueva-palabra").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("input-nueva-palabra");
  const expr = new RegExp("[^A-Za-z]", 'g')
  x.value = x.value.toUpperCase().replace(expr, "");
}

var botonpalabra = document.querySelector("#nueva-palabra");
var botoniniciar = document.querySelector("#iniciar-juego");
var lista = ["VECES", "EMBARGO", "PARTIDO", "ESPERPENTO", "SISTEMAS", "PUNTO", "NUESTRO", "CAMPO", "SALIDA", "INFLUJO", "SOTERRADO"];
var palabra = ""

var canvas = document.getElementById("ahorcado");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 3
var arraycadena = []
var arrayobjetivo = []
var juego = false;
var listacaracteres = "";
var cadenachueca = "";
var contadorjuego = 0;
var arraycadena = []
var arrayobjetivo = []
var juego = false;
var listacaracteres = "";
var cadenachueca = "";
var contadorjuego = 0;
const maximointento = 6;

function reinicia(){
    palabra = ""
    arraycadena = []
    arrayobjetivo = [] 
    juego = false;
    listacaracteres = "";
    cadenachueca = "";
    contadorjuego = 0;
    arraycadena = []
    arrayobjetivo = []
    listacaracteres = "";
    cadenachueca = "";
    contadorjuego = 0;
}


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


botoniniciar.addEventListener("click",function(event){
    event.preventDefault();
    
    document.onkeydown= teclas;

    palabra = palabraAleatoria(lista);
    console.log(lista);
    juego=true;
    window.scroll({
        top: 700,
        left: 100,
        behavior: 'smooth'
    });
    ctx.beginPath();
    ctx.moveTo(70,700);
    ctx.lineTo(30,740);
    ctx.lineTo(110,740);
    ctx.lineTo(70,700);
    ctx.lineTo(70, 400);
    ctx.lineTo(200, 400);
    ctx.lineTo(200, 440);

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

function pintarletras(){
    console.log("entre");
    ctx.fillStyle="blue";
    for (var i = 0 ; i< arrayblanco.length;i++){
        ctx.font="bold italic 25px arial";
        ctx.fillText(arrayblanco[i], 130+i*40, 700);
    }
    
}

function pintarahorcado(numero){
    console.log(numero);
    ctx.fillStyle="green";
    ctx.font="bold italic 25px arial";
    ctx.fillText(cadenachueca, 400, 430);
    if (numero == 1){
        ctx.moveTo(220, 460);
        ctx.arc(200, 460, 20,0, 2 * Math.PI);
        ctx.moveTo(200, 460);
    } else if (numero==2){
        ctx.moveTo(200, 480);
        ctx.lineTo(200, 580);
    } else if (numero==3){
        ctx.moveTo(200, 500);
        ctx.lineTo(150, 450);
    } else if (numero==4){
        ctx.moveTo(200, 500);
        ctx.lineTo(250, 450);
    } else if (numero==5){
        ctx.moveTo(200, 580);
        ctx.lineTo(150, 650);
    } else if (numero==6){
        ctx.moveTo(200, 580);
        ctx.lineTo(250, 650);
    }
    ctx.strokeStyle = "#f00";
    ctx.stroke();
}

function final(){
    setTimeout(function() {
        window.scroll(0,0);
        ctx.width = ctx.width;
        reiniciar();
    }, 2000);
}

function teclas(event){
    const expr = new RegExp("[^A-Za-z]", 'g')
    var key_press = String.fromCharCode(event.keyCode).toUpperCase().replace(expr, "");
    var contador = 0;
    console.log(key_press);
    console.log(key_press);      
    console.log(listacaracteres.search(key_press));      
    if (listacaracteres.search(key_press) == -1){
        listacaracteres += key_press;
        var acierto = false;
        for (var i in arraycadena){
            if (arraycadena[i] == key_press){
                arrayblanco[i] = key_press;
                acierto = true;
            }
        }
        if (! acierto ){
            console.log("ahorcado");
            contadorjuego ++;
            cadenachueca += key_press;
            pintarahorcado(contadorjuego);           
        }else{
            console.log(arrayblanco);
            pintarletras(contador);
        }
        console.log(arraycadena.join(""));
        console.log(arrayblanco.join(""));
        if (arrayblanco.join("") == arraycadena.join("")){
            console.log("ganaste se termino finito");
            ctx.fillStyle="black";
            ctx.font="bold italic 25px arial";
            ctx.fillText("Ganaste!", 200, 600);
            setTimeout(function() {
                window.scroll(0,0);
                location.reload( );
            }, 2000);
        }
        if (contadorjuego >= maximointento){
            ctx.fillStyle="red";
            ctx.font="bold italic 25px arial";
            ctx.fillText("Perdiste!  :(", 200, 600);
            setTimeout(function() {
                window.scroll(0,0);
                on.reload( );
            }, 2000);
        }
    }   
}
