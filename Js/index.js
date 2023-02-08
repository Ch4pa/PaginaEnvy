// DOM 

let productosCatalogo = document.getElementById("productos")
console.log(productosCatalogo)

let carritoDeCompra = document.getElementsByClassName("carrito")
console.log(carritoDeCompra)

let iniciarS = document.getElementsByClassName(`iniciarSesion`)
console.log(iniciarS)

let crearSesion = document.getElementsByClassName(`crearSesion`)
console.log(crearSesion)

let busqueda = document.getElementById(`searchBox`)
console.log(busqueda)

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
        (ropa) => ropa.nombre.toLowerCase().includes(buscado)
    )
    console.log(busquedaArray)
    mostrarRopaIndex(busquedaArray)
}

// EVENTOS

busqueda.addEventListener("input", ()=> {
    buscarProducto(busqueda.value, productos)
    console.log(busqueda.value)
})



// Json 

localStorage.setItem("misProductos", JSON.stringify(productos))

let getProductos = JSON.parse(localStorage.getItem("misProductos"))

console.log(getProductos)