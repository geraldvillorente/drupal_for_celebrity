(function ($) {

  Drupal.behaviors.homepage = {
    attach: function (context, settings) {

      $('.page-background', context).css('height', $(window).height());
       $(document).scroll(function()
        {
          var scroll = $(this).scrollTop();
          // console.log(scroll);
          if(scroll >= 550){
            $(".test").slideDown();
            $(".top-bar").css({"position": "fixed"});
            $(".top-bar").addClass('open')
            
          }else{
            $(".test").hide();
            $(".top-bar").removeClass('open')
            $(".top-bar").css({"position": "absolute", "top": "0px"});
             $(".not-front .top-bar").css({"position": "relative", "top": "0px"});
    
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

       //Add Div Slicer

       $('.views-row').after('<div class="slicer"></div>');

       $('.block-title').after('<center><div class="liner"></div></center>');


       $('.front .l-main').after('<div class="row large-12"><div class="slicer-full"></div></div>');

       $('.no-sidebars .l-main').after('<div class="row large-12"><div class="slicer-full"></div></div>');
       //Add Twitter Icons

       $('.main .views-field-tweets').prepend('<span><img src="/sites/all/themes/gutierrez/images/twit.png"</span>');

       //Add Facebook Icons

       $('.main .views-field-fb-likes').prepend('<span><img src="/sites/all/themes/gutierrez/images/fb.png"</span>');


       $(".toggle-topbar").click( function(){
            $('.toggle').show();

            $(this).find(".has-dropdown").click( function(){
                 
                $(".dropdown").show();

            });

          });


    
    }
  };



})(jQuery);