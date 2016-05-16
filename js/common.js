$(function() {

	function heightDetect() {
		$(".main-head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".main-nav").click(function(){
		$(".main-nav").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".header-text").css("opacity", "1")
	})

	$(".toggle_mnu").click(function() {
		if ($(".main-nav").is(":visible")) {
			$(".main-nav").fadeOut(600);
			$(".header-text").css("opacity", "1")
			$(".main-nav li").removeClass("fadeInDown animated")
		} else {
			$(".main-nav").fadeIn(600);
			$(".header-text").css("opacity", ".1")
			$(".main-nav li").addClass("fadeInDown animated")
		};
	});

	$(".main-nav ul li a").mPageScroll2id();


	$(".about-text").animated("fadeInRight");
	$(".header-section").animated("fadeInUp");
	$(".img-wrap").animated("flipInY");
	$(".cw-right").animated("fadeInRight");
	$(".cw-left").animated("fadeInLeft");
	// $(".contacts-wrapper").animated("fadeInUp");

	$(".s-skills").waypoint(function(){
		$(".rate-maker").each(function(index) {
			var ths = $(this);
			var atr = ths.data("width");
			var res = atr + "%";
			setTimeout(function() {
				ths.animate({width: res});
			}, 100*index);
		});

		this.destroy();

	}, {
		offset: "55%"
	});

	$(".slider").owlCarousel({
		loop:true,
		items:1,
		nav:true,
		navText:false,
		navSpeed:1000
	});

	$(".s-contacts").waypoint(function(dir){
		console.log(1);
	}, {
		offset: "100%"
	});



});

$(document).on("ready",function(){
	$(".header-text h1").addClass("fadeInDown animated");
	$(".header-text p").addClass("fadeInUp animated");
})