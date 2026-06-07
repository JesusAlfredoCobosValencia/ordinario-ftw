function cargarPartidos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarPartidos(this, "Todas");
        }
    };

    xhttp.open("GET", "xml/partidos.xml", true);
    xhttp.send();
}

function filtrarPartidos() {
    var filtro = document.getElementById("filtroJornada").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarPartidos(this, filtro);
        }
    };

    xhttp.open("GET", "xml/partidos.xml", true);
    xhttp.send();
}

function mostrarPartidos(xml, filtro) {
    var documento = xml.responseXML;
    var partidos = documento.getElementsByTagName("partido");

    var texto = "";

    texto += "<table>";
    texto += "<tr>";
    texto += "<th>Jornada</th>";
    texto += "<th>Local</th>";
    texto += "<th>Visitante</th>";
    texto += "<th>Fecha</th>";
    texto += "<th>Hora</th>";
    texto += "<th>Estadio</th>";
    texto += "<th>Resultado</th>";
    texto += "</tr>";

    for (i = 0; i < partidos.length; i++) {
        var jornada = partidos[i].getElementsByTagName("jornada")[0].childNodes[0].nodeValue;
        var local = partidos[i].getElementsByTagName("local")[0].childNodes[0].nodeValue;
        var visitante = partidos[i].getElementsByTagName("visitante")[0].childNodes[0].nodeValue;
        var fecha = partidos[i].getElementsByTagName("fecha")[0].childNodes[0].nodeValue;
        var hora = partidos[i].getElementsByTagName("hora")[0].childNodes[0].nodeValue;
        var estadio = partidos[i].getElementsByTagName("estadio")[0].childNodes[0].nodeValue;
        var resultado = partidos[i].getElementsByTagName("resultado")[0].childNodes[0].nodeValue;

        if (filtro == "Todas" || jornada == filtro) {
            texto += "<tr>";

            texto += "<td>";
            texto += jornada;
            texto += "</td>";

            texto += "<td>";
            texto += local;
            texto += "</td>";

            texto += "<td>";
            texto += visitante;
            texto += "</td>";

            texto += "<td>";
            texto += fecha;
            texto += "</td>";

            texto += "<td>";
            texto += hora;
            texto += "</td>";

            texto += "<td>";
            texto += estadio;
            texto += "</td>";

            texto += "<td>";
            texto += resultado;
            texto += "</td>";

            texto += "</tr>";
        }
    }

    texto += "</table>";

    document.getElementById("tablaPartidos").innerHTML = texto;
}