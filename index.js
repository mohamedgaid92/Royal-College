

$(function(){

 //scroll to top
  var top = $(".scroll");

 $(window).scroll(function(){
   if($(this).scrollTop() > 500){
     top.show();
   }else{
     top.hide();
   }
 });
 top.on("click",function(){
   $("body,html").animate({scrollTop:0},1000)
 });

 //scroll to top


// start upper-bar
  setTimeout(function(){
    $("#search").toggleClass("fa-search fa-times");
    $(".search-box").slideUp(1500);
  },3000)

  $("#search").on("click",function(){


    if($(this).hasClass("fa-search")){
        $(".search-box").slideDown(1500);

    }
    else{
      $(".search-box").slideUp(1500);
    }
    $(this).toggleClass("fa-search fa-times");
  });

// end upper-bar

// start carousle


  setInterval(function(){


      $(".active .carousel-info").slideDown(400);


  },2000);

  $("#main-slider").on("mouseenter",function(){
    $("#main-slider .carousel-control-next,#main-slider .carousel-control-prev").css("display","block");

  })

  $("#main-slider").on("mouseleave",function(){
    $("#main-slider .carousel-control-next,#main-slider .carousel-control-prev").css("display","none");

  })




// end carousle



 // end popular courses

$(".course").on("mouseenter",function(){
  $(this).children("p").slideDown(200);
});

$(".course").on("mouseleave",function(){
  $(this).children("p").slideUp(200);
});


// start popular courses

//start upcoming events


$(".upcoming-events .event").on("mouseenter",function(){
  $(this).children(".left-event").children("span").css("color","#49c32c");
  $(this).children(".right-event").children("p").css("color","#000");
});
$(".upcoming-events .event").on("mouseleave",function(){
  $(this).children(".left-event").children("span").css("color","#8b8b8b");
  $(this).children(".right-event").children("p").css("color","#585858");
});


//end upcoming events


// start do you like

$(window).scroll(function(){
  if($(this).scrollTop() >= $("#target-pargraph").offset().top - 700){

      $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

  }
});
// start do you like

// start why choose us

$(".why-choose .list ul li").on("mouseenter",function(){
  $(this).css("color","#585858");
  $(this).children("span").css("color","#49c32c");
});
$(".why-choose .list ul li").on("mouseleave",function(){
  $(this).css("color","#000");
  $(this).children("span").css("color","#b2b5b7");
});



// end why choose us







});
