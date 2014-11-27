$(function(){
	//Initialize foundation navbar
	$(document).foundation();
	$('.home-link').addClass('current');
	//Initialize main carousel
	$("#owl-demo").owlCarousel({
	    autoPlay : 8000,
	    stopOnHover : true,
	    navigation:false,
	    paginationSpeed : 5000,
	    goToFirstSpeed : 3000,
	    singleItem : true,
	    autoHeight : true,
	    transitionStyle:"fade",
	    pagination: true,
	  });

	//initialize fade out carousel for 
	 $('.bxslider').bxSlider({
	 	mode: 'fade',
	 	auto: true,
	 	pager: false,
	 	controls: false,
	 	speed: 5000
	 });
	 
 	$('.top-bar, [data-topbar]').hasClass("expanded", function(){
 		console.log("hello world");
 	});

});