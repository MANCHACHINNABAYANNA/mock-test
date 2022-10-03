$(function(){
    $("#food-dish-list").owlCarousel({
        loop:true,
        nav: false,
        dots:true,
        autoplay:true,
        autoplayTimeout:1000,
        items:3,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoplayTimeout:2000,
            },
            600:{
                items:3,
                autoplayTimeout:2000,
            },
            1000:{
                items:3,
                autoplayTimeout:2000,
            }
        }
    })





    $('.login').on('click',function(){
        // console.log('hello')
        $("#login-popup").dialog("open");
    })

    $('#login-popup').dialog({
        modal:false,
        draggable:true,
        autoOpen:false,
        open:function(event,ui){
            $('.popup').css("display","block");
            $(event.target)
            .dialog("widget")
            .css({
                position:fixed
            })
            .position({
                my:"center",at:"center",of:window
            })
        },
        close:function(event, ui){
            $('.popup').css("display","none");
        },
        width: 500,
        title:'Login area',
        resizable:false,
    })
     $('.hamburger-menu').on('click',function(){
         $('.menu-list').slideToggle()
     })
    
})