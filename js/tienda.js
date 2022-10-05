let objTienda = [
  {
    id: 1,
    objeto: "Camiseta Titular Arg",
    precio: 19000,
    img: "../img/tienda/camisetaArgentinaTit.jpg",
    cantidad: 1,
  },
  {
    id: 2,
    objeto: "Camiseta Suplente Arg",
    precio: 17500,
    img: "../img/tienda/camisetaArgentinaSup.jpg",
    cantidad: 1,
  },
  {
    id: 3,
    objeto: "Campera Argentina",
    precio: 20000,
    img: "../img/tienda/camperaArgentina.jpg",
    cantidad: 1,
  },
  {
    id: 4,
    objeto: "Short Argentina",
    precio: 7500,
    img: "../img/tienda/shortArgentinaTit.jpg",
    cantidad: 1,
  },
  {
    id: 5,
    objeto: "Pelota Qatar 2022",
    precio: 8000,
    img: "../img/tienda/pelotaMundial.jpg",
    cantidad: 1,
},
  {
    id: 6,
    objeto: "Estampa del Messias",
    precio: 3000,
    img: "../img/tienda/messias.jpg",
    cantidad: 1,
},
{
    id: 7,
    objeto: "Estampa Santo Maradona",
    precio: 3000,
    img: "../img/tienda/santoDiego.jpg",
    cantidad: 1,
},
{
    id: 8,
    objeto: "Cuadro Argentina Campeon",
    precio: 15000,
    img: "../img/tienda/cuadroSeleccion.jpg",
    cantidad: 1,
},
];

const divTienda = document.getElementById("tienda");
const contenedorCarrito = document.getElementById("carritoContenedor");
const btnVaciar = document.getElementById("vaciarCarrito")
const contadorCarrito =document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById("precioTotal")
const cantidadTotal = document.getElementById('cantidadTotal')
//-------------Carrito--------------//
var carrito = [ ];

//-----localStorage-----------

document.addEventListener('DOMContentLoaded', ()=>{
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        console.log(carrito)
        actCarrito()
    }
})

//--------Creacion de cards-------------//

objTienda.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("itemTienda");
    div.innerHTML = `
    <div id="${producto.id}">
    <img src="${producto.img}" class="imgProducto">
    <div class=".especProd">
    <h3> ${producto.objeto}</h3>
    <p class="precioItem"> Precio : $ ${producto.precio} </p>
    <button id="agregar${producto.id}" class="btnAgregar"> Agregar <i class="fas fa-shopping-cart"></i></button>
    </div>
    </div>`;
    
    divTienda.appendChild(div);
    
    const boton = document.getElementById(`agregar${producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
    });
});

const agregarAlCarrito = (prodId) => {
    
    const existe = carrito.some(prod => prod.id === prodId)
    
    if(existe){
        carrito.forEach(prod=>{
            if(prod.id === prodId){
            prod.cantidad++
            }
        })
    } else{
        
        const item = objTienda.find((prod) => prod.id === prodId);
        carrito.push(item);
    }
    actCarrito();
}
// ------------Eliminar del carrito----------//

const eliminarDelCarrito = (prodId) =>{
    const item = carrito.find((prod) => prod.id === prodId)
    const i = carrito.indexOf(item)
    carrito.splice(i, 1)
    actCarrito()
}
//---------creacion del carrito
const actCarrito = () => {
    contenedorCarrito.innerHTML=""
    
    carrito.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "prodEnCarrito";
        div.innerHTML = `
        <p>${prod.objeto}</p>
        <p> Precio: ${prod.precio}</p>
        <p> Cantidad : <span id="cantidad"> ${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btnEliminar"><i class="fas fa-trash-alt"></i></button>
        `;
        
        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito',JSON.stringify(carrito))
    });
    
    contadorCarrito.innerText = carrito.length
    //-------------Precio final
    precioTotal.innerText = carrito.reduce((acc,prod) => acc + (prod.precio * prod.cantidad),0)
};




btnVaciar.addEventListener('click', ()=>{
    carrito.length = 0
    actCarrito()
})
