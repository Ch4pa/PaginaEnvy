// DOM 

let productosCatalogo = document.getElementById("productos")

let carritoDeCompra = document.getElementsByClassName("carrito")

let iniciarS = document.getElementsByClassName(`iniciarSesion`)

let crearSesion = document.getElementsByClassName(`crearSesion`)

let busqueda = document.getElementById(`searchBox`)

let coincidencia = document.getElementById("coincidencia")

let productosTotal = document.getElementById(`inicioMercado`)



/* function btnAlerta(){
    iniciarS.addEventListener("click", ()  => {

        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })

    })
} */

// Funcion buscar


function buscarProducto(buscado, array) {
    /* let productoEncontrado = [...array.filter((producto)=> producto.nombre.includes(buscado))] */
    let busquedaArray = array.filter(
        (ropa) => ropa.etiquetas.toLowerCase().includes(buscado.toLowerCase())
    )
    if(busquedaArray.length == 0){
        coincidencia.innerHTML = "No hay coincidencias"
    }
    else{
        coincidencia.innerHTML=""
        productosTotal.innerHTML= ""
        mostrarRopa(busquedaArray)
    }
     console.log("Ropa",busquedaArray)
     
}



// EVENTOS

busqueda.addEventListener("input", ()=> {
    buscarProducto(busqueda.value, productos)
})





// Json 

localStorage.setItem("misProductos", JSON.stringify(productos))

let getProductos = JSON.parse(localStorage.getItem("misProductos"))

console.log(getProductos)