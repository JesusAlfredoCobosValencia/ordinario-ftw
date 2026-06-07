function validarAcceso() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            revisarUsuarios(this, usuario, clave);
        }
    };

    xhttp.open("GET", "./xml/usuarios.xml", true);
    xhttp.send();
}

function revisarUsuarios(xml, usuario, clave) {
    var documento = xml.responseXML;
    var usuarios = documento.getElementsByTagName("usuario");

    var encontrado = "no";

    for (i = 0; i < usuarios.length; i++) {
        var nombre = usuarios[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        var password = usuarios[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

        if (usuario == nombre && clave == password) {
            encontrado = "si";
        }
    }

    if (encontrado == "si") {
        window.location.href = "inicio.html";
    } else {
        document.getElementById("mensaje").innerHTML = "<p class='incorrecto'>Usuario o contraseña incorrectos</p>";
    }
}