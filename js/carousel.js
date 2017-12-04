jQuery( document ).ready(function( $ ) {
    //RULES
    $('.rules').on('click', function(){
        $(this).find('.inner_rule').slideToggle();
        $(this).toggleClass('rules_hovered');
    });
    //RULES



$('.lSPager').wrap("<div class='bublik'></div>")
owl = $('.slider').owlCarousel({
    stagePadding: 200,
    loop:true,
    autoHeight: false,
    margin:0,
    autoplay:true,
    smartSpeed: 1000,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    nav:false,
    dragBeforeAnimFinish : false,
    items:1,
    dots:true,
    lazyLoad: false,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        768:{
            items:1,
            stagePadding: 125
        },
        1000:{
            items:1,
            stagePadding: 150
        },
        1200:{
            items:1,
            stagePadding: 200
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 380
        },
        1800:{
            items:1,
            stagePadding: 450
        }
    }
})
    $('.slider_post').owlCarousel({
        loop:true,
        autoHeight: true,
        nav:true,
        autoplay:true,
	    smartSpeed: 1000,
	    autoplayTimeout:4000,
	    autoplayHoverPause:true,
        items: 1,
    });


    $(document).on('click', '.owl-item', function(){
        if ( $(this).prev().hasClass('active') ){
            $('.owl-next').click();

        }  
        if ( $(this).next().hasClass('active') ){
 
             $('.owl-prev').click();
        }
    });
    function set_item_height() {
 	var visotka = $('.owl-item li img').width();
 	var tekila = (visotka / 3 )*2;
 	$('.owl-item li img').css('height', tekila + '!important');
	}set_item_height();

    $('.owl-dots').wrap("<div class='new'></div>");
    owl.on('changed.owl.carousel', function() {
    	set_item_height();
    });

 /*   owl.on('changed.owl.carousel', function(e) {

        var main = $('.owl-dots');
        var current = $('.owl-dots .active');
        var dots = $('.owl-dots .active').index();
        var left = -28;
        var n = $( ".owl-dots .owl-dot" ).size();
        test = n - dots;

        console.log(test);

        var position = main.position();
        
            if ( n > 5 ){
                $('.owl-dot').removeClass('tesla');

                if (test > 3){

                    if ( dots > 2 && test != 3){
                        main.css('left', position.left + left );

                        $('.owl-dot').removeClass('tesla');

                        current.prev().addClass('tesla');
                        current.prev().prev().addClass('tesla');

                        current.next().addClass('tesla');
                        current.next().next().addClass('tesla');
                    }else if( test < 4){
                        $('.owl-dot').removeClass('tesla');
                    }else{
                        main.css('left', '0');
                    }
                }
            }
    });*/


    //Отступ для дотов в слайдере

    var news = $( ".owl-dots .owl-dot" ).size();
    var doter = (news * 14) - 10;
    $('.new').css('margin-left', - doter);   


    


    //menu
    $('.trigger').on('click', function(){
        $('.menushka').show('');
        $('.closers').show('');
        $('html').css('overflow-y','hidden');
    });

    $('.closers').on('click', function(){
        $('.menushka').hide('');
        $(this).hide('');
        $('html').css('overflow-y','scroll');
    });

    if ( $('.head_page h1').length){
        var title = $('.head_page h1').text();
        $('.kekk').each(function(){
            var name = $(this).text();
            console.log(name);
            console.log(title);
            if( title === name ){
                $(this).parent().parent().addClass('cornet');
            }
        });
    }

    function height_hall_page() {
        var bh = $('.bronka_side').outerHeight();
        var hh = $('.hp .left_side').outerHeight(true);
        console.log(hh);
        if ( bh < hh ){
            $('.hp').css('min-height',hh);  
        } else{
            $('.hp').css('height',bh+100);
            $('.hp .left_side').css('min-height', bh+100);
        }
        
    }
    height_hall_page();
    setTimeout(height_hall_page, 1000);
    function height_hall_page2() {
        var bh = $('.bronka_side').outerHeight();
        var hh = $('.hp2 .left_side').outerHeight();
        if ( bh < hh ){
            $('.hp2').css('min-height',bh + 30);  
        } else{
            $('.hp2').css('height',bh+100);
            $('.hp2 .left_side').css('min-height', bh+100);
        }
        
    }
    height_hall_page2();
   
     $( window ).resize(function() {
        height_hall_page();
        set_item_height();
    });
    //end of rules and other
    $('.popup-gallery, .gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery:{enabled:true},
    });
    $('.popup-gallery2').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery:{enabled:true},
    });
    $('.ig-item').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery:{enabled:true},
    });
    $('.mer_images').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery:{enabled:true},
    });
    


});

