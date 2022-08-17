const minusculas = 
{
    "e": "enter",
    "i": "imes", 
    "a": "ai", 
    "o": "ober", 
    "u": "ufat"
};
const resultadosMapeo = Object.keys(minusculas);
const caracteresEspeciales = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?´@]/);
const acentos = new RegExp(/[ÁÉÍÓÚáéíóúÄËÏÖÜäëïöü]/);

function encode(input){
    var textoCodificado = "";
    var input = document.getElementById("inputId").value.toLowerCase();
    //var output = document.getElementById("outputId").value.toLowerCase();
    
    for (var i=0; i < input.length; i++){
        //debugger;
        try {
            if((isNaN(input[i]) == false) && (input[i] != " ")) throw "números.";
            if(caracteresEspeciales.test(input)) throw "carácteres especiales.";
            if(acentos.test(input)) throw "acentos.";

        } catch (error) {
            alert( "No se permiten " + error);
            document.getElementById("btn-copiar").style.display = "none";
            return
        }
        if(input[i] == resultadosMapeo.find( letra => {return letra === input[i]})) { 
            textoCodificado += minusculas[input[i]];
        } else {
            textoCodificado += input[i];
        }
    }
    if (input == ""){
        document.getElementById("btn-copiar").style.display = "none"; 
    } else {
        document.getElementById("btn-copiar").style.display = "flex";
        document.getElementById("muneco").style.display = "none";
        document.getElementById("notext").style.display = "none";
    }
    //alert(textoCodificado)
    document.getElementById("outputId").innerHTML = textoCodificado;
    //document.getElementById("btn-copiar").style.display = "block";
    
}

function decode(){
    var input = document.getElementById("inputId").value;
    var decodificado = input
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    if (input == ""){
        document.getElementById("btn-copiar").style.display = "none"; 
    } else {
        document.getElementById("btn-copiar").style.display = "block";
    }
    
    //alert(decodificado);
    document.getElementById("outputId").innerHTML = decodificado;
}

function copyToClipBoard(outputId) {
    navigator.clipboard.writeText(document.getElementById("outputId").value);
    alert("Texto copiado")    
}
    

