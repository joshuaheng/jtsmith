$(function(){
	//Initialize foundation navbar
	$(document).foundation();
	
	//Initialize main carousel
	$("#owl-demo").owlCarousel({
	    autoPlay : 3000,
	    stopOnHover : true,
	    navigation:false,
	    paginationSpeed : 1000,
	    goToFirstSpeed : 3000,
	    singleItem : true,
	    autoHeight : true,
	    transitionStyle:"fade"
	  });

	//initialize fade out carousel for 
	 $('.bxslider').bxSlider({
	 	mode: 'fade',
	 	auto: true,
	 	pager: false,
	 	controls: false,
	 	speed: 1000
	 });

	 //Detects if document size is in mobile width, toggles the nav list layout as inline or stacked.
	 $( window ).resize(function() {
	 	if($( document ).width() <= 640){
	 		$('.site-list-container').toggleClass('inline-list');
	 	}
	 	else{
	 		$('.site-list-container').toggleClass('inline-list');
	 	}
	 });
	 
});