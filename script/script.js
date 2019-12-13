var workOut = $(".pushDays, .pullDays")

$(document).ready(function() {

// Showing and hiding different workouts
  $(".push").click(function() {
    $(".pullDays").hide();
    $(".pushDays").fadeIn(300);
  });

  $(".pull").click(function() {
    $(".pushDays").hide();
    $(".pullDays").fadeIn(300);
  });

  $(".cardio").click(function() {
    $(workOut).hide();
  });



});
