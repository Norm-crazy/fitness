$(document).ready(function() {
$(".push").click(function(){
  $(".pushDays").show();
});


$(".pull").click(function(){
  $(".pushDays").hide();
  $(".pullDays").fadeIn(700);
});

});
