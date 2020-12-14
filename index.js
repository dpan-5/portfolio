$(window).scroll(function () {
  $(".bio-main").css("opacity", 1.3 - $(window).scrollTop() / 400);

  $(".dp-header-background").css("opacity", -1.2 + $(window).scrollTop() / 300);

  // $(".projects-main").css("opacity", -1.2 + $(window).scrollTop() / 300);
  // if ($(window).scrollTop() > 900) {
  //   $("svg").css("visibility", "visibile");
  // }
});

// Blinking cursor effect
let cursor = true;

setInterval(() => {
  if (cursor) {
    document.getElementById("cursor").style.opacity = 0;
    cursor = false;
  } else {
    document.getElementById("cursor").style.opacity = 1;
    cursor = true;
  }
}, 500);
