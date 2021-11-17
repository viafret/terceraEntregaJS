//Definición clase objeto mueble que permite identificarlo, darle precio y verificar si dispone de accesorios
class Mueble {
  constructor(id, nombre, precio, cantidad, stock, accesorios) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.accesorios = accesorios;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarPrec() {
    alert(this.nombre + " cuesta $ " + this.precio + " con IVA incluido");
  }
  mostrarAcc() {
    alert(this.nombre + " " + this.accesorios + " puede agregar accesorios: ");
  }
}

let mueble1 = new Mueble(1, "ALACENA", 9000, 0, 20, "S");
let mueble2 = new Mueble(2, "RACKTV", 10000, 0, 20, "N");
let mueble3 = new Mueble(3, "PLACARD", 20000, 0, 20, "S");

let mueblesDisp = [mueble1, mueble2, mueble3];

let carritoMuebles = [];

class Accesorio {
  constructor(id, nombre, color, precio) {
    this.id = id;
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;
  }
}

let accesorio1 = new Accesorio(1, "Puerta", "blanco", 1500);
let accesorio2 = new Accesorio(2, "Estante", "blanco", 1000);
let accesorio3 = new Accesorio(3, "Rueda", "negro", 300);

let accesoriosDisp = [accesorio1, accesorio2, accesorio3];

const aCant = [0, 0, 0];

let accesoriosAgregados = [];

class Compra {
  constructor(muebles, cantidad, total) {
    this.muebles = muebles;
    this.cantidad = cantidad;
    this.total = total;
  }
  showProducto() {
    console.log("Ha seleccionado " + this.cantidad + " " + this.mueble);
  }
  showAccesorio() {
    console.log("Agregó " + this.accesorio + " accesorios");
  }
}

$(() => {
  $(".lista__productos--botonAgregar").click(seleccion);
});

$(() => {
  $(".lista__accesorios--botonAgregar").click(definAcc);
});

$(() => {
  $(".lista__productos--botonEliminar").click(eliminarProd);
});
