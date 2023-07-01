document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-10, -55], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 8,
    }).addTo(map);

    // Ícone personalizado preto
    var blackIcon = L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    function addMarker(map, lat, lng, countryName, documentType, currency, url) {
        var marker = L.marker([lat, lng], { icon: blackIcon }).addTo(map);
        marker.bindPopup(countryName);

        marker.on('mouseover', function (e) {
            this.openPopup();
            this.setPopupContent("País: " + countryName + "<br>Documento: " + documentType + "<br>Moeda: " + currency);
        });

        marker.on('mouseout', function (e) {
            this.closePopup();
        });

        marker.on('click', function (e) {
            window.location.href = url;
        });
    }

    // americas do sul
    addMarker(map, -14.235, -51.925, "Brasil", "RG", "Real", "./paises/brasil.html");
    addMarker(map, -34.603, -58.381, "Argentina", "DNI", "Peso Argentino", "./paises/argentina.html");
    addMarker(map, -16.409, -71.537, "Peru", "DNI", "Sol Peruano", "./paises/peru.html");
    addMarker(map, -33.448, -70.653, "Chile", "RUT", "Peso Chileno", "./paises/chile.html");
    addMarker(map, -0.229, -78.524, "Equador", "Cédula", "Dólar Americano", "./paises/equador.html");
    addMarker(map, -25.263, -57.575, "Paraguai", "Cédula", "Guarani Paraguaio", "./paises/paraguai.html");
    addMarker(map, -16.290, -63.588, "Bolívia", "CI", "Boliviano", "./paises/bolivia.html");
    addMarker(map, 4.710, -74.072, "Colômbia", "CC", "Peso Colombiano", "./paises/colombia.html");
    addMarker(map, -32.5228, -55.7658, "Uruguai", "CI", "Peso Uruguaio", "./paises/uruguai.html");
    addMarker(map, 10.4880, -66.8792, "Venezuela", "CI", "Bolívar Soberano", "./paises/venezuela.html");
    addMarker(map, 3.9339, -53.1258, "Guiana Francesa", "ID", "Euro", "./paises/guianafrancesa.html");
    addMarker(map, 5.852, -55.2038, "Suriname", "ID", "Dólar Surinamês", "./paises/suriname.html");
    addMarker(map, 4.860416, -58.93018, "Guiana", "ID", "Dólar Guianense", "./paises/guiana.html");

    // america do norte
    addMarker(map, 56.1304, -106.3468, "Canadá", "CAD", "Dólar Canadense", "./paises/canada.html");
    addMarker(map, 37.0902, -95.7129, "Estados Unidos", "USD", "Dólar Americano", "./paises/eua.html");
    addMarker(map, 23.6345, -102.5528, "México", "MXN", "Peso Mexicano", "./paises/mexico.html");
    addMarker(map, 64.2008, -149.4937, "Alasca (EUA)", "USD", "Dólar Americano", "./paises/eua.html");
    
    // america central
    addMarker(map, 21.5218, -77.7812, "Cuba", "CUP", "Peso Cubano", "./paises/cuba.html");
    addMarker(map, 18.7357, -70.1627, "República Dominicana", "DOP", "Peso Dominicano", "./paises/republicadominicana.html");
    addMarker(map, 15.7835, -90.2308, "Guatemala", "GTQ", "Quetzal Guatemalteco", "./paises/guatemala.html");
    addMarker(map, 18.9712, -72.2852, "Haiti", "HTG", "Gourde Haitiano", "./paises/haiti.html");
    addMarker(map, 15.199999, -86.241905, "Honduras", "HNL", "Lempira Hondurenha", "./paises/honduras.html");
    addMarker(map, 12.8654, -85.2072, "Nicarágua", "NIO", "Córdoba Nicaraguense", "./paises/nicaragua.html");
    addMarker(map, 13.7942, -88.8965, "El Salvador", "USD", "Dólar Americano", "./paises/el-salvador.html");
    addMarker(map, 9.7489, -83.7534, "Costa Rica", "CRC", "Colón Costa-riquenho", "./paises/costarica.html");
    addMarker(map, 8.5379, -80.7821, "Panamá", "PAB", "Balboa Panamenho", "./paises/panama.html");
    addMarker(map, 18.1096, -77.2975, "Jamaica", "JMD", "Dólar Jamaicano", "./paises/jamaica.html");
    addMarker(map, 10.6918, -61.2225, "Trinidad e Tobago", "TTD", "Dólar de Trinidad e Tobago", "./paises/trinidad-e-tobago.html");
    addMarker(map, 25.0343, -77.3963, "Bahamas", "BSD", "Dólar das Bahamas", "./paises/bahamas.html");
    addMarker(map, 17.1899, -88.4976, "Belize", "BZD", "Dólar de Belize", "./paises/belize.html");
    addMarker(map, 13.1939, -59.5432, "Barbados", "BBD", "Dólar de Barbados", "./paises/barbados.html");
    addMarker(map, 17.0608, -61.7964, "Antígua e Barbuda", "XCD", "Dólar do Caribe Oriental", "./paises/antigua-e-barbuda.html");
    addMarker(map, 15.4149, -61.3705, "Dominica", "XCD", "Dólar do Caribe Oriental", "./paises/dominica.html");
    addMarker(map, 17.3578, -62.7830, "São Cristóvão e Nevis", "XCD", "Dólar do Caribe Oriental", "./paises/sao-cristovao-nevis.html");
    addMarker(map, 13.9094, -60.9789, "Santa Lúcia", "XCD", "Dólar do Caribe Oriental", "./paises/santa-lucia.html");
    addMarker(map, 13.2528, -61.1971, "São Vicente e Granadinas", "XCD", "Dólar do Caribe Oriental", "./paises/sao-vicente-granadinas.html");
    addMarker(map, 12.1165, -61.6790, "Granada", "XCD", "Dólar do Caribe Oriental", "./paises/granada.html");
    addMarker(map, 15.7835, -90.2308, "Guatemala", "GTQ", "Quetzal Guatemalteco", "./paises/guatemala.html");
    addMarker(map, 17.1899, -88.4976, "Belize", "BZD", "Dólar de Belize", "./paises/belize.html");
    addMarker(map, 13.7942, -88.8965, "El Salvador", "USD", "Dólar Americano", "./paises/el-salvador.html");
    addMarker(map, 15.199999, -86.241905, "Honduras", "HNL", "Lempira Hondurenha", "./paises/honduras.html");
    addMarker(map, 12.8654, -85.2072, "Nicarágua", "NIO", "Córdoba Nicaraguense", "./paises/nicaragua.html");
    addMarker(map, 8.5379, -80.7821, "Panamá", "PAB", "Balboa Panamenho", "./paises/panama.html");




});
