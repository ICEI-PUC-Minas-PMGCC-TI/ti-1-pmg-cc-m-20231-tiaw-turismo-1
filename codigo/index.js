document.addEventListener("DOMContentLoaded", function() {
    
    //posição em que o mapa vai abrir
    var map = L.map('map').setView([-10, -55], 4);

    //biblioteca
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 8,
    }).addTo(map);

    //primeiro e a geolocalização, depois o pin e que fica escrito em cima dele depois a função para clicar e ir para outro site
    var brazilMarker = L.marker([-14.235, -51.925]).addTo(map);
    brazilMarker.bindPopup("Brasil");
    brazilMarker.on('mouseover', function() {
        document.getElementById('brazil-popup').style.display = 'block';
    });

    // Evento de tirar o mouse do marcador
    brazilMarker.on('mouseout', function() {
        document.getElementById('brazil-popup').style.display = 'none';
    });

    // Evento de clicar no marcador
    brazilMarker.on('click', function() {
        window.location.href = 'https://seusite.com/paises/brasil.html';
    });

    var argentinaMarker = L.marker([-34.603, -58.381]).addTo(map);
    argentinaMarker.bindPopup("Argentina");
    argentinaMarker.on('click', function() {
        window.location.href = 'https://seusite.com/paises/argentina.html';
    });
});
