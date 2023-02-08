let tipo

// Class Constructor

class Ropa {
    constructor(nombre, color, talle, precio, imagen) {

        this.nombre = nombre,
            this.color = color,
            this.talle = talle,
            this.precio = precio,
            this.imagen = imagen

    }
    mostrarInfo() {
        console.log(`${this.nombre}, ${this.color}, ${this.talle}, ${this.precio}, ${this.imagen}`)
    }
}



// Crear Productos

const buzo1 = new Ropa("buzo Black", "egro", "M", "$5000", `../Assets/imagenes/buzo2.png`);
const buzo2 = new Ropa("buzo Grey", "gris", "M", "$5000", "../Assets/imagenes/buzo-gris.png");
const buzo3 = new Ropa("buzo Monitor", "gris y negro", "M", "$5000", "../Assets/imagenes/buzo3.png");
const buzo4 = new Ropa("buzo Meteorite", "negro", "M", "$5000", "../Assets/imagenes/buzo4.png");
const buzo5 = new Ropa("buzo BZ", "negro", "M", "$5000", "../Assets/imagenes/buzo5.png");
const buzo6 = new Ropa("buzo PQ", "negro", "M", "$5000", "../Assets/imagenes/buzo6.png");
const remera1 = new Ropa("remera lf", "blanca", "M", `$5000`, "../Assets/imagenes/Remera1.png");
const remera2 = new Ropa("remera RT", "negra", "M", `$5000`, "../Assets/imagenes/Remera.png");
const remera3 = new Ropa("remera ST", "blanca", "M", `$5000`, "../Assets/imagenes/Remera3.png");
const remera4 = new Ropa("remera WV", "negra", "M", `$5000`, "../Assets/imagenes/remeraAurora-removebg-preview.png");
const remera5 = new Ropa("remera NB", "blanca", "M", `$5000`, "../Assets/imagenes/BlancaEnvyCirculo.png");
const remera6 = new Ropa("remera JK", "negra", "M", `$5000`, "../Assets/imagenes/Remera-Negra-logomedio.png")

const productos = [buzo1, buzo2, buzo3, buzo4, buzo5, buzo6, remera1, remera2, remera3, remera4, remera5, remera6]
const inicioRopa = [buzo1, remera1, buzo2, remera2, buzo3, remera3,]
const remeras = [...productos.filter((producto) => producto.nombre.includes(`remera`))]
const buzos = [...productos.filter((producto) => producto.nombre.includes(`buzo`))]




// Mostrar ropa Index

function mostrarRopaIndex(array) {
    let productosInicio = document.getElementById(`inicioMercado`)
    if (window.location.href.includes(`index`)) {
        for (let ropa of array) {
            let nuevoDivRopa = document.createElement("div")
            nuevoDivRopa.innerHTML =
                `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
        </div>`
            productosInicio.appendChild(nuevoDivRopa)
        }
    }
}
mostrarRopaIndex(inicioRopa)

// Mostrar Buzos

function mostrarRopaBuzos(array) {
    if (window.location.href.includes(`buzo`)) {
        console.log(window.location.href)
        let productosBuzos = document.getElementById(`buzosMercado`)
        for (let ropa of array) {
            let nuevoDivRopa = document.createElement("div")
            nuevoDivRopa.innerHTML =
                `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
        </div>`
            productosBuzos.appendChild(nuevoDivRopa)
        }
    }
}
mostrarRopaBuzos(buzos)

// Mostrar remeras
function mostrarRopaRemeras(array) {
    if (window.location.href.includes(`remera`)) {

        let productosRemeras = document.getElementById(`remerasMercado`)
        for (let ropa of remeras) {
            let nuevoDivRopa = document.createElement("div")
            nuevoDivRopa.innerHTML =
                `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
    <button class="agregarCarrito"> Agregar Carrito</button>
        </div>`
            productosRemeras.appendChild(nuevoDivRopa)
        }
    }
}
mostrarRopaRemeras(remeras)