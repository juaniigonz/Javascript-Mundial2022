const divTienda = document.getElementById("tienda");
const contenedorCarrito = document.getElementById("carritoContenedor");
const btnVaciar = document.getElementById("vaciarCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const cantidad = document.getElementById("cantidad");
const precioTotal = document.getElementById("precioTotal");
const cantidadTotal = document.getElementById("cantidadTotal");
//-------------Carrito--------------//
let carrito = [];

//-----localStorage-----------

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actCarrito();
  }
});

//--------Creacion de cards-------------//

let productos = "../json/prod.json";

fetch(productos)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    datos.forEach((producto) => {
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
        agregarAlCarrito(producto);
      });
    });
  });

const agregarAlCarrito = (item) => {
  const existe = carrito.some((prod) => prod.id === item.id);

  if (existe) {
    carrito.forEach((prod) => {
      if (prod.id === item.id) {
        prod.cantidad++;
      }
    });
  } else {
    carrito.push(item);
  }
  actCarrito();
};

// ------------Eliminar del carrito----------//

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);
  carrito.splice(carrito.indexOf(item), 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actCarrito();
};
//---------creacion del carrito
const actCarrito = () => {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "prodEnCarrito";
    div.innerHTML = `
        <p>${prod.objeto}</p>
        <p> Precio: ${prod.precio}</p>
        <p> Cantidad : <span id="cantidad"> ${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btnEliminar"><i class="fas fa-trash-alt"></i></button>
        `;

    contenedorCarrito.appendChild(div);

    localStorage.setItem("carrito", JSON.stringify(carrito));
  });

  contadorCarrito.innerText = carrito.length;
  //-------------Precio final
  precioTotal.innerText = carrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );
};

btnVaciar.addEventListener("click", () => {
  carrito.length = 0;
  localStorage.removeItem("carrito");
  actCarrito();
});

// finalizar compra
const notificacion = document.getElementById("build");

notificacion.addEventListener("click", () => {
  Swal.fire({
    title: "Compra realizada con exito, vuelva pronto!",
    icon: "success",
    confirmButtonText: "Aceptar",
    confirmButtonColor: "#ff4e50",
  });
  carrito.length = 0;
  localStorage.removeItem("carrito");
  actCarrito();
  finalizarPago.classList.toggle('pagoAct')
});
