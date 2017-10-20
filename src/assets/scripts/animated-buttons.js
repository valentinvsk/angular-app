
$(window).on("load", function() {
  $("#btn_instant").on("click", function() {
    $(".shown").removeClass("shown");
    $(".instant")
      .find(".popdown")
      .addClass("shown");
  });
  $("#btn_max").on("click", function() {
    $(".shown").removeClass("shown");
    $(".max")
      .find(".popdown")
      .addClass("shown");
  });
  $("#btn_lost").on("click", function() {
    $(".shown").removeClass("shown");
    $(".lost")
      .find(".popdown")
      .addClass("shown");
  });
  $("#btn_optimal").on("click", function() {
    $(".shown").removeClass("shown");
    $(".optimal")
      .find(".popdown")
      .addClass("shown");
  });
});
