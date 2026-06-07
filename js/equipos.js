function cargarEquipos() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarEquipos(this, "Todos");
        }
    };

    xhttp.open("GET", "xml/equipos.xml", true);
    xhttp.send();
}

function filtrarEquipos() {
    var filtro = document.getElementById("filtroCiudad").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarEquipos(this, filtro);
        }
    };

    xhttp.open("GET", "xml/equipos.xml", true);
    xhttp.send();
}

function mostrarEquipos(xml, filtro) {
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
        var nombre = equipos[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        var ciudad = equipos[i].getElementsByTagName("ciudad")[0].childNodes[0].nodeValue;
        var estadio = equipos[i].getElementsByTagName("estadio")[0].childNodes[0].nodeValue;
        var entrenador = equipos[i].getElementsByTagName("entrenador")[0].childNodes[0].nodeValue;
        var fundacion = equipos[i].getElementsByTagName("fundacion")[0].childNodes[0].nodeValue;

        if (filtro == "Todos" || ciudad == filtro) {
            texto += "<tr>";

            texto += "<td>";
            texto += nombre;
            texto += "</td>";

            texto += "<td>";
            texto += ciudad;
            texto += "</td>";

            texto += "<td>";
            texto += estadio;
            texto += "</td>";

            texto += "<td>";
            texto += entrenador;
            texto += "</td>";

            texto += "<td>";
            texto += fundacion;
            texto += "</td>";

            texto += "</tr>";
        }
    }

    texto += "</table>";

    document.getElementById("tablaEquipos").innerHTML = texto;
}