$("#addButton").click(function () {

    const getmlsid = {
        "mlsid": document.getElementById("MLSID").value
        //"mlsid": 170307347//
    }

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://realtor.p.rapidapi.com/properties/v2/list-by-mls?mls_id=" + getmlsid.mlsid + "&offset=0&limit=10",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "f217e49726msh083ea4d114998fcp1ba18cjsn9a4d6fb8a28c",
            "x-rapidapi-host": "realtor.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        //console.log(response);

        var size1 = $("#size1");

        if (!size1.text()) {
            //property 1
            $("#address1").html(response.properties[0].address.line + ", " + response.properties[0].address.city + ", " + response.properties[0].address.state_code + " " + response.properties[0].address.postal_code);
            $("#price1").html("$" + response.properties[0].price);
            $('#size1').text(response.properties[0].building_size.size + " sqft");
            $("#rooms1").html(response.properties[0].beds);
            $("#baths1").html(response.properties[0].baths);
            $("#propertyimage1").html("<img src=" + '"' + response.properties[0].thumbnail + '"' + " alt='Property Image'>");



            //call Here.com api to get map image based on coordinates
            // Initialize the platform object:
            var platform = new H.service.Platform({
                'apikey': 'oKl0jdD1HsmhA36BhtbaQ-v8_9ewoRr2lCuC3uqMPcw'
            });

            // Obtain the default map types from the platform object
            var maptypes = platform.createDefaultLayers();

            // Instantiate (and display) a map object:
            var map = new H.Map(
                document.getElementById('mapContainer1'),
                maptypes.vector.normal.map,
                {
                    zoom: 16,
                    center: { lng: response.properties[0].address.lon, lat: response.properties[0].address.lat }
                });

            // Define a variable holding SVG mark-up that defines an icon image:
            var svgMarkup = '<svg width="24" height="24" ' +
                'xmlns="http://www.w3.org/2000/svg">' +
                '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
                'height="22" /><text x="12" y="18" font-size="12pt" ' +
                'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
                'fill="white">D</text></svg>';

            // Create an icon, an object holding the latitude and longitude, and a marker:
            var icon = new H.map.Icon(svgMarkup),
                coords = { lng: response.properties[0].address.lon, lat: response.properties[0].address.lat },
                marker = new H.map.Marker(coords, { icon: icon });

            // Add the marker to the map and center the map at the location of the marker:
            map.addObject(marker);
            map.setCenter(coords);

        } else {

            //Property 2
            $("#address2").html(response.properties[0].address.line + ", " + response.properties[0].address.city + ", " + response.properties[0].address.state_code + " " + response.properties[0].address.postal_code);
            $("#price2").html("$" + response.properties[0].price);
            $('#size2').html(response.properties[0].building_size.size + "sqft");
            $("#rooms2").html(response.properties[0].beds);
            $("#baths2").html(response.properties[0].baths);
            $("#propertyimage2").html("<img src=" + '"' + response.properties[0].thumbnail + '"' + " alt='Property Image'>");

            //call Here.com api to get map image based on coordinates
            // Initialize the platform object:
            var platform = new H.service.Platform({
                'apikey': 'oKl0jdD1HsmhA36BhtbaQ-v8_9ewoRr2lCuC3uqMPcw'
            });

            // Obtain the default map types from the platform object
            var maptypes = platform.createDefaultLayers();

            // Instantiate (and display) a map object:
            var map = new H.Map(
                document.getElementById('mapContainer2'),
                maptypes.vector.normal.map,
                {
                    zoom: 16,
                    center: { lng: response.properties[0].address.lon, lat: response.properties[0].address.lat }
                });

            // Define a variable holding SVG mark-up that defines an icon image:
            var svgMarkup = '<svg width="24" height="24" ' +
                'xmlns="http://www.w3.org/2000/svg">' +
                '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
                'height="22" /><text x="12" y="18" font-size="12pt" ' +
                'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
                'fill="white">D</text></svg>';

            // Create an icon, an object holding the latitude and longitude, and a marker:
            var icon = new H.map.Icon(svgMarkup),
                coords = { lng: response.properties[0].address.lon, lat: response.properties[0].address.lat },
                marker = new H.map.Marker(coords, { icon: icon });

            // Add the marker to the map and center the map at the location of the marker:
            map.addObject(marker);
            map.setCenter(coords);

        }

    });
});

$("#Removebutton1").click(function Clearcard1Fields() {

    document.getElementById("address1").textContent = "";
    document.getElementById("price1").textContent = "";
    document.getElementById("size1").textContent = "";
    document.getElementById("rooms1").textContent = "";
    document.getElementById("baths1").textContent = "";
    document.getElementById("propertyimage1").innerHTML = "";
    document.getElementById("mapContainer1").innerHTML = "";

});


$("#Removebutton2").click(function Clearcard2Fields() {

    document.getElementById("address2").textContent = "";
    document.getElementById("price2").textContent = "";
    document.getElementById("size2").textContent = "";
    document.getElementById("rooms2").textContent = "";
    document.getElementById("baths2").textContent = "";
    document.getElementById("propertyimage2").innerHTML = "";
    document.getElementById("mapContainer2").innerHTML = "";


});