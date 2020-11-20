$(window).scrollTop(0);

$(window).scroll(function(){
    $(".bio-main").css("opacity", 1 - $(window).scrollTop() / 500);

    $(".dp-header-background").css("opacity", -1.2 + $(window).scrollTop() / 400);
    
  });
