var valido = false;

function validaEdad() {
        var anio = document.getElementById("anio").value;
        var campoAnio = document.getElementById("anio");
        if (anio > 2006) {
                alert("No puedes registrarte, tienes menos de 16 años");
                campoAnio.style.border = "red solid 3px";
                document.getElementById("checkAnio").style.display = 'none';
                valido = false;
        } else {
                campoAnio.style.border = "none";
                document.getElementById("checkAnio").style.display = 'block';
                valido = true;
        }
}
function validaDNI() {
        var dni = document.getElementById("dni").value;
        var campoDNI = document.getElementById("dni");
        var reg = /^[0-9]{8}[- ]?[A-Z]{1}$/;
        if (!dni.match(reg)) {
                campoDNI.style.border = "red solid 3px";
                document.getElementById("checkDNI").style.display = 'none';
                valido = false;
        } else {
                campoDNI.style.border = "none";
                document.getElementById("checkDNI").style.display = 'block';
                valido = true;
        }
}
function validaEmail() {

        var email = document.getElementById("email").value;
        var campoEmail = document.getElementById("email");
        var reg = /^[a-zA-Z0-9]{1,64}\S+@\D\S+\.\D\S+$/;
        if (!reg.test(email)) {
                campoEmail.style.border = "red solid 3px";
                document.getElementById("checkEmail").style.display = 'none';
                valido = false;
        } else {
                campoEmail.style.border = "none";
                document.getElementById("checkEmail").style.display = 'block';
                valido = true;
        }
}
function validaTlf() {

        var tlf = document.getElementById("tlf").value;
        var campoTlf = document.getElementById("tlf");
        var reg = /^[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}$/;
        if (!reg.test(tlf)) {
                campoTlf.style.border = "red solid 3px";
                document.getElementById("checkTlf").style.display = 'none';
                valido = false;
        } else {
                campoTlf.style.border = "none";
                document.getElementById("checkTlf").style.display = 'block';
                valido = true;
        }
}

function muestraCredenciales() {

        if (valido) {
                document.getElementById("datosPers").style.display = 'none';
                document.getElementById("credenciales").style.display = 'block';
        } else {
                alert("Campos incorrecto");
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

        document.getElementById("cuenta").style.display = 'block';
        document.getElementById("credenciales").style.display = 'none';

}

function validaCuenta() {

        var iban = document.getElementById("iban").value;
        var campoIban = document.getElementById("iban");
        var reg = /^[A-Z]{2}[0-9]{2}[\s-]?[0-9]{20}$/;
        if (!reg.test(iban)) {
                campoIban.style.border = "red solid 3px";
        }
        var swift = document.getElementById("swift").value;
        var campoSwift = document.getElementById("swift");
        var reg = /^[A-Za-z]{8}[0-9]{3}?$/;
        if (!reg.test(swift)) {
                campoSwift.style.border = "red solid 3px";
        }
}

