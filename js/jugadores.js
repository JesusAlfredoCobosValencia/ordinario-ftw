function cargarJugadores() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarJugadores(this);
        }
    };

    xhttp.open("GET", "xml/jugadores.xml", true);
    xhttp.send();
}

function mostrarJugadores(xml) {
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
        texto += "<tr>";

        texto += "<td>";
        texto += jugadores[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += jugadores[i].getElementsByTagName("equipo")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += jugadores[i].getElementsByTagName("posicion")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += jugadores[i].getElementsByTagName("numero")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += jugadores[i].getElementsByTagName("edad")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += jugadores[i].getElementsByTagName("goles")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "</tr>";
    }

    texto += "</table>";

    document.getElementById("tablaJugadores").innerHTML = texto;
}