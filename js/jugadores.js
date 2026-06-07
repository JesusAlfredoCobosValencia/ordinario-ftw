function cargarJugadores() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarJugadores(this, "Todos");
        }
    };

    xhttp.open("GET", "xml/jugadores.xml", true);
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

    xhttp.open("GET", "xml/jugadores.xml", true);
    xhttp.send();
}

function mostrarJugadores(xml, filtro) {
    var documento = xml.responseXML;
    var jugadores = documento.getElementsByTagName("jugador");

    var texto = "";

    texto += "<table>";
    texto += "<tr>";
    texto += "<th>Nombre</th>";
    texto += "<th>Equipo</th>";
    texto += "<th>Posicion</th>";
    texto += "<th>Numero</th>";
    texto += "<th>Edad</th>";
    texto += "<th>Goles</th>";
    texto += "</tr>";

    for (i = 0; i < jugadores.length; i++) {
        var nombre = jugadores[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        var equipo = jugadores[i].getElementsByTagName("equipo")[0].childNodes[0].nodeValue;
        var posicion = jugadores[i].getElementsByTagName("posicion")[0].childNodes[0].nodeValue;
        var numero = jugadores[i].getElementsByTagName("numero")[0].childNodes[0].nodeValue;
        var edad = jugadores[i].getElementsByTagName("edad")[0].childNodes[0].nodeValue;
        var goles = jugadores[i].getElementsByTagName("goles")[0].childNodes[0].nodeValue;

        if (filtro == "Todos" || equipo == filtro) {
            texto += "<tr>";

            texto += "<td>";
            texto += nombre;
            texto += "</td>";

            texto += "<td>";
            texto += equipo;
            texto += "</td>";

            texto += "<td>";
            texto += posicion;
            texto += "</td>";

            texto += "<td>";
            texto += numero;
            texto += "</td>";

            texto += "<td>";
            texto += edad;
            texto += "</td>";

            texto += "<td>";
            texto += goles;
            texto += "</td>";

            texto += "</tr>";
        }
    }

    texto += "</table>";

    document.getElementById("tablaJugadores").innerHTML = texto;
}