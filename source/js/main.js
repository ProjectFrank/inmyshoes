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

	// Returns true if element is visible in viewport
	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();
	    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
	}

	$(window).on("scroll", function () {	    
	    // Activate animation when next section scrolls into view
	    if (isScrolledIntoView("#morning")) {
		$bike.attr("class", "bike commute downhill-left");
	    }
	    if (isScrolledIntoView("#school")) {
		$train.attr("class", "train commute downhill-right");
	    }
	    if (isScrolledIntoView("#evening")) {
		$walk.removeClass("no-transition");
		$walk.addClass("walking");
	    }
	    
	    // Reset animation when icon scrolls out of view
	    if (!isScrolledIntoView($bike)) {
		$bike.attr("class", "bike commute no-transition");
	    }
	    if (!isScrolledIntoView($train)) {
		$train.attr("class", "train commute no-transition");
	    }
	    if (!isScrolledIntoView($walk)) {
		$walk.addClass("no-transition");
		$walk.removeClass("walking");
	    }
	});
    });
})();
