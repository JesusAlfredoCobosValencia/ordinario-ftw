function cargarNoticias() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarNoticias(this, "Todas");
        }
    };

    xhttp.open("GET", "./xml/noticias.xml", true);
    xhttp.send();
}

function filtrarNoticias() {
    var filtro = document.getElementById("filtroTipo").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mostrarNoticias(this, filtro);
        }
    };

    xhttp.open("GET", "./xml/noticias.xml", true);
    xhttp.send();
}

function mostrarNoticias(xml, filtro) {
    var documento = xml.responseXML;
    var noticias = documento.getElementsByTagName("noticia");

    var texto = "";

    texto += "<div class='noticias'>";

    for (i = 0; i < noticias.length; i++) {
        var tipo = noticias[i].getElementsByTagName("tipo")[0].childNodes[0].nodeValue;
        var titulo = noticias[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
        var fecha = noticias[i].getElementsByTagName("fecha")[0].childNodes[0].nodeValue;
        var contenido = noticias[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue;
        var cita = noticias[i].getElementsByTagName("cita")[0].childNodes[0].nodeValue;

        if (filtro == "Todas" || tipo == filtro) {
            texto += "<div class='noticia'>";
            texto += "<h3>";
            texto += titulo;
            texto += "</h3>";

            texto += "<p><b>Tipo:</b> ";
            texto += tipo;
            texto += "</p>";

            texto += "<p><b>Fecha:</b> ";
            texto += fecha;
            texto += "</p>";

            texto += "<p>";
            texto += contenido;
            texto += "</p>";

            texto += "<blockquote>";
            texto += cita;
            texto += "</blockquote>";

            texto += "</div>";
        }
    }

    texto += "</div>";

    document.getElementById("noticias").innerHTML = texto;
}