$(document).ready(function () {

  var amenitiesChecked = {};

  $('.amenities input').change(function () {

    if ($(this).is(':checked')) {

      amenitiesChecked[$(this).data('id')] = $(this).data('name');
      $('.amenities h4').text(Object.values(amenitiesChecked));

    } else {

      delete amenitiesChecked[$(this).data('id')];
      $('.amenities h4').text(Object.values(amenitiesChecked));

    }
  });


  $.get('http://localhost:5001/api/v1/status/', function (data) {
    if (data.status == "OK") {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  function searchPlacesReq() {
    $.ajax({
      url: 'http://localhost:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      success: function (places) {
        for (let place in places) {
          $('section.places').append(`<article>
              <div class="title_box">
                <h2>${place.name}</h2>
                <div class="price_by_night">${place.price_by_night}</div>
              </div>
              <div class="information">
                <div class="max_guest">${place.max_guest} Guests</div>
                <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
              </div>
             </article>`);
        }
      }
    });
  }

  $('section.filters button').click(function () {
    searchPlacesReq();
  });

});
