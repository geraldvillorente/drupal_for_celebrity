(function ($) {

  Drupal.behaviors.homepage = {
    attach: function (context, settings) {

      $('.page-background', context).css('height', $(window).height());
    //   $(window).scroll(function () {
  		// if ( $(this).scrollTop() > 200 && !$('nav').hasClass('open') ) {
    // 	  $('nav').addClass('open');
   	// 	  $('nav').slideDown();
   	// 	} else if ( $(this).scrollTop() <= 200 ) {
   	// 	  $('nav').removeClass('open');
    // 	  $('nav').slideUp();
    //     }
    //   });
    }
  };

})(jQuery);