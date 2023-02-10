let tipo

// Class Constructor

class Ropa {
    constructor(id, etiquetas,nombre, talle, precio, imagen) {
            this.id = id,
            this.etiquetas = etiquetas,
            this.nombre = nombre,
            this.talle = talle,
            this.precio = precio,
            this.imagen = imagen
    }
    mostrarInfo() {
        console.log(`${this.nombre}, ${this.color}, ${this.talle}, ${this.precio}, ${this.imagen}`)
    }
}

// Crear Productos


const buzo1 = new Ropa( "1","buzo buzos negro", "buzo Black", "M", "$5000", `../Assets/imagenes/buzo2.png`);
const buzo2 = new Ropa("2","buzo buzos gris","buzo Grey", "M", "$5000", "../Assets/imagenes/buzo-gris.png");
const buzo3 = new Ropa("3","buzo buzos gris y negro","buzo Monitor", "M", "$5000", "../Assets/imagenes/buzo3.png");
const buzo4 = new Ropa("4","buzo buzos negro","buzo Meteorite", "M", "$5000", "../Assets/imagenes/buzo4.png");
const buzo5 = new Ropa("5","buzo buzos negro","buzo BZ", "M", "$5000", "../Assets/imagenes/buzo5.png");
const buzo6 = new Ropa("6","buzo buzos negro","buzo PQ", "M", "$5000", "../Assets/imagenes/buzo6.png");
const remera1 = new Ropa("7", "remera  remeras  blanca blanco","remera lf", "M", `$5000`, "../Assets/imagenes/Remera1.png");
const remera2 = new Ropa("8", "remera  remeras  negro  negra","remera RT", "M", `$5000`, "../Assets/imagenes/Remera.png");
const remera3 = new Ropa("9", "remera remeras blanca blanco","remera ST", "M", `$5000`, "../Assets/imagenes/Remera3.png");
const remera4 = new Ropa("10", "remera remeras negro negra","remera WV", "M", `$5000`, "../Assets/imagenes/remeraAurora-removebg-preview.png");
const remera5 = new Ropa("11", "remera remeras blanca blanco","remera NB", "M", `$5000`, "../Assets/imagenes/BlancaEnvyCirculo.png");
const remera6 = new Ropa("12", "remera remeras negro negra", "remera JK", "M", `$5000`, "../Assets/imagenes/Remera-Negra-logomedio.png")

const productos = [buzo1, remera1, buzo2, remera2, buzo3, remera3, remera4, buzo4, remera5, buzo5, remera6, buzo6 ]
const inicioRopa = [buzo1, remera1, buzo2, remera2, buzo3, remera3,]
const remeras = [...productos.filter((producto) => producto.nombre.includes(`remera`))]
const buzos = [...productos.filter((producto) => producto.nombre.includes(`buzo`))]


// Mostrar ropa completa

function mostrarRopa(array) {
        let coincidencia = document.getElementById("coincidencia")
        coincidencia.innerHTML = ""
        for (let ropa of array) {
            let nuevoDivRopa = document.createElement("div")
            nuevoDivRopa.innerHTML =
                `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
    <button class="btnCarrito" id="${ropa.id}">Agregar al carrito</button>
        </div>`
            coincidencia.appendChild(nuevoDivRopa)
        }
}

// Mostrar ropa Index

function mostrarRopaIndex(array) {
    if (window.location.href.includes(`index`)) {
        let productosInicio = document.getElementById(`inicioMercado`)
        for (let ropa of array) {
            let nuevoDivRopa = document.createElement("div")
            nuevoDivRopa.innerHTML =
                `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
    <button class="btnCarrito" id="${ropa.id}">Agregar al carrito</button>
        </div>`
            productosInicio.appendChild(nuevoDivRopa)

            
        }
        // capturamos el boton
        let agregarBtn = document.getElementsByClassName(`btnCarrito`)
        for (let i = 0; i < agregarBtn.length; i++){
            //Evento para capturar
            agregarBtn[i].addEventListener("click", (e)=>{
                agregarAlCarrito(e.target.id)
            })
        }
        
        
    }
}


mostrarRopaIndex(inicioRopa)



// Mostrar Buzos

function mostrarRopaBuzos(array) {
    if (window.location.href.includes(`buzo`)) {
        let productosBuzos = document.getElementById(`buzosMercado`)
        for (let ropa of array) {
            let nuevoDivRopa = document.createElement("div")
            nuevoDivRopa.innerHTML =
                `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
    <button class="btnCarrito${ropa.nombre}">Agregar al carrito</button>
        </div>`
            productosBuzos.appendChild(nuevoDivRopa)

            let btnCarrito = document.getElementsByClassName(`.btnCarrito ${ropa.nombre}`)

            btnCarrito.addEventListener("click", ()=>{
                console.log(btnCarrito)
            })
        }
    }
}
mostrarRopaBuzos(buzos)

// Mostrar remeras
function mostrarRopaRemeras(array) {
    if (window.location.href.includes(`remera`)) {
        let productosRemeras = document.getElementById(`remerasMercado`)
        for (let ropa of array) {
            let nuevoDivRopa = document.createElement("div")
            nuevoDivRopa.innerHTML =
                `<div class="productos">
    <a href="./Pages/error.html" title="${ropa.nombre}"><img src="${ropa.imagen}" alt=" buzo negra fria liviana" title=" Buzo negra fria liviana" class="ropa"></a>
    <h3 class="productoText">${ropa.nombre}</h3>
    <span itemprop="price">${ropa.precio}</span>
    <button class="agregarCarrito"> Agregar Carrito</button>
    <button class="btnCarrito">Agregar al carrito</button>
        </div>`
            productosRemeras.appendChild(nuevoDivRopa)
        }
    }
}
mostrarRopaRemeras(remeras)


// Agregar Carrito

function agregarAlCarrito(id){

    const producto = productos.find((producto) => producto.id === id)
    
    if(localStorage.getItem(`carrito`)){
        const nuevoCarrito = [...JSON.parse(localStorage.getItem("carrito")), producto]
        localStorage.setItem( "carrito", JSON.stringify(nuevoCarrito))
    }
    else{
        localStorage.setItem( "carrito", JSON.stringify([producto]))
    }
}