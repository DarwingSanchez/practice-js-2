/* Funciones del cuadrado */
function cuadradoArea(lado){
    return lado * lado
}
function cuadradoPerimetro(lado){
    return lado * 4 
}

/* Funciones del triangulo */
function trianguloPerimetro(lado1, lado2, base){
    return lado1 + lado2 + base
}

function trianguloArea(base, altura){
    return (base*altura) / 2
}

/* Funciones del circulo */
const PI = Math.PI

function circuloDiametro(radio){
    return radio*2
}
function circuloArea(radio){
    return (radio * radio) * PI
}
function circuloPerimetro(radio){
    var diametro = circuloDiametro(radio); 
    return diametro * PI
}


function calcularAreaPerimetroTriangulo(){
    /* Captura la base y los lados */
    var inputA = document.getElementById("trianguloLadoA").value;
    inputA = parseInt(inputA);

    var inputB = document.getElementById("trianguloLadoB").value;
    inputB = parseInt(inputB);

    var inputBase = document.getElementById("trianguloBase").value;
    inputBase = parseInt(inputBase);

    /* Captura la altura del triangulo */
    var inputAltura = document.getElementById("trianguloAltura").value;
    inputAltura = parseInt(inputAltura)

    /* Validación de campos 
        La función isNan() devuelve falso en caso de que sea un numero, con !isNaN() estamos negando la funcion
        es decir, en caso de que sea numero, devuelve true, de esa forma el if funciona ya 
        que todos son true ya que el if funciona solo si recibe como parametro true*/
    if(!isNaN(inputA) && !isNaN(inputB) && !isNaN(inputBase) && !isNaN(inputAltura)){
        document.getElementById("validacion-p-triangulo").innerHTML = '' /* Resetea la validación a vacío */

        /* Calcula e imprime el perimetro */
        var resultadoPerimetro = trianguloPerimetro(inputA, inputB, inputBase);
        document.getElementById("tringuloPerimetro").innerHTML = `Perimetro: ${resultadoPerimetro}`;

        /* Calcula e imprime el área */
        var resultadoArea = trianguloArea(inputBase, inputAltura);
        document.getElementById("trianguloArea").innerHTML = `Área: ${resultadoArea}`

    }else{
        /* Como no todos los campos están llenos, manda este error */
        document.getElementById("validacion-p-triangulo").innerHTML = 'Llena todos los campos'
        document.getElementById("tringuloPerimetro").innerHTML = `Perimetro: `;
        document.getElementById("trianguloArea").innerHTML = `Área: `;
    }
}

function calcularAreaPerimetroCuadrado(){
    /* Captura el lado del cuadrado */
    var inputA = document.getElementById("cuadradoLado").value;
    inputA = parseInt(inputA);

    /* Validación de campos 
        La función isNan() devuelve falso en caso de que sea un numero, con !isNaN() estamos negando la funcion
        es decir, en caso de que sea numero, devuelve true, de esa forma el if funciona ya 
        que todos son true ya que el if funciona solo si recibe como parametro true*/
    if(!isNaN(inputA)){
        document.getElementById("validacion-p-cuadrado").innerHTML = '' /* Resetea la validación a vacío */

        /* Calcula e imprime el perimetro */
        var resultadoPerimetro = cuadradoPerimetro(inputA);
        document.getElementById("cuadradoPerimetro").innerHTML = `Perimetro: ${resultadoPerimetro}`;

        /* Calcula e imprime el área */
        var resultadoArea = cuadradoArea(inputA);
        document.getElementById("cuadradoArea").innerHTML = `Área: ${resultadoArea}`

    }else{
        /* Como no todos los campos están llenos, manda este error */
        document.getElementById("validacion-p-cuadrado").innerHTML = 'Llena todos los campos'
        document.getElementById("cuadradoPerimetro").innerHTML = `Perimetro: `;
        document.getElementById("cuadradoArea").innerHTML = `Área: `;
    }
}

function calcularAreaPerimetroCirculo(){
    /* Captura el radio */
    var inputA = document.getElementById("circuloRadio").value;
    inputA = parseInt(inputA);

    /* Validación de campos 
        La función isNan() devuelve falso en caso de que sea un numero, con !isNaN() estamos negando la funcion
        es decir, en caso de que sea numero, devuelve true, de esa forma el if funciona ya 
        que todos son true ya que el if funciona solo si recibe como parametro true*/
    if(!isNaN(inputA)){
        document.getElementById("validacion-p-circulo").innerHTML = ''; /* Resetea la validación a vacío */

        /* Calcula e imprime el perimetro */
        var resultadoPerimetro = circuloPerimetro(inputA);
        resultadoPerimetro = Math.floor(resultadoPerimetro);
        document.getElementById("circuloPerimetro").innerHTML = `Perimetro: ${resultadoPerimetro}`;

        /* Calcula e imprime el área */
        var resultadoArea = circuloArea(inputA);
        resultadoArea = Math.floor(resultadoArea);
        document.getElementById("circuloArea").innerHTML = `Área: ${resultadoArea}`;

    }else{
        /* Como no todos los campos están llenos, manda este error */
        document.getElementById("validacion-p-circulo").innerHTML = 'Llena todos los campos';
        document.getElementById("circuloPerimetro").innerHTML = `Perimetro: `;
        document.getElementById("circuloArea").innerHTML = `Área: `;
    }
}