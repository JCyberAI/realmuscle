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

//MaterialBoxed Zoom
$(document).ready(function(){
    $('.materialboxed').materialbox();
    });