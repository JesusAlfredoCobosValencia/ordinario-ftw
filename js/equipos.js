function cargarEquipos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarEquipos(this);
        }
    };

    xhttp.open("GET", "xml/equipos.xml", true);
    xhttp.send();
}

function mostrarEquipos(xml) {
    var documento = xml.responseXML;
    var equipos = documento.getElementsByTagName("equipo");

    var texto = "";

    texto += "<table>";
    texto += "<tr>";
    texto += "<th>Nombre</th>";
    texto += "<th>Ciudad</th>";
    texto += "<th>Estadio</th>";
    texto += "<th>Entrenador</th>";
    texto += "<th>Fundacion</th>";
    texto += "</tr>";

    for (i = 0; i < equipos.length; i++) {
        texto += "<tr>";

        texto += "<td>";
        texto += equipos[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += equipos[i].getElementsByTagName("ciudad")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += equipos[i].getElementsByTagName("estadio")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += equipos[i].getElementsByTagName("entrenador")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "<td>";
        texto += equipos[i].getElementsByTagName("fundacion")[0].childNodes[0].nodeValue;
        texto += "</td>";

        texto += "</tr>";
    }

    texto += "</table>";

    document.getElementById("tablaEquipos").innerHTML = texto;
}