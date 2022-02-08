alert("¡Hoy comemos arroz con pollo!\n\nEstos son los ingredientes:\n· Pollo\n· Arroz\n· Queso rallado\n\nVamos a armar la lista para ir al supermercado");

//Declaramos las variables con los precios del supermercados
let arroz = 10;
let pollo = 20;
let queso = 5;

//Función para completar el listado cuando no hay algún ingrediente
let noHayArroz = "";
let noHayPollo = "";
let noHayQueso = "";
function comprarArroz() {
    noHayArroz = "<li>Arroz: \$10</li>";
}
function comprarPollo() {
    noHayPollo = "<li>Pollo: \$20</li>";
}
function comprarQueso() {
    noHayQueso = "<li>Queso: \$5</li>";
}

//Función para cuando no responde por Si o No
function noSeEntiende() {
    alert("No entiendo lo que decís. Lo tomo como un No");
}

//Función que chequea si tenés arroz
function checkArroz() {
    let hayArroz = prompt("¿Tenés arroz? (SI o NO)");
    if ((hayArroz == "SI") || (hayArroz == "si") || (hayArroz == "Si")) {
        arroz = 0;
    } else if ((hayArroz == "NO") || (hayArroz == "no") || (hayArroz == "No")) {
        comprarArroz();
    } else {
        noSeEntiende()
        comprarArroz();
    }
}

//Función que chequea si tenés pollo
function checkPollo() {
    let hayPollo = prompt("¿Tenés unas pechugas de pollo? (SI o NO)");
    if ((hayPollo == "SI") || (hayPollo == "si") || (hayPollo == "Si")) {
        pollo = 0;
    } else if ((hayPollo == "NO") || (hayPollo == "no") || (hayPollo == "No")) {
        comprarPollo();
    } else {
        noSeEntiende()
        comprarPollo();
    }
}

//Función que chequea si tenés pollo
function checkQueso() {
    let hayQueso = prompt("¿Tenés queso rallado? (SI o NO)");
    if ((hayQueso == "SI") || (hayQueso == "si") || (hayQueso == "Si")) {
        queso = 0;
    } else if ((hayQueso == "NO") || (hayQueso == "no") || (hayQueso == "No")) {
        comprarQueso();
    } else {
        noSeEntiende()
        comprarQueso();
    }
}

//Chequeamos los ingredientes
checkArroz();
checkPollo();
checkQueso();

//Función sumar y asigna a resultado
function suma(a, b, c) {
    return a + b + c;
}

//Suma de cuanto me salen todos los ingredientes
let sumaIngredientes = suma(arroz, pollo, queso);
let descuento = 0;

//Función que chequea si tenés descuento
function checkDescuento() {
    let hayDescuento = prompt("Con la tarjeta de beneficios, tenés 20\% de descuento. ¿La tenés? (SI o NO)");
    if ((hayDescuento == "SI") || (hayDescuento == "si") || (hayDescuento == "Si")) {
        descuento = sumaIngredientes * 0.2;
        document.write(`<br><em>¡Con tu tarjeta de beneficios te ahorraste \$${descuento}!</em><br><br>`);
        return descuento;
    } else if ((hayDescuento == "NO") || (hayDescuento == "no") || (hayDescuento == "No")) {
        document.write("<br><em>No tenés la tarjeta de beneficios</em><br><br>");
    } else {
        noSeEntiende()
        document.write("<br><em>No tenés la tarjeta de beneficios</em><br><br>");
    }
}

//Función que muestra resultado
function lista() {
    if (sumaIngredientes !== 0) {
        document.write("<h2>¡Hoy comemos Arroz con Pollo!</h2><p>Lista para el supermercado:</p><ul>");
        document.write(noHayArroz);
        document.write(noHayPollo);
        document.write(noHayQueso);
        document.write("</ul>");
        checkDescuento();
        let total = parseInt(sumaIngredientes) - descuento;
        document.write(`<strong>Vas a necesitar llevar \$${total}</strong>`);
    } else {
        document.write("<h2>¡Hoy comemos Arroz con Pollo!</h2>");
        document.write("¡No necesitás comprar nada!"); //Si no necesitás comprar nada no te muestra la opción de pagar con tarjeta de beneficios
    }
}
lista();
noHayArroz;
noHayPollo;
noHayQueso;