function ejercicio1(){

    let cadena = prompt(
        "Ingrese una palabra o frase:"
    );

    let texto = cadena
        .toLowerCase()
        .replace(/\s+/g,'');

    let invertida = texto
        .split('')
        .reverse()
        .join('');

    if(texto === invertida){
        alert("Es un palíndromo");
    }
    else{
        alert("No es un palíndromo");
    }

}

function ejercicio2(){

    let num1 = parseFloat(
        prompt("Ingrese el primer número:")
    );

    let num2 = parseFloat(
        prompt("Ingrese el segundo número:")
    );

    if(num1 > num2){

        alert(
            "El número mayor es: " + num1
        );

    }
    else if(num2 > num1){

        alert(
            "El número mayor es: " + num2
        );

    }
    else{

        alert(
            "Ambos números son iguales"
        );

    }

}

function ejercicio3(){

    let frase = prompt(
        "Ingrese una frase:"
    );

    let vocales = "";

    for(let i = 0; i < frase.length; i++){

        let letra = frase[i].toLowerCase();

        if(
            letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u"
        ){

            vocales += letra + " ";

        }

    }

    if(vocales !== ""){

        alert(
            "Las vocales encontradas son: " +
            vocales
        );

    }
    else{

        alert(
            "No se encontraron vocales"
        );

    }

}

function ejercicio4(){

    let frase = prompt(
        "Ingrese una frase:"
    ).toLowerCase();

    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;

    for(let letra of frase){

        switch(letra){

            case "a":
                a++;
                break;

            case "e":
                e++;
                break;

            case "i":
                i++;
                break;

            case "o":
                o++;
                break;

            case "u":
                u++;
                break;

        }

    }

    alert(
        "Cantidad de vocales:\n\n" +
        "A: " + a + "\n" +
        "E: " + e + "\n" +
        "I: " + i + "\n" +
        "O: " + o + "\n" +
        "U: " + u
    );

}

window.onload = function(){

    document.getElementById("recurso").value =
        window.location.href;

};

document
.getElementById("enviar")
.addEventListener(
    "click",
    cargarContenido
);

function cargarContenido(){

    let url =
    document.getElementById("recurso").value;

    let peticion =
    new XMLHttpRequest();

    peticion.onreadystatechange =
    function(){

        mostrarEstados(peticion);

        if(peticion.readyState === 4){

            mostrarCabeceras(peticion);

            mostrarCodigoEstado(peticion);

            document.getElementById(
                "contenidos"
            ).textContent =
            peticion.responseText;

        }

    };

    peticion.open(
        "GET",
        url,
        true
    );

    peticion.send();

}

function mostrarEstados(peticion){

    let estado = "";

    switch(peticion.readyState){

        case 0:
            estado =
            "Petición no iniciada";
            break;

        case 1:
            estado =
            "Conexión establecida";
            break;

        case 2:
            estado =
            "Petición recibida";
            break;

        case 3:
            estado =
            "Procesando respuesta";
            break;

        case 4:
            estado =
            "Petición completada";
            break;

    }

    document.getElementById(
        "estados"
    ).textContent = estado;

}

function mostrarCabeceras(peticion){

    document.getElementById(
        "cabeceras"
    ).textContent =
    peticion.getAllResponseHeaders();

}

function mostrarCodigoEstado(peticion){

    document.getElementById(
        "codigo"
    ).textContent =
    peticion.status +
    " - " +
    peticion.statusText;

}