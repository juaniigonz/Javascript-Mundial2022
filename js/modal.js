const contenedorModal = document.getElementsByClassName('modalContenedor')[0]
const botonAbrir = document.getElementById('btnCarrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modalCarrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modalAct')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modalAct')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modalAct')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation()
})