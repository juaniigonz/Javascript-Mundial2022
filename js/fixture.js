// Fixture Mundial

const grupoA = [
  { pais: "Qatar" , rankFIFA: 48},
  { pais: "Ecuador" , rankFIFA: 44},
  { pais: "Senegal" , rankFIFA: 18},
  { pais: "Holanda" , rankFIFA: 8},
];

const grupoB = [
  { pais: "Inglaterra" , rankFIFA: 5},
  { pais: "Iran" , rankFIFA: 27},
  { pais: "Estados Unidos" , rankFIFA: 14},
  { pais: "Gales" , rankFIFA:  19},
];

const grupoC = [
  { pais: "Argentina" , rankFIFA: 3},
  { pais: "Arabia Saudita" , rankFIFA: 53},
  { pais: "Mexico" , rankFIFA: 12},
  { pais: "Polonia" , rankFIFA: 26},
];

const grupoD = [
  { pais: "Francia" , rankFIFA: 4},
  { pais: "Australia" , rankFIFA: 39},
  { pais: "Dinamarca" , rankFIFA: 10},
  { pais: "Tunez" , rankFIFA: 30},
];

const grupoE = [
  { pais: "Espana" , rankFIFA: 6},
  { pais: "Costa Rica" , rankFIFA: 34},
  { pais: "Alemania" , rankFIFA: 11},
  { pais: "Japon" , rankFIFA: 24},
];

const grupoF = [
  { pais: "Belgica" , rankFIFA: 2},
  { pais: "Canada" , rankFIFA: 43},
  { pais: "Marruecos" , rankFIFA: 23},
  { pais: "Croacia" , rankFIFA: 15},
];

const grupoG = [
  { pais: "Brasil" , rankFIFA: 1},
  { pais: "Serbia" , rankFIFA: 25},
  { pais: "Suiza" , rankFIFA: 16},
  { pais: "Camerun" , rankFIFA: 38},
];

const grupoH = [
  {id:1, pais: "Portugal" , rankFIFA: 9},
  {id:2, pais: "Ghana" , rankFIFA: 60},
  {id:3, pais: "Uruguay" , rankFIFA: 13},
  {id:4, pais: "Corea del Sur" , rankFIFA: 28},
];


grupoA.sort((a,b) =>{
  if (a.rankFIFA>b.rankFIFA){
    return 1;
  }
  if (a.rankFIFA<b.rankFIFA){
    return -1;
  }
  return 0;
});
grupoA.pop()
grupoA.pop()
//--------
grupoB.sort((a,b) =>{
  if (a.rankFIFA>b.rankFIFA){
    return 1;
  }
  if (a.rankFIFA<b.rankFIFA){
    return -1;
  }
  return 0;
});
grupoB.pop()
grupoB.pop()
//------
grupoC.sort((a,b) =>{
  if (a.rankFIFA>b.rankFIFA){
    return 1;
  }
  if (a.rankFIFA<b.rankFIFA){
    return -1;
  }
  return 0;
});
grupoC.pop()
grupoC.pop()
//----------
grupoD.sort((a,b) =>{
  if (a.rankFIFA>b.rankFIFA){
    return 1;
  }
  if (a.rankFIFA<b.rankFIFA){
    return -1;
  }
  return 0;
});
grupoD.pop()
grupoD.pop()
//-----------
grupoE.sort((a,b) =>{
  if (a.rankFIFA>b.rankFIFA){
    return 1;
  }
  if (a.rankFIFA<b.rankFIFA){
    return -1;
  }
  return 0;
});
grupoE.pop()
grupoE.pop()
//---------
grupoF.sort((a,b) =>{
  if (a.rankFIFA>b.rankFIFA){
    return 1;
  }
  if (a.rankFIFA<b.rankFIFA){
    return -1;
  }
  return 0;
});
grupoF.pop()
grupoF.pop()
//------------
grupoG.sort((a,b) =>{
  if (a.rankFIFA>b.rankFIFA){
    return 1;
  }
  if (a.rankFIFA<b.rankFIFA){
    return -1;
  }
  return 0;
});
grupoG.pop()
grupoG.pop()
//-----------
grupoH.sort((a,b) =>{
  if (a.rankFIFA>b.rankFIFA){
    return 1;
  }
  if (a.rankFIFA<b.rankFIFA){
    return -1;
  }
  return 0;
});
grupoH.pop()
grupoH.pop()

console.log(grupoA,grupoB,grupoC,grupoD,grupoE,grupoF,grupoG,grupoH);


