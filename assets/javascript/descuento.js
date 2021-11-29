/* Array de cupones */

/* Se debe crear las funciones para activar los cupones
el usuario puede que no tenga descuentos pero si cupones o viceversa     */
var cupones = [
    {
        id_cupon: "estudiantesPlatzi",
        cupon_descuento: 50
    },
    {
        id_cupon: "vidaSabrosa",
        cupon_descuento: 100
    },
    {
        id_cupon: "programingIsLife",
        cupon_descuento: 30
    },
    {
        id_cupon: "amoAGoku",
        cupon_descuento: 10
    }
]

function calcularPrecio(precio, descuento, cupon){
    var descuentoPorcentaje = descuento / 100 /* Transforma el numero entero en porcentaje */
    var descuentoCupon = cupon / 100
    var descuentoTotal = precio * (descuentoPorcentaje + descuentoCupon) /* Calcula el descuento total en entero */
    var precioFinal = precio - descuentoTotal /* Resta el precio original por el descuento total */
    if(precioFinal < 0){
        precioFinal = 0
    }
    return precioFinal /* Retorna el precio */
}


function calcularDescuento(){
    /* Captura del precio y el descuento */
    var precio = document.getElementById("precio").value;
    precio = parseInt(precio);

    var descuento = document.getElementById("descuento").value;
    descuento = parseInt(descuento);

    var cupon = document.getElementById("cupon").value;
    cupon = String(cupon);

    /* if */
    


    /* else */
    

    /* Validación de campos */
    if(isNaN(descuento)){
        descuento = 0;
    }
    
    /* Validación del cupon */
    var validarCupon = cupones.find(function(a){
        return a.id_cupon === cupon;
    })


    var valorCupon;
    if(cupon === ''){
        valorCupon = 0
    }else{
        if(validarCupon == undefined){
            document.getElementById("validacion-cupon").innerText = 'El código no existe'
            valorCupon = 0
        }else{
            valorCupon = validarCupon.cupon_descuento;
        }
    }

    if(!isNaN(precio)){
        document.getElementById("validacion-descuento").innerHTML = '' /* Resetea todos los valores de la validacion */
        var precioFinal = calcularPrecio(precio, descuento, valorCupon);
        document.getElementById("precioFinal").innerHTML = `Precio final: ${precioFinal}`;
    }else{
        document.getElementById("validacion-descuento").innerHTML = 'Debes ingresar al menos el precio'
        document.getElementById("precioFinal").innerHTML = `Precio final: `;
    }
}