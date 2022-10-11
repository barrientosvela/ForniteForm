




function validaDatos() {

        var validacion = true;
        var anio = document.getElementById("anio").value;
        if (anio > 2006) {
                alert("No puedes registrarte, tienes menos de 16 años");
                validacion = false;
        }
        var dni = document.getElementByIdy("dni").value;
        var campoDNI = document.getElementByIdy("dni");
        var reg = /^[0-9]{8}[- ]?[A-Z]{1}$/;
        if (!reg.test(dni)) {
                alert("formato DNI incorrecto");
                campoDNI.style.border = "red solid 3px";
                validacion = false;
        }
        var email = document.getElementByIdy("email").value;
        var campoEmail = document.getElementByIdy("email");
        var reg = /^[a-zA-Z0-9]{1,64}\S+@\D\S+\.\D\S+$/;
        if (!reg.test(email)) {
                alert("formato Email incorrecto");
                campoEmail.style.border = "red solid 3px";
                validacion = false;
        }

        var tlf = document.getElementById("tlf").value;
        var campoTlf = document.getElementById("tlf");
        var reg = /^[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}$/;
        if (!reg.test(tlf)) {
                alert("formato Teléfono incorrecto");
                campoTlf.style.border = "red solid 3px";
                validacion = false;
        }
}

function muestraCredenciales() {
        if (validacion) {
                document.getElementById("datosPers").style.display = 'none';
                document.getElementById("credenciales").style.display = 'block';
        } else {
                alert("Datos incorrectos");
        }
}
function atrasCredenciales() {
        document.getElementById("datosPers").style.display = 'block';
        document.getElementById("credenciales").style.display = 'none';
}
function atrasCuenta() {
        document.getElementById("cuenta").style.display = 'none';
        document.getElementById("credenciales").style.display = 'block';
}
function muestraCuenta() {
        if (validacion) {
                document.getElementById("cuenta").style.display = 'block';
                document.getElementById("credenciales").style.display = 'none';
        } else {
                alert("Datos incorrectos");
        }
}

function validaCuenta() {


        var iban = document.getElementById("iban").value;
        var campoIban = document.getElementById("iban");
        var reg = /^[A-Z]{2}[0-9]{2}[\s-]?[0-9]{20}$/;
        if (!reg.test(iban)) {
                campoIban.style.border = "red solid 3px";
                validacion = false;
        }
        var swift = document.getElementById("swift").value;
        var campoSwift = document.getElementById("swift");
        var reg = /^[A-Za-z]{8}[0-9]{3}?$/;
        if (!reg.test(swift)) {
                campoSwift.style.border = "red solid 3px";
                validacion = false;
        }


}
function enviar() {
        if (validacion) {
                alert("Formulario enviado CORRECTAMENTE");
                window.location = "https://www.epicgames.com/fortnite/es-ES/home";
        } else {
                alert("Formulario incorrecto");
                window.location = "index.html";
        }
}

