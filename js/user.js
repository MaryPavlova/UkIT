$(document).ready(function(){

			
			$('.slider').slick({
  
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  		responsive: [{
  				breakpoint:767,
  				settings: {
  					slidesToShow: 1,
					  slidesToScroll: 1,
					  autoplay: true,
					  autoplaySpeed: 5000,
					  variableWidth: false,
  				}

}
  				]
});
			});


					
					 			




