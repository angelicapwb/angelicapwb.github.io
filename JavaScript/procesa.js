"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

var forma = document.getElementById("forma"),
    txtFecha = forma["fecha"],
    FMT_SUMA = "$z0,0.00",
    salidaClave = document.getElementById("salidaClave"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaTelefono = document.getElementById("salidaTelefono"),
    salidaFecha = document.getElementById("salidaFecha"),
    salidaPedido = document.getElementById("salidaPedido"),
    salidaTotal = document.getElementById("salidaTotal"),
    comida = document.getElementsByName("comida"),
    Subtotal = document.getElementsByName("comida");

function procesa(){
    var fecha = new Date(txtFecha.value),
        Clave = forma["clave"].value,
        Nombre = forma["nombre"].value,
        Telefono = forma["telefono"].value,
        MiFecha,
        totalSumado = 0,
        precio = 0,
        comidaSeleccionada = new Array(),
        precioSeleccionado = new Array();

        for(var i = 0, total = comida.length; i < total; i++){
            var comidas = comida[i];
            if(comidas.checked){
                comidaSeleccionada.push(comidas.value);
            }
        }

        for(var i = 0, total = Subtotal.length; i < total; i++){
            var sub = Subtotal[i];
            if(sub.checked){
                precioSeleccionado.push(sub.id);
                precio = Subtotal[i].id;
                totalSumado = totalSumado + parseInt(precio);
            }
        }


        MiFecha = (fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
        salidaFecha.textContent = "Fecha: "+MiFecha;
        salidaClave.textContent = "Clave: "+Clave;
        salidaNombre.textContent = "Nombre: "+Nombre;
        salidaTelefono.textContent = "Telefono: "+Telefono;
        salidaPedido.textContent = comidaSeleccionada.join(", ");
        salidaTotal.value = numeral(totalSumado).format(FMT_SUMA);
}

function Alerta(){
    var fecha = new Date(txtFecha.value),
    Clave = forma["clave"].value,
    Nombre = forma["nombre"].value,
    Telefono = forma["telefono"].value,
    MiFecha;
    
    MiFecha = (fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
       alert ( "Su datos son: " + MiFecha + "  " + Clave + "  " + Nombre + "  " + Telefono);
   }
