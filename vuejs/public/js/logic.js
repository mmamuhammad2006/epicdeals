$(document).ready(function () {

    $(window).scroll(function () { 

        const topHeight = $(window).scrollTop();
        const mainNav = $(".main-navbar").height();
        const subNav = $(".sub-navbar").height();
        $(".main-sub-nav").height(mainNav + subNav)
        
        if(topHeight >= 300){
            $(".main-navbar").addClass("position-fixed").height();
        }else if(topHeight < 300){
            $(".main-navbar").removeClass("position-fixed").height();
        }

    });
});