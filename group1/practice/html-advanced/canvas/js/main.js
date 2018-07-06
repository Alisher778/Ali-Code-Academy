var can = document.getElementById('canvas').getContext('2d');
var canIprint = false;
var canvas = document.getElementById('canvas');
var color = 'black';
can.strokeStyle= color;
can.lineWidth = 2;

var pageX = 0;
var pageY = 0;

document.addEventListener('mousedown', function(e) {
  canIprint = true;
});

document.addEventListener('mouseup', function(e) {
  canIprint = false;
  can.beginPath()
});

document.addEventListener('mousemove', function(e) {
  can.strokeStyle= color;
  if(canIprint){
    can.lineTo(e.pageX-canvas.offsetLeft, e.pageY-canvas.offsetTop);
    can.stroke();
  }
  
});

function chooseColor(newColor){
  color = newColor.id;
  newColor.style.border = "4px solid #fff"
  
}

var colorBtns = document.querySelectorAll('.colors');
for(var i = 0; i< colorBtns.length; i++){
  var col = colorBtns[i].id;
  colorBtns[i].style.backgroundColor = col;
}

//can.moveTo(e.pageX, e.pageY)
//can.lineTo(canvas.width - moveToX, e.pageY)
//can.lineTo(e.pageX, canvas.height - moveToY)
//can.lineTo(canvas.width - moveToX, canvas.height - moveToY)



