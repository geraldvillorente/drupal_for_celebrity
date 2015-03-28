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

       //Popular Article Effect

       $(".post-article img").hover( function(){
            $(this).find(".views-field-title, .views-field-created").show();
            $(".views-field-title, .views-field-created").addClass('container');
          },
          function(){
               $(this).find(".views-field-title, .views-field-created").hide();
          });
    
    }
  };

})(jQuery);