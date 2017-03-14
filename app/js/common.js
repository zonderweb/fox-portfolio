// $(function() {
// // // Magnific popup
// //   $('.img-popup-link').magnificPopup({
// //   type: 'image'
// //   // other options
// // });
// });


// Page to scrool
$(function() {



    /* Smooth scrool 
    ====================== */
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });




    /* Fixed header when scroll
    ================================= */

    var headerH = $("#ps-gallery").height();

    $(document).on("scroll", function() {

        var documentScroll = $(this).scrollTop();

        if(documentScroll > headerH) {
            $("#js-nav-container").addClass("nav-fixed");
        } else {
            $("#js-nav-container").removeClass("nav-fixed");          
        }
    });












});
