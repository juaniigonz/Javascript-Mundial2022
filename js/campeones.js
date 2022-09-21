// array de fotos
const array_imagenes = [

    {id: 1, ruta: '../img/campeones/uruguay1930.jpg'},

    {id: 2, ruta: '../img/campeones/italia1934.jpg'},

    {id: 3, ruta: '../img/campeones/italia1938.jpg'},

    {id: 4, ruta: '../img/campeones/uruguay1950.jpg'},

    {id: 5, ruta: '../img/campeones/alemania1954.jpg'},

    {id: 6, ruta: '../img/campeones/brasil1958.jpg'},

    {id: 7, ruta: '../img/campeones/brasil1962.jpg'},

    {id: 8, ruta: '../img/campeones/inglaterra1966.jpg'},
    
    {id: 9, ruta: '../img/campeones/brasil1970.jpg'},
    
    {id: 10, ruta: '../img/campeones/alemania1974.jpg'},

    {id: 11, ruta: '../img/campeones/argentina1978.jpg'},

    {id: 12, ruta: '../img/campeones/italia1982.jpg'},

    {id: 13, ruta: '../img/campeones/argentina1986.jpg'},

    {id: 14, ruta: '../img/campeones/alemania1990.jpg'},

    {id: 15, ruta: '../img/campeones/brasil1994.jpg'},

    {id: 16, ruta: '../img/campeones/francia1998.jpg'},

    {id: 17, ruta: '../img/campeones/brasil2002.jpg'},
    
    {id: 18, ruta: '../img/campeones/italia2006.jpeg'},
    
    {id: 19, ruta: '../img/campeones/españa2010.jpg'},
    
    {id: 20, ruta: '../img/campeones/alemania2014.jpg'},

    {id: 21, ruta: '../img/campeones/francia2018.jpg'},
];

const imagenesHTML = document.querySelector('#galeria');

for (const foto of array_imagenes) {

    imagenesHTML.innerHTML += `

        <img id=${foto.id} src="${foto.ruta}" alt="galeria de imagenes">   

    `;

}


// lightbox

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;


const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abreLightbox);
});


btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
});


const adelantaImagen = () => {
    if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);


const retrocederImagen = () => {
    if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);
