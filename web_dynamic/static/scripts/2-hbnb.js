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

});
