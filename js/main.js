var topnav_toggle = {
  init: function() {
          $("div.navbar-header button.navbar-toggle").click(function(){
            $(this).toggleClass('expanded');
            $('div.navbar-header').toggleClass('expanded');
          });
        }
}

function mapInit() {
  // don't show map on phones
  if ($(window).width() <= 768) {
    return
  }
  
  var trifiCoords = new google.maps.LatLng(40.716834,-74.005467);
  var map = new google.maps.Map(document.getElementById('map'),
      {
        center: trifiCoords,
        zoom: 16,
        mapTypeControlOptions: { 
          mapTypeIds: [] 
        }
      });
  var noPoi = [
  {
    featureType: "poi",
      stylers: [{ visibility: "off" }]
  }];

  map.setOptions({styles: noPoi});
  var marker = new MarkerWithLabel({ 
    position: trifiCoords, 
      map: map,
      title:"Tribeca Financial",
      labelContent: "Tribeca Financial",
      labelAnchor: new google.maps.Point(50,-3),
      labelClass: "pin-label",
      zIndex: 999999,
      labelStyle: { opacity: 1 }
  });
  marker.addListener('click', function() {
    window.open("https://www.google.com/maps/dir//Tribeca+Financial+Planning,+79+Worth+St+%234F,+New+York,+NY+10013/@40.716918,-74.0075296,17z/data=!4m16!1m7!3m6!1s0x89c25a2039ef570b:0x5641aae04dd60bf2!2sTribeca+Financial+Planning!3b1!8m2!3d40.716918!4d-74.0053409!4m7!1m0!1m5!1m1!1s0x89c25a2039ef570b:0x5641aae04dd60bf2!2m2!1d-74.0053409!2d40.716918?hl=e://www.google.com/maps/dir//Tribeca+Financial+Planning,+79+Worth+St+%234F,+New+York,+NY+10013/@40.716918,-74.0075296,17z/data=!4m16!1m7!3m6!1s0x89c25a2039ef570b:0x5641aae04dd60bf2!2sTribeca+Financial+Planning!3b1!8m2!3d40.716918!4d-74.0053409!4m7!1m0!1m5!1m1!1s0x89c25a2039ef570b:0x5641aae04dd60bf2!2m2!1d-74.0053409!2d40.716918?hl=en");
  });
}


$(document).ready(function() {
  topnav_toggle.init();
  mapInit();
});

