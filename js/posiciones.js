function cargarPosiciones() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarPosiciones(this, "Todos");
        }
    };

    xhttp.open("GET", "./xml/posiciones.xml", true);
    xhttp.send();
}

function filtrarPosiciones() {
    var filtro = document.getElementById("filtroEquipo").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarPosiciones(this, filtro);
        }
    };

    xhttp.open("GET", "./xml/posiciones.xml", true);
    xhttp.send();
}

function mostrarPosiciones(xml, filtro) {
    var documento = xml.responseXML;
    var equipos = documento.getElementsByTagName("equipo");

    var resumen = "";
    var tabla = "";

    tabla += "<table>";
    tabla += "<tr>";
    tabla += "<th>Posicion</th>";
    tabla += "<th>Equipo</th>";
    tabla += "<th>JJ</th>";
    tabla += "<th>G</th>";
    tabla += "<th>E</th>";
    tabla += "<th>P</th>";
    tabla += "<th>GF</th>";
    tabla += "<th>GC</th>";
    tabla += "<th>Pts</th>";
    tabla += "</tr>";

    for (i = 0; i < equipos.length; i++) {
        var posicion = equipos[i].getElementsByTagName("posicion")[0].childNodes[0].nodeValue;
        var nombre = equipos[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        var jugados = equipos[i].getElementsByTagName("jugados")[0].childNodes[0].nodeValue;
        var ganados = equipos[i].getElementsByTagName("ganados")[0].childNodes[0].nodeValue;
        var empatados = equipos[i].getElementsByTagName("empatados")[0].childNodes[0].nodeValue;
        var perdidos = equipos[i].getElementsByTagName("perdidos")[0].childNodes[0].nodeValue;
        var favor = equipos[i].getElementsByTagName("favor")[0].childNodes[0].nodeValue;
        var contra = equipos[i].getElementsByTagName("contra")[0].childNodes[0].nodeValue;
        var puntos = equipos[i].getElementsByTagName("puntos")[0].childNodes[0].nodeValue;

        if (i == 0 && filtro == "Todos") {
            resumen += "<div class='resumen'>";
            resumen += "<h3>Equipo lider</h3>";
            resumen += "<p><b>";
            resumen += nombre;
            resumen += "</b></p>";
            resumen += "<p>Puntos: ";
            resumen += puntos;
            resumen += "</p>";
            resumen += "<p>Partidos ganados: ";
            resumen += ganados;
            resumen += "</p>";
            resumen += "</div>";
        }

        if (filtro == "Todos" || nombre == filtro) {
            tabla += "<tr>";

            tabla += "<td>";
            tabla += posicion;
            tabla += "</td>";

            tabla += "<td>";
            tabla += nombre;
            tabla += "</td>";

            tabla += "<td>";
            tabla += jugados;
            tabla += "</td>";

            tabla += "<td>";
            tabla += ganados;
            tabla += "</td>";

            tabla += "<td>";
            tabla += empatados;
            tabla += "</td>";

            tabla += "<td>";
            tabla += perdidos;
            tabla += "</td>";

            tabla += "<td>";
            tabla += favor;
            tabla += "</td>";

            tabla += "<td>";
            tabla += contra;
            tabla += "</td>";

            tabla += "<td>";
            tabla += puntos;
            tabla += "</td>";

            tabla += "</tr>";
        }
    }

    tabla += "</table>";

    document.getElementById("resumenPosiciones").innerHTML = resumen;
    document.getElementById("tablaPosiciones").innerHTML = tabla;
}