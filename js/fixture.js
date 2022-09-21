// Fixture Mundial

let grupoA = [
  { pais: "Qatar" , rankFIFA: 48, puntos: 0, difGoles: 0},
  { pais: "Ecuador" , rankFIFA: 44, puntos: 0, difGoles: 0},
  { pais: "Senegal" , rankFIFA: 18, puntos: 0, difGoles: 0},
  { pais: "Holanda" , rankFIFA: 8, puntos: 0, difGoles: 0},
];

let grupoB = [
  { pais: "Inglaterra" , rankFIFA: 5, puntos: 0, difGoles: 0},
  { pais: "Iran" , rankFIFA: 27, puntos: 0, difGoles: 0},
  { pais: "Estados Unidos" , rankFIFA: 14, puntos: 0, difGoles: 0},
  { pais: "Gales" , rankFIFA:  19, puntos: 0, difGoles: 0},
];

let grupoC = [
  { pais: "Argentina" , rankFIFA: 3, puntos: 0, difGoles: 0},
  { pais: "Arabia Saudita" , rankFIFA: 53, puntos: 0, difGoles: 0},
  { pais: "Mexico" , rankFIFA: 12, puntos: 0, difGoles: 0},
  { pais: "Polonia" , rankFIFA: 26, puntos: 0, difGoles: 0},
];

let grupoD = [
  { pais: "Francia" , rankFIFA: 4, puntos: 0, difGoles: 0},
  { pais: "Australia" , rankFIFA: 39, puntos: 0, difGoles: 0},
  { pais: "Dinamarca" , rankFIFA: 10, puntos: 0, difGoles: 0},
  { pais: "Tunez" , rankFIFA: 30, puntos: 0, difGoles: 0},
];

let grupoE = [
  { pais: "Espana" , rankFIFA: 6, puntos: 0, difGoles: 0},
  { pais: "Costa Rica" , rankFIFA: 34, puntos: 0, difGoles: 0},
  { pais: "Alemania" , rankFIFA: 11, puntos: 0, difGoles: 0},
  { pais: "Japon" , rankFIFA: 24, puntos: 0, difGoles: 0},
];

let grupoF = [
  { pais: "Belgica" , rankFIFA: 2, puntos: 0, difGoles: 0},
  { pais: "Canada" , rankFIFA: 43, puntos: 0, difGoles: 0},
  { pais: "Marruecos" , rankFIFA: 23, puntos: 0, difGoles: 0},
  { pais: "Croacia" , rankFIFA: 15, puntos: 0, difGoles: 0},
];

let grupoG = [
  { pais: "Brasil" , rankFIFA: 1, puntos: 0, difGoles: 0},
  { pais: "Serbia" , rankFIFA: 25, puntos: 0, difGoles: 0},
  { pais: "Suiza" , rankFIFA: 16, puntos: 0, difGoles: 0},
  { pais: "Camerun" , rankFIFA: 38, puntos: 0, difGoles: 0},
];

let grupoH = [
  { pais: "Portugal" , rankFIFA: 9, puntos: 0, difGoles: 0},
  { pais: "Ghana" , rankFIFA: 60, puntos: 0, difGoles: 0},
  { pais: "Uruguay" , rankFIFA: 13, puntos: 0, difGoles: 0},
  { pais: "Corea del Sur" , rankFIFA: 28, puntos: 0, difGoles: 0},
];

// const sortFunction = (a,b) => a.rankFIFA - b.rankFIFA;

// grupoH.sort(sortFunction);
// grupoH.pop()
// grupoH.pop()

// console.log(grupoA,grupoB,grupoC,grupoD,grupoE,grupoF,grupoG,grupoH);

let eq1 = document.getElementById("goleseq1")
let eq2 = document.getElementById("goleseq2")

function puntos(){
  if(eq1 > eq2) eq1.puntos +=3

  else if( eq1 == eq2 ) eq1.puntos+=1, eq2.puntos+=1

  else(eq2+=3)
}
console.log(puntos)




