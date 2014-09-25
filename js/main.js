(function() {
    $(document).ready(function() {
	// Declare and initialize buttons
	var $intro = $("div.intro");
	var $morning = $("div.morning");
	var $school = $("div.school");
	var $evening = $("div.evening");

	// Declare and initialize icons
	var $bike = $("svg.bike");
	var $train = $("svg.train");
	var $walk = $("div.walk");

	$intro.on("click", "svg.arrow", function() {
	    $bike.attr("class", "bike commute downhill-left");
	    setTimeout(function() {
		smoothScroll.animateScroll(null, "#morning");
	    }, 2000);
	});
	
	$morning.on("click", "svg.arrow", function() {
	    $train.attr("class", "train commute downhill-right");
	    setTimeout(function() {
		smoothScroll.animateScroll(null, "#school");
	    }, 2000);
	});

	$school.on("click", "svg.arrow", function() {
	    $walk.addClass("walking");
	    setTimeout(function() {
		smoothScroll.animateScroll(null, "#evening");
	    }, 3000);
	});

	$evening.on("click", "svg", function() {
	    $walk.removeClass("walking");
	    $train.attr("class", "train commute");
	    $bike.attr("class", "bike commute");
	    smoothScroll.animateScroll(null, "#top");
	});
    });
})();
