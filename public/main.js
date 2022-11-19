/* Modal Eliminar ---------------------------------------------------------------------------------------------------------------------------------*/
let nombreEliminado = ''
const modalEliminar = document.querySelector('.modalEliminar');
const closeModalEliminar = document.querySelector('.modalEliminar__close');
const btnEliminar = document.querySelector('.btnEliminarDef');


function abrirModalEliminar() {
    modalEliminar.classList.add('modalEliminar--show');
};

closeModalEliminar.addEventListener('click', (e)=>{
    e.preventDefault();
    modalEliminar.classList.remove('modalEliminar--show');
});

window.addEventListener('click', (e) => {
    if(e.target == modalEliminar){
    modalEliminar.classList.remove('modalEliminar--show');
    }
});

btnEliminar.addEventListener('click', (e)=>{
    e.preventDefault();
    modalEliminar.classList.remove('modalEliminar--show');
});

/* Modal añadir ---------------------------------------------------------------------------------------------------------------------------------*/
const openModal = document.querySelector('.btnflot');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
const añadirLibro = document.querySelector('.botonAgregar');



openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

window.addEventListener('click', (e) => {
    if(e.target == modal){
    modal.classList.remove('modal--show');
    }
});

añadirLibro.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});


/* Sroll up---------------------------------------------------------------------------------------------------------------------------------*/
const btnVolver = document.querySelector('.btnArriba');



window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        btnVolver.classList.add("active");
    }
    else {
        btnVolver.classList.remove("active");
    }
})
    

/* Botón arriba animación ---------------------------------------------------------------------------------------------------------------------------------*/
const btnVolverAnim = document.querySelector('.bx');



openModal.addEventListener('mouseover', (e)=>{
    e.preventDefault();
    btnVolverAnim.classList.add('bx-tada');
});

openModal.addEventListener('mouseout', (e)=>{
    e.preventDefault();
    btnVolverAnim.classList.remove('bx-tada');
});

/* Funciones utilizadas por vue -------------------------------------------------------------------------------------  */

function eliminarPasoCero(id, libroEliminar){
    id2 = id;
    nombreEliminado = libroEliminar
};