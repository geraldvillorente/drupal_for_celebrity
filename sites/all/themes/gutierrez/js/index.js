(function ($) {

  Drupal.behaviors.homepage = {
    attach: function (context, settings) {

      $('.page-background', context).css('height', $(window).height());
       $(document).scroll(function()
        {
          var scroll = $(this).scrollTop();
          // console.log(scroll);
          if(scroll >= 550){
            $(".test").show();
            $(".top-bar").css({"position": "fixed"});
            $(".top-bar").addClass('open')
            
          }else{
            $(".test").hide();
            $(".top-bar").removeClass('open')
            $(".top-bar").css({"position": "absolute", "top": "0px"});
    
          }
        })
    
    }
  };

})(jQuery);

$(function()
{

})