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

const precios = [
  {prod: "paquete de figuritas", precio: 150},
  {prod: "album tapa blanda", precio: 750},
  {prod: "album tapa dura", precio: 1200},
]

const descuento = precios.map((elem) =>{
  return{
    prod : elem.prod,
    precio : elem.precio * 0.90
  }
})

console.log(descuento);