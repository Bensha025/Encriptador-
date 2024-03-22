const palabra = document.getElementById("palabra")

const matriz = [
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"],
];

function encriptar(){
    cadena = palabra.value
    for(let i = 0; i < matriz.length; i++){
        if(cadena.includes(matriz[i][0])){
            palabras = cadena.replaceAll(
                matriz[i][0],
                matriz[i][1]
        )};
    }

    return resultado(palabras);
}

function desencriptar(){
    cadena = palabra.value
    for(let i = 0; i < matriz.length; i++){
        if(cadena.includes(matriz[i][1])){
            cadena = cadena.replaceAll(
                matriz[i][1],
                matriz[i][0]
        )};
    }

    return resultado(cadena);
}

function resultado(cadena){
    document.getElementById("resultado").value = cadena
    if(cadena.length > 0){
        $('#noText').hide();
        $('#resultado').show();
        $('#copiar').show();
    }
}

function copiar(cadena){
    navigator.clipboard.writeText(document.getElementById("resultado").value);
}

function rest(){
    if(document.getElementById("resultado").value == 0){
        $('#resultado').hide();
        $('#copiar').hide();
        $('#noText').show();
    }
}

