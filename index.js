function vaciarTextarea() {
	document.getElementById("mensajeEntrada").value="";
}

function mostrarMensaje(mensaje) {
	document.querySelector("#mensajeSalida").innerHTML=mensaje;
}

function mostrarBotonCopiar() {
	document.getElementById("copiar").style.display="flex";
}

function habilitarBotonVaciar(){
	if(document.getElementById("mensajeEntrada").value==="") { 
		document.getElementById('botonVaciar').style.display="none"; 
	} else { 
		document.getElementById('botonVaciar').style.display="inline-block";
	}
}


function encriptarMensaje() {
	var mensaje = document.getElementById("mensajeEntrada").value;
	var mensajeEncriptado= "";

	if (mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[^a-zA-Z0-9 ]/g.test(mensaje) && mensaje.trim().length) {
		for(var i=0; i<mensaje.length; i++){
			switch(mensaje[i]) {
				case "a":
					mensajeEncriptado+="ai"
					break;
				case "e":
					mensajeEncriptado+="enter"
					break;
				case "i":
					mensajeEncriptado+="imes"
					break;
				case "o":
					mensajeEncriptado+="ober"
					break;
				case "u":
					mensajeEncriptado+="ufat"
					break;
				default:
					mensajeEncriptado+=mensaje[i];
			}
		}
		
		mostrarBotonCopiar();
		mostrarMensaje(mensajeEncriptado);
	}

	else alert("Por favor, ingrese un mensaje en minúsculas y sin caracteres especiales (incluyendo acentos)");
}



function desencriptarMensaje(){
	var mensaje = document.querySelector("#mensajeEntrada").value;
	var llaves =  [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
	var vocales = ['a','e','i','o','u'];

	if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[^a-zA-Z0-9 ]/g.test(mensaje) && mensaje.trim().length) {
		for(var i=0; i<5; i++){
			mensaje=mensaje.replaceAll(llaves[i], vocales[i]);
		}
    
		
		mostrarBotonCopiar();
		mostrarMensaje(mensaje);
        // document.querySelector("mensaje").value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin caracteres especiales (incluyendo acentos)");

 }


function copiar() {

	var resultado = document.querySelector("#mensajeSalida").innerText;
	var textareaTemporal = document.createElement("textarea")
	textareaTemporal.value = resultado;

	document.body.appendChild(textareaTemporal);
	textareaTemporal.select();
	document.execCommand("copy");
	document.body.removeChild(textareaTemporal);

	alert("Texto copiado con éxito");
}






