$("#addButton").click(function () {
    //use free rapidapi.com jquery and api key to call realtor.com api to get property information based on MLS ID
    const getmlsid = {
        //"mlsid": document.getElementById("MLSID").value//
        "mlsid": 1735570333
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
        console.log(response);

        if ("#price1" === null) {

            $("#price1").html("$" + response.price);
            $('#size1').html(response.size + "sq ft");
            $("#rooms1").html(response.room);
            $("#baths1").html(response.bath);
            $("#yearbuilt1").html(response.year);
            $("#propertyimage1").html(`"<img src=" + ${reponse.image} + "alt='Property Image'>"`);

            //get lon and lat from reponse
            var lon = response.coord.lon;
            var lat = response.coord.lon;

            //call Here.com api to get map image based on coordinates
            // Initialize the platform object:
            var platform = new H.service.Platform({
                'apikey': 'nPC7ddCo7z7VCsBKTP46U5a2V0wpWWda8jYeuKR0IWA'
            });

            // Obtain the default map types from the platform object
            var maptypes = platform.createDefaultLayers();

            // Instantiate (and display) a map object:
            var map = new H.Map(
                document.getElementById('mapContainer1'),
                maptypes.vector.normal.map,
                {
                    zoom: 16,
                    center: `{ lng: ${lon}, lat: ${lat} }`
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
                coords = `{ lng: ${lon}, lat: ${lat} }`,
                marker = new H.map.Marker(coords, { icon: icon });

            // Add the marker to the map and center the map at the location of the marker:
            map.addObject(marker);
            map.setCenter(coords);

        } else if ("#price2" === null) {

            $("#price2").html("$" + response.price);
            $('#size2').html(response.size + "sq ft");
            $("#rooms2").html(response.room);
            $("#baths2").html(response.bath);
            $("#yearbuilt2").html(response.year);
            $("#propertyimage2").html(`"<img src=" + ${reponse.image} + "alt='Property Image'>"`);

            //get lon and lat from reponse
            var lon = response.coord.lon;
            var lat = response.coord.lon;

            //call Here.com api to get map image based on coordinates
            // Initialize the platform object:
            var platform = new H.service.Platform({
                'apikey': 'nPC7ddCo7z7VCsBKTP46U5a2V0wpWWda8jYeuKR0IWA'
            });

            // Obtain the default map types from the platform object
            var maptypes = platform.createDefaultLayers();

            // Instantiate (and display) a map object:
            var map = new H.Map(
                document.getElementById('mapContainer2'),
                maptypes.vector.normal.map,
                {
                    zoom: 16,
                    center: `{ lng: ${lon}, lat: ${lat} }`
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
                coords = `{ lng: ${lon}, lat: ${lat} }`,
                marker = new H.map.Marker(coords, { icon: icon });

            // Add the marker to the map and center the map at the location of the marker:
            map.addObject(marker);
            map.setCenter(coords);
        } else {

            alert("Max Quota Reached!");

        };
    });
});