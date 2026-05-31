function mostrarPartido() {
    var equipo1 = "Halcones";
    var equipo2 = "Tigres";
    var fecha = "Sabado 8 de junio";
    var hora = "5:00 PM";
    var estadio = "Estadio Universitario";

    var texto = "";

    texto += "<p><b>Equipo local:</b> " + equipo1 + "</p>";
    texto += "<p><b>Equipo visitante:</b> " + equipo2 + "</p>";
    texto += "<p><b>Fecha:</b> " + fecha + "</p>";
    texto += "<p><b>Hora:</b> " + hora + "</p>";
    texto += "<p><b>Estadio:</b> " + estadio + "</p>";

    document.getElementById("partido").innerHTML = texto;
}