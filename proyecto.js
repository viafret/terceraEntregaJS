function armarListaProd() {
  for (const muebles of mueblesDisp) {
    $(".seccionProductos").append(
      `<div>
        <h4>${muebles.nombre}</h4>
        <p>Valor: $  ${muebles.precio}</p>
        <a href="#" id="${muebles.id}" class="lista__productos--botonAgregar">Agregar</a>
      </div>`
    );
  }

  productoAlmacenado();
}

function productoAlmacenado() {
  if (sessionStorage.productosLocal == undefined) {
    actualizarProductos();
  } else {
    const almacenados = JSON.parse(localStorage.getItem("productosLocal"));

    mueble1.cantidad = almacenados[0].cantidad;
    mueble2.cantidad = almacenados[1].cantidad;
    mueble3.cantidad = almacenados[2].cantidad;

    for (const cantidades of mueblesDisp) {
      if ((cantidades.cantidad = !0)) {
        for (let i = 0; i < cantidades.cantidad; i++) {
          listaProdAgregados(cantidades.nombre);
        }
      } else {
        return;
      }
    }
  }
}

const productosLocal = (clave1, valor1) => {
  sessionStorage.setItem(clave1, valor1);
};

function actualizarProductos() {
  productosLocal(accesorio1.nombre, JSON.stringify(aCant[0]));
  productosLocal(accesorio2.nombre, JSON.stringify(aCant[1]));
  productosLocal(accesorio3.nombre, JSON.stringify(aCant[2]));

  productosLocal("Productos", JSON.stringify(mueblesDisp));
}

function seleccion(e) {
  e.preventDefault();
  let hijo = e.target;
  console.log(hijo.id);
  let padre = hijo.parentNode;

  let _producto = padre.firstElementChild.innerText;

  if (_producto == mueblesDisp[0].nombre) {
    carritoMuebles.push(mueble1);

    mueble1.cantidad++;
  } else if (_producto == mueblesDisp[1].nombre) {
    carritoMuebles.push(mueble2);

    mueble2.cantidad++;
  } else if (_producto == mueblesDisp[2].nombre) {
    carritoMuebles.push(mueble3);

    mueble3.cantidad++;
  } else {
    alert("Entrada inválida");
    console.log("Selección invalida");
  }

  listaProdAgregados(_producto);
  sumar();
}

function listaProdAgregados(_producto) {
  let agregado = document.getElementById("listaProductosAgregados");
  let contenedor = document.createElement("div");
  let producto = document.createElement("p");
  let boton = document.createElement("a");
  boton.href = `#`;
  boton.className = `lista__productos--botonEliminar`;
  producto.innerHTML = `${_producto}`;
  boton.innerHTML = `Eliminar`;
  $("#sinProducto").hide();
  agregado.appendChild(contenedor);
  contenedor.appendChild(producto);
  contenedor.appendChild(boton);
  //$(".lista__productos--botonEliminar").click(eliminarProd);
}

function eliminarProd(e) {
  e.preventDefault();
  let prods = JSON.parse(sessionStorage.getItem("Productos"));
  let hijo = e.target;
  let padre1 = hijo.parentElement;
  let padre2 = padre1.parentElement;

  console.log(hijo);
  console.log(padre1);
  console.log(padre2);

  let prodAdd = prods[0].cantidad + prods[1].cantidad + prods[2].cantidad;

  descartar(padre1.firstChild.innerText);

  if (prodAdd > 1) {
    console.log("Quiere eliminar el producto!");
    console.log(hijo);
    console.log(padre1);
    console.log(padre2);

    padre2.removeChild(padre1);
  } else {
    padre2.removeChild(padre1);
    $("#sinProducto").show();
  }
  sumar();
}

function descartar(_producto) {
  if (_producto == mueblesDisp[0].nombre) {
    mueble1.cantidad--;
  } else if (_producto == mueblesDisp[1].nombre) {
    mueble2.cantidad--;
  } else if (_producto == mueblesDisp[2].nombre) {
    mueble3.cantidad--;
  } else {
    alert("Entrada inválida");
    console.log("Selección invalida");
  }
  actualizarProductos();
}

function armarListaAcce() {
  for (const accesorio of accesoriosDisp) {
    $(".seccionAccesorios").append(
      `<div>
        <h4>${accesorio.nombre}</h4>
        <p>Valor: $  ${accesorio.precio}</p>
        <a href="#" class="lista__accesorios--botonAgregar">Agregar</a>
      </div>`
    );
  }

  accesorioAlmacenado();
}

function accesorioAlmacenado() {
  if (sessionStorage.accesoriosLocal == undefined) {
    actualizarProductos();
  } else {
    const almacenados = JSON.parse(localStorage.getItem("productosLocal"));

    aCant[0] = almacenados[4];
    aCant[1] = almacenados[5];
    aCant[2] = almacenados[6];

    for (index = 0; index < 3; index++) {
      if ((aCant[index] = !0)) {
        for (i = 0; i < aCant[index]; i++);
        listaAcceAgregados(accesoriosDisp[index].nombre);
      } else {
        return;
      }
    }
  }
}

function listaAcceAgregados(_tipoAcce) {
  let agregado = document.getElementById("listaAccesoriosAgregados");

  let accesorio = document.createElement("p");
  let boton = document.createElement("a");
  boton.href = `#`;
  boton.className = `lista__accesorios--botonEliminar`;
  $("#sinAccesorio").hide();
  accesorio.innerHTML = `${_tipoAcce}`;
  boton.innerHTML = `Eliminar`;
  agregado.appendChild(accesorio);
  accesorio.appendChild(boton);

  let botEliminarAcce = document.querySelectorAll(
    ".lista__accesorios--botonEliminar"
  );

  for (let boton of botEliminarAcce) {
    boton.addEventListener("click", eliminarAcces);
  }
}

function eliminarAcces(e) {
  e.preventDefault();
  let hijo = e.target;
  let padre1 = hijo.parentNode;
  let padre2 = hijo.parentNode.parentNode;

  let accesAdd = aCant[0] + aCant[1] + aCant[2];
  if (accesAdd > 1) {
    console.log("Quiere eliminar el accesorio!");

    padre2.removeChild(padre1);
  } else {
    padre2.removeChild(padre1);

    $("#sinAccesorio").show();
  }

  descartarAcce(padre1.firstChild.data);
  sumar();
}

armarListaProd();
armarListaAcce();

function definAcc(e) {
  e.preventDefault();
  let hijo = e.target;
  let padre = hijo.parentNode;

  let _tipoAcce = padre.firstElementChild.innerText;

  if (_tipoAcce == accesoriosDisp[0].nombre) {
    aCant[0] = aCant[0] + 1;
    accesoriosAgregados.push(accesorio1);
  } else if (_tipoAcce == accesoriosDisp[1].nombre) {
    aCant[1] = aCant[1] + 1;
    accesoriosAgregados.push(accesorio2);
  } else if (_tipoAcce == accesoriosDisp[2].nombre) {
    aCant[2] = aCant[2] + 1;
    accesoriosAgregados.push(accesorio3);
  } else {
    alert("Entrada inválida");
    console.log("Selección de accesorio invalida");
    agregaAcc = "";
  }

  listaAcceAgregados(_tipoAcce);
  sumar();
}

function descartarAcce(_accesorio) {
  if (_accesorio == accesoriosDisp[0].nombre) {
    aCant[0]--;
  } else if (_accesorio == accesoriosDisp[1].nombre) {
    aCant[1]--;
  } else if (_accesorio == accesoriosDisp[2].nombre) {
    aCant[2]--;
  } else {
    alert("Entrada inválida");
    console.log("Selección invalida");
  }
}

function sumar() {
  let total = document.getElementById("total");
  let sumaMuebles =
    mueble1.cantidad * mueble1.precio +
    mueble2.cantidad * mueble2.precio +
    mueble3.cantidad * mueble3.precio;

  let sumAccesorios =
    aCant[0] * accesorio1.precio +
    aCant[1] * accesorio2.precio +
    aCant[2] * accesorio3.precio;
  let totalSuma = sumAccesorios + sumaMuebles;

  total.textContent = `Total: ${totalSuma}$`;
  actualizarProductos();
}
