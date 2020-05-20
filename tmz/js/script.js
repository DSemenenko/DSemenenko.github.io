

	jQuery(".plus-menu-tics").click(function(){
        jQuery('body').toggleClass('open-left-menu');
        jQuery(".plus-menu-overlay").toggleClass('overlay-show');
    });

    jQuery(".plus-menu-overlay").click(function(){
        jQuery('body').removeClass('open-left-menu');
        jQuery(".plus-menu-overlay").removeClass('overlay-show')
    });

    jQuery(".x").click(function(){
        jQuery('body').removeClass('open-left-menu');
        jQuery(".plus-menu-overlay").removeClass('overlay-show')
    });

   