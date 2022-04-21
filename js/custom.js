 jQuery(document).ready(function() {

   //Menu active class script
   var url = window.location.pathname;
   if (url == "/") {
     url = "/index.php";
     url = "https://adtv.dotcomlb.com/";
   }

   var urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there

   // now grab every link from the navigation
   $('.nav ul li a').each(function() {
     // and test its normalized href against the url pathname regexp
     if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
       $(this).parent('li').addClass('active');
     }
   });

   // menu toggle

   jQuery(".toggle-btn").click(function(e) {
     e.stopPropagation();
     if (jQuery('body').hasClass("show-menu")) {
       jQuery('body').removeClass("show-menu");
     } else {
       jQuery('body').addClass("show-menu");
     }
   });
   jQuery(document).on('click', function(e) {
     e.stopPropagation();
     jQuery('body').removeClass("show-menu");
   });

   jQuery('.toggle-btn-close').click(function() {
     jQuery('body').removeClass('show-menu');
   });

   // Cart Show 

   jQuery('.cart').click(function() {
    jQuery(this).parent("li").toggleClass('show-cart');
   });

   //header fixed 
   jQuery(window).scroll(function() {
     var sticky = jQuery('.header'),
       scroll = jQuery(window).scrollTop();

     if (scroll >= 70) sticky.addClass('fixed');
     else sticky.removeClass('fixed');
   });

   // Bottom to top scroll
   jQuery("#myBtn").hide();
   jQuery(function() {
     jQuery(window).scroll(function() {
       if (jQuery(this).scrollTop() > 100) {
         jQuery('#myBtn').fadeIn();
       } else {
         jQuery('#myBtn').fadeOut();
       }
     });

     // scroll body to 0px on click
     jQuery('#myBtn').click(function() {
       jQuery('body,html').animate({
         scrollTop: 0
       }, 1000);
       return false;
     });
   });

   $('.product-slider').owlCarousel({
       loop:true,
       margin:0,
       nav:true,
       dots: false,
       items:1,
       autoplay: true,
       autoplayTimeout:5000 ,
       slideSpeed: 5000,
   });

   jQuery(".filter-button").click(function () {
       var value = jQuery(this).attr('data-filter');
       if (value == "all") {
           jQuery('.filter').show('1000');
       } else {
           jQuery(".filter").not('.' + value).hide('3000');
           jQuery('.filter').filter('.' + value).show('3000');

       }
       jQuery(".filter-button").removeClass("active")
       jQuery(this).addClass("active");
   });

      $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });


      // Product Img Js

      jQuery('.piclist li').click(function() {
        jQuery('.piclist li').removeClass('active');
        jQuery(this).addClass('active');

        var thumimg = jQuery(this).find("img").attr("src");

        jQuery('.product-mian-image img').attr('src', thumimg);
      });


      jQuery('[data-fancybox="gallery"]').fancybox({
        width: 400,
        margin : [44,0,22,0],
          thumbs : {
            autoStart : true,
            axis      : 'y'
          }
      });


 });