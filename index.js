$(window).scroll(function(){
    $(".bio-main").css("opacity", 1 - $(window).scrollTop() / 500);

  });
