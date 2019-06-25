(function ($) {
  "use strict";

  /* ========================================================================= */
  /*	Page Preloader
  /* ========================================================================= */

  // window.load = function () {
  // 	document.getElementById('preloader').style.display = 'none';
  // }

  $(window).on("load", function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  /* ========================================================================= */
  /*	On scroll fade/bounce effect
  /* ========================================================================= */
  var scroll = new SmoothScroll('a[href*="#"]');

  /* ========================================================================= */
  /*	Header Scroll Background Change
  /* ========================================================================= */
  
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);

    if (scroll > 200) {
      //console.log('a');
      $(".navigation").addClass("sticky-header");
    } else {
      //console.log('a');
      $(".navigation").removeClass("sticky-header");
    }
  });


})(jQuery);