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
});
