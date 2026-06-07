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

    var tarjetas = "";

    tarjetas += "<div class='tarjetas'>";

    for (i = 0; i < equipos.length; i++) {
        var nombre = equipos[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        var ciudad = equipos[i].getElementsByTagName("ciudad")[0].childNodes[0].nodeValue;
        var estadio = equipos[i].getElementsByTagName("estadio")[0].childNodes[0].nodeValue;
        var entrenador = equipos[i].getElementsByTagName("entrenador")[0].childNodes[0].nodeValue;
        var fundacion = equipos[i].getElementsByTagName("fundacion")[0].childNodes[0].nodeValue;

        if (filtro == "Todos" || ciudad == filtro) {
            tarjetas += "<div class='tarjeta'>";
            tarjetas += "<h3>";
            tarjetas += nombre;
            tarjetas += "</h3>";

            tarjetas += "<p><b>Ciudad:</b> ";
            tarjetas += ciudad;
            tarjetas += "</p>";

            tarjetas += "<p><b>Estadio:</b> ";
            tarjetas += estadio;
            tarjetas += "</p>";

            tarjetas += "<p><b>Entrenador:</b> ";
            tarjetas += entrenador;
            tarjetas += "</p>";

            tarjetas += "<p><b>Fundacion:</b> ";
            tarjetas += fundacion;
            tarjetas += "</p>";

            tarjetas += "</div>";
        }
    }

    tarjetas += "</div>";

    document.getElementById("tarjetasEquipos").innerHTML = tarjetas;
}