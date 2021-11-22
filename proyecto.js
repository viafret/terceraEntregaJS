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
  $("#listaProductosAgregados")
    .prepend(
      `<div id="${_producto}">
    <p>${_producto}
    </p>
    <a href="#"  class="lista__productos--botonEliminar">Eliminar</a>
    </div>`
    )
    .hide()
    .fadeIn(1000);

  $("#sinProducto").hide();

  let botEliminarProd = document.querySelectorAll(
    ".lista__productos--botonEliminar"
  );

  for (let boton of botEliminarProd) {
    boton.addEventListener("click", eliminarProd);
  }
}

function eliminarProd(e) {
  e.preventDefault();
  let prods = JSON.parse(sessionStorage.getItem("Productos"));
  let hijo = e.target;
  let padre1 = hijo.parentNode;
  let padre2 = padre1.parentNode;

  console.log(hijo);
  console.log(padre1);
  console.log(padre2);

  let prodAdd = prods[0].cantidad + prods[1].cantidad + prods[2].cantidad;
  let producto = padre1.id;
  console.log(producto);

  if (prodAdd > 1) {
    console.log("Quiere eliminar el producto!");
    console.log(hijo);
    console.log(padre1);
    console.log(padre2);
    //$(`#${padre1.id}`).fadeOut("slow");
    padre2.removeChild(padre1);
    $();
  } else {
    //$(`#${padre1.id}`).fadeOut("slow");
    padre2.removeChild(padre1);
    $("#sinProducto").fadeIn(1000);
  }
  descartar(producto);
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
  $("#listaAccesoriosAgregados")
    .prepend(
      `<div id="${_tipoAcce}">
    <p>${_tipoAcce}
    </p>
  <a href="#" class="lista__accesorios--botonEliminar">Eliminar</a>
  </div>`
    )
    .hide()
    .fadeIn(1000);
  $("#sinAccesorio").hide();

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
    //$(`#${padre1.id}`).fadeOut("slow");
    padre2.removeChild(padre1);
  } else {
    //$(`#${padre1.id}`).fadeOut("slow");
    padre2.removeChild(padre1);
    $("#sinAccesorio").fadeIn(1000);
  }

  descartarAcce(padre1.id);
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

//API
function selectLista(array, id) {
  let innerSelect = "";
  array.forEach(
    (provincia) =>
      (innerSelect += `<option value="${provincia.id}">${provincia.nombre}</option>`)
  );
  return `<select id="${id}">${innerSelect}</select>`;
}

$(document).ready(function () {
  //LLAMAR AL API DE PROVINCIAS
  $.get(APIPROVINCIAS, function (datos, estado) {
    if (estado === "success") {
      provincias.push(...datos.provincias);
      console.log(provincias);
      //AGREGAMOS SELECT,ESCUCHAMOS EL EVENTO CHANGE Y FILTRAMOS LA SALIDA
      $("#destino").prepend(
        `<h3>Datos para el envío</h3> <div>Seleccione la provincia destino: ${selectLista(
          provincias,
          "provinciasSelect"
        )}</div> <div id="municipios"><div>`
      );

      $("#municipios").html(
        `Seleccione la ciudad: ${selectLista(municipios, "municipioSelect")}`
      );

      $("#destino").append("<h4 id='salidaProvincias'></h4>");

      $("#destino").append("<h4 id='salidaMunicipios'></h4>");

      $("#destino").append(`<h4 id="costoEnvio"></h4>`);

      $("#costoEnvio").hide();

      $("#provinciasSelect").change(function (e) {
        const seleccionado = provincias.find((obj) => obj.id == e.target.value);
        if (seleccionado.id != -1) {
          $("#salidaProvincias").html(
            `Provincia destino del envío: ${seleccionado.nombre.toUpperCase()}`
          );
          console.log(seleccionado.nombre);
        } else {
          $("#salidaProvincias").html(`Seleccione la provincia de destino`);
        }
        console.log(seleccionado.nombre);
        cargarMunicios(seleccionado.id);

        if (seleccionado.id < 3) {
          costoEnvio = 500;
        } else if (3 <= seleccionado.id <= 80) {
          costoEnvio = 1000;
        } else {
          costoEnvio = 1500;
        }
      });
    }
  });
});

function cargarMunicios(provincia) {
  let municipios = [{ id: -1, nombre: "SELECCIONAR CIUDAD" }];
  $("#salidaMunicipios").hide();
  $("#costoEnvio").hide();
  let apiMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&campos=id,nombre&max=100`;
  console.log(apiMunicipios);
  //SE REALIZA LA LLAMADA GET Y SE CARGAR EL SELECT
  $.get(apiMunicipios, function (datos, estado) {
    if (estado === "success") {
      municipios.push(...datos.municipios);
      console.log(municipios);
      $("#municipios").html(
        `Seleccione la ciudad: ${selectLista(municipios, "municipioSelect")}`
      );
      $("#municipioSelect").change(function (e) {
        const seleccionado = municipios.find((obj) => obj.id == e.target.value);
        $("#salidaMunicipios")
          .html(`Ciudad ${seleccionado.nombre.toUpperCase()}`)
          .show(1000)
          .delay(500);
        let prodAdd =
          mueblesDisp[0].cantidad +
          mueblesDisp[1].cantidad +
          mueblesDisp[2].cantidad;
        if (prodAdd != 0) {
          $("#costoEnvio").html(`Total envío $: ${costoEnvio} `).show(1000);
        } else {
          $("#costoEnvio").html(`No seleccionó productos!`).show();
        }
      });
    }
  });
}
