


class Ropa {
    constructor(nombre, color, precio) {

        this.nombre = nombre,
        this.color = color,
        this.precio = precio

    }
    mostrarInfo() {
        console.log(`${this.nombre}, ${this.color}, ${this.precio}`)
    }
}

// Crear Productos

const buzo1 = new Ropa("buzo Black", "egro", "$5000");
const buzo2 = new Ropa("buzo Grey", "gris", "$5000");
const buzo3 = new Ropa("buzo Monitor", "gris con negro", "$5000");
const buzo4 = new Ropa("buzo Meteorite", "negro", "$5000");
const buzo5 = new Ropa("buzo BZ", "negro", "$5000");
const buzo6 = new Ropa("buzo PQ", "negro", "$5000");
const remera1 = new Ropa("remera lf", "blanca", `$5000`);
const remera2 = new Ropa("remera RT", "negra", `$5000`);
const remera3 = new Ropa("remera ST", "blanca", `$5000`);
const remera4 = new Ropa("remera WV", "negra", `$5000`);
const remera5 = new Ropa("remera NB", "blanca", `$5000`);
const remera6 = new Ropa("remera JK", "negra", `$5000`)

const productos = [buzo1, buzo2, buzo3, buzo4, buzo5, buzo6, remera1, remera2, remera3, remera4, remera5, remera6]



function mostrarCatalogoForEach(arr){
    console.log(`Productos disponibles: `)
    productos.forEach(
        (ropaMostrar)=> {
            console.log(ropaMostrar.nombre, ropaMostrar.color, ropaMostrar.precio)
        }
    )
}

// Buscar Producto

function buscarProducto(arr) {
    let ProductoNombre = prompt(`Ingrese el tipo de producto que buscas:`)
    let resultado = productos.filter(
        (ropa) => ropa.nombre.includes(`${ProductoNombre.toLowerCase()}`)
    )
    if (resultado == undefined) {
        console.log(`${ProductoNombre} no está en stock`)

    }else {
        console.log(resultado)
    }
}





function preguntarProducto() {
    let talle
    let color
    let preguntarColor = prompt(`Estas buscando un color en especial. Ingrese si o no.`)
    if (preguntarColor.toLowerCase() == `si`) {
        let color = prompt(`Ingresa el color`);
        let talle = prompt(`Ingrese talle S, M, L, XL`);
        mostrarProducto(color, talle)
    }
    else {
        let talle = prompt(`Ingrese tu talle`);
        console.log(`Estas buscando un producto ${talle}`)
    }

    const producto = {
    color: color,
    talle: talle,
}
    console.log(producto)
}





function mostrarProducto(color, talle) {
    alert(`Estas buscando un producto ${color} y talle ${talle}`)
}

function preguntarAccesorio() {

    let accesorio = prompt(`Estas buscando un producto en especial. Ingrese Si o No.`)
    if (accesorio.toLowerCase() == `si`) {
        let accesorioIngresado = prompt(`Ingrese el producto que deseas.`);
        alert(`No tenemos ${accesorioIngresado}`)

    }

}


alert(`Bienvenido a nuestra pagina a continuacion le va aparecer el catalogo`)


let salirMenu = false
do {
    let opcionIngresada = parseInt(prompt(`Ingrese el producto que estas buscando en nuestra tienda
   1 - Remera
   2 - Buzo
   3 - Otros
   4 - Mostrar productos
   5 - Buscar productos
   0 - Salir del menu`))
    switch (opcionIngresada) {
        case 1:
            preguntarProducto()
            break
        case 2:
            preguntarProducto()
            break
        case 3:
            preguntarAccesorio()
            break
        case 4:
            mostrarCatalogoForEach()
            break
        case 5:
            buscarProducto()
            break
        case 0:
            console.log(`Gracias por visitar nuestra Tienda. Saludos!`)
            salirMenu = true
            break
        default:
            console.log("Por favor, ingrese un producto que este en la tienda")
            break
    }
} while (!salirMenu)