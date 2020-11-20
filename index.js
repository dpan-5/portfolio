$(window).scroll(function(){
    $(".bio-main").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".dp-header-background").css("opacity", 0 + $(window).scrollTop() / 900);
  });
