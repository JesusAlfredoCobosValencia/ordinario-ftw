function cargarJugadores() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarJugadores(this, "Todos");
        }
    };

    xhttp.open("GET", "./xml/jugadores.xml", true);
    xhttp.send();
}

function filtrarJugadores() {
    var filtro = document.getElementById("filtroEquipo").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarJugadores(this, filtro);
        }
    };

    xhttp.open("GET", "./xml/jugadores.xml", true);
    xhttp.send();
}

function mostrarJugadores(xml, filtro) {
    var documento = xml.responseXML;
    var jugadores = documento.getElementsByTagName("jugador");

    var tarjetas = "";

    tarjetas += "<div class='tarjetas'>";

    for (i = 0; i < jugadores.length; i++) {
        var nombre = jugadores[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        var equipo = jugadores[i].getElementsByTagName("equipo")[0].childNodes[0].nodeValue;
        var posicion = jugadores[i].getElementsByTagName("posicion")[0].childNodes[0].nodeValue;
        var numero = jugadores[i].getElementsByTagName("numero")[0].childNodes[0].nodeValue;
        var edad = jugadores[i].getElementsByTagName("edad")[0].childNodes[0].nodeValue;
        var goles = jugadores[i].getElementsByTagName("goles")[0].childNodes[0].nodeValue;

        if (filtro == "Todos" || equipo == filtro) {
            tarjetas += "<div class='tarjeta jugador'>";
            tarjetas += "<h3>";
            tarjetas += nombre;
            tarjetas += "</h3>";

            tarjetas += "<p><b>Equipo:</b> ";
            tarjetas += equipo;
            tarjetas += "</p>";

            tarjetas += "<p><b>Posicion:</b> ";
            tarjetas += posicion;
            tarjetas += "</p>";

            tarjetas += "<p><b>Numero:</b> ";
            tarjetas += numero;
            tarjetas += "</p>";

            tarjetas += "<p><b>Edad:</b> ";
            tarjetas += edad;
            tarjetas += "</p>";

            tarjetas += "<p><b>Goles:</b> ";
            tarjetas += goles;
            tarjetas += "</p>";

            tarjetas += "</div>";
        }
    }

    tarjetas += "</div>";

    document.getElementById("tarjetasJugadores").innerHTML = tarjetas;
}