function ingresarDatos(){
    alert ("Hola! somos Arena Deco-Home. ¿Preparado/a para dejar tu casa más linda?");
    let nombre = prompt ("Contanos como te llamas");
    let localidad = prompt ("¿De donde sos? Ingresá tu código postal.");
    let telefono = prompt ("¿A donde te podemos mandar mensajes?");
    let mail = prompt ("Y por último necesitamos tu mail");
        while (nombre === "" || localidad === "" || telefono === "" || mail === ""){
            nombre = prompt ("Contanos como te llamas");
            localidad = prompt ("¿De donde sos?");
            telefono = prompt ("¿A donde te podemos mandar mensajes?");
            mail = prompt ("Y por último necesitamos tu mail");
    }
    console.log ("cliente: " + nombre + ", " + localidad + ", " + "datos de contacto: " + telefono + ", " + mail)
    alert ("Hola " + nombre + " " + "te mostramos todo lo que tenemos para tu casa")
}

function mostrarMenu (){
    let menu;
    do {
    menu = prompt ("Estos son los productos que tenemos para vos (ingresa sólo el número): \n1: Espejo 1. \n2: Espejo 2. \n3: Espejo 3. \n4: Espejo 4")
    }
    menu = Number (menu);
    while (menu != 1 && menu!=2 && menu!=3 && menu!=4)
    switch (menu) {
        case 1:
            return "Espejo 1";
        case 2:
            return "Espejo 2";
        case 3:
            return "Espejo 3";
        case 4:
            return "Espejo 4";
        }
    }


function validarPrecio (menu) {
    if (menu === "Espejo 1") {
        return 3450;
    }
    else if (menu === "Espejo 2") {
        return 3120;
    }
    else if (menu === "Espejo 3") {
        return 2850;
    }
    else if (menu === "Espejo 4") {
        return 3700;
    }
    else {
        alert ("La opción seleccionada no es válida")
    }
}

function cobro (nombre,precio) {
    alert ("Elegiste el " + nombre + "\nvalor: $" + precio);
    let pago = parseInt (prompt ("¿Con cuanto vas a abonar?"))
    if (pago >= precio ) {
        alert ("Gracias por confiar en Arena Deco-Home, tu vuelto va a ser de " + "$" + (pago - precio) + ", " + "nos vamos a estar comunicando con vos para los detalles del envío. Si no recibis un mensaje en las próximas 24hs por favor envianos un mail a soporte@arenadecohome.com")
    }
    else {
        alert ("No te alcanza para tu pedido, pero igual podés abonar por otros medios de pago. Escribinos a ventas@arenadecohome.com")
    }
}

ingresarDatos ();
let menuDatos = mostrarMenu ();
let menuPrecio = validarPrecio (menuDatos);
cobro (menuDatos, menuPrecio);
