$(document).ready(function(){ 
  var i = 0;
  $('#man').attr('src', 'img/mario.gif');
  $('#img-span').animate({left: '20%'}, 1000);
  var en = 0;;
  var randomTime = 3000;
  $(this).keydown(function(e){
    console.log(randomTime)
    var k = e.which;
    var leftVal = $('#road').css('background-position-x');
    var getValofLeft = leftVal.slice(0, leftVal.indexOf('%'));
    var makeNum = parseFloat(getValofLeft,10);

    // Enemy var 
    var makeEnNum = parseInt($('#en').css('right'));
    if(en == 1){
        $('#en').animate({"left":-200},5000,function(){
          $('.en-img').remove();
          randomTime = parseInt(Math.random()*10000)
          return en = 0;
        });
      }
      
    if(k === 39){
      $('#road').css({"background-position-x": makeNum+4+'%',transition:'0.3s'});
    } else if(k === 37){
      $('#road').css({"background-position-x": makeNum-3+'%',transition:'0.2s'});
    } else if(k === 38){
      i++;
      $('#man').attr('src', 'img/1.png');
      // $('#man').attr('src', 'img/'+i+'.png');
      // if(i=== 11){
      //   i = 0;
      // }
    }
  });

 
  setInterval(function(){
    if(en == 0){
      $(".img-wrapper").append('<img id="en" src="img/en/snail.png" class="en-img">')
      en = 1;
    }
  },randomTime);


})