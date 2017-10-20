$(document).ready(function(){

	//Start up the skrollr object
	skrollr.init({
		forceHeight: false
	});

  // Guess which frame is "being read".
  var beingRead = function() {
    // It would be approximately centered, of equal distance from top as from bottom.
    var $screenHeight = $.waypoints('viewportHeight');
    console.log($screenHeight)
    var $pageHeight = $(".page").height();
    var offset = ($pageHeight - $screenHeight) / 2 * -1;

    return offset;
  }

  $(".page").waypoint(function(direction) {
    var mood = $(this).data("mood");
    $("#wrapper").removeClass().addClass(mood);
  }, {
    offset: beingRead()
  });
});
