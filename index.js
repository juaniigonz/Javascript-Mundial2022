//---------Funcion inicial

function pregInicial(){
  let direccion = prompt("desea comprar o cambiar figuritas?")
  if(direccion.toLowerCase() == "comprar"){
    let respuestaDir = "Muy bien, ingrese la cantidad de paquetes que desea" 
    alert(respuestaDir)
    ventaFig()
  }
  else if(direccion.toLowerCase() == "cambiar"){
    preguntaFig()
  }
  else if (direccion.toLowerCase() == "no"){
    return
  }
  else alert("Por favor, responder comprar o cambiar")
  pregInicial()
}
pregInicial()

//----------------Funcion de Cambio
function preguntaFig() {
  let pregunta = prompt("tenes figuritas para cambiar? rta si o no");
  switch (pregunta.toLowerCase()) {
    case "si":
      let respuesta = "Perfecto, cuales tenes?";
      alert(respuesta);
      cambioFig();
      break;
    case "no":
      let respuestaNo = "Muy bien, volve cuando tengas alguna";
      alert(respuestaNo);
      break;
    default:
      alert("Por favor responder con si o no");
      preguntaFig();
      break;
  }
}

function cambioFig() {
  let figuritaNum = prompt("introducir el numero de la fig que desea cambiar");

  if (figuritaNum >= 639) {
    alert("el album tiene solo 638 figuritas");
    cambioFig();
  } else alert("su figurita fue ingresada correctamente");
  let figIng = prompt("desea ingresar otra mas? rta si o no");
  if (figIng.toLowerCase() == "si") {
    cambioFig();
  } else alert("vuelve cuando tengas mas");
}

//--------- Venta de Figuritas
function ventaFig(){
  let cantPaq = prompt("cuantos paquetes desea comprar? Responder con numero")
  let i = 150
  let precioFinal = cantPaq * i
  alert(`El total a pagar seria $ ${precioFinal}`);
}

// Fixture Mundial

const grupoA = [{ pais:"Qatar" , rankingFIFA: 48},
                { pais:"Ecuador" , rankingFIFA: 44},
                { pais:"Senegal" , rankingFIFA: 18},
                { pais:"Holanda" , rankingFIFA: 8}];

const grupoB = [{ pais:"Inglaterra" , rankingFIFA:5},
                { pais:"Iran" , rankingFIFA: 22},
                { pais:"Estados Unidos" , rankingFIFA: 14},
                { pais:"Gales" , rankingFIFA:19}];

const grupoC = [{ pais:"Argentina" , rankingFIFA: 3},
                { pais:"Arabia Saudita" , rankingFIFA: 53},
                { pais:"Mexico" , rankingFIFA: 12},
                { pais:"Polonia" , rankingFIFA: 26}];

const grupoD = [{ pais:"Francia" , rankingFIFA: 4},
                { pais:"Australia" , rankingFIFA:39},
                { pais:"Dinamarca" , rankingFIFA: 10},
                { pais:"Tunez" , rankingFIFA: 30}];

const grupoE = [{ pais:"Espana" , rankingFIFA: 6},
                { pais:"Costa Rica" , rankingFIFA: 34},
                { pais:"Alemania" , rankingFIFA: 11},
                { pais:"Japon" , rankingFIFA: 24}];

const grupoF = [{ pais:"Belgica" , rankingFIFA: 2},
                { pais:"Canada" , rankingFIFA: 43},
                { pais:"Marruecos" , rankingFIFA: 23},
                { pais:"Croacia" , rankingFIFA: 15}];

const grupoG = [{ pais:"Brasil" , rankingFIFA: 1},
                { pais:"Serbia" , rankingFIFA: 25},
                { pais:"Suiza" , rankingFIFA: 16},
                { pais:"Camerun" , rankingFIFA: 38}];
      
const grupoH = [{ pais:"Portugal" , rankingFIFA: 9},
                { pais:"Ghana" , rankingFIFA: 60},
                { pais:"Uruguay" , rankingFIFA: 13},
                { pais:"Corea del Sur" , rankingFIFA: 28}];
        