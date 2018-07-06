$(document).ready(function(uz){
  // SHOW and HIDe
  // uz('#click').click(function(){
  //   uz('#app').show(100);
  // });

  // uz('#click-hide').click(function(){
  //   uz('#app').hide(100);
  // })

  // FADE
  // uz('#click-hide').click(function(){
  //   uz('#app').fadeTo(1000, 0);
  // })
  // uz('#click').click(function(){
  //   uz('#app').fadeIn(1000);
  // })

  // Slide
  // uz('#click-hide').click(function(){
  //   uz('#app').slideUp(1000);
  // });
  // uz('#click').click(function(){
  //   uz('#app').slideDown(1000);
  // });

  // Animation

  uz('#click').click(function(){
    $('#car1 img').animate({left: "10px"}, 4500, function(){
      $(this).addClass('rotate').animate({left: "85%"}, 5000)
    })
    $('#car2 img').animate({left: 0}, 5000, function(){
      $(this).delay(100).addClass('rotate').animate({left: "85%"}, 4000)
    })
  });

  // For Stopping the Animation
  uz('#click-hide').click(function(){
    $('#car1 img').stop()
  })













});