$(document).ready(function() {

  $(window).scrollTop(0);

  $(window).scroll(function(){
    

    $(".bio-main").css("opacity", 1.3 - $(window).scrollTop() / 400);

    $(".dp-header-background").css("opacity", -1.2 + $(window).scrollTop() / 300);

    // $(".projects-main").css("opacity", -1.2 + $(window).scrollTop() / 300);
    // if ($(window).scrollTop() > 900) {
    //   $("svg").css("visibility", "visibile");
    // }
    
  });



});
