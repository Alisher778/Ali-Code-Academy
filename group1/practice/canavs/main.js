var canvas = document.getElementById('canvas').getContext('2d');
var paint = false;
var color = 'black';
  
  canvas.strokeStyle = color;
  canvas.lineWidth = 3;
  canvas.lineCap = 'round';
  img


document.addEventListener('mousedown', function(){
  paint = true;
})
document.addEventListener('mousemove', function(e){
  canvas.strokeStyle = color;
  if(paint){
    canvas.lineTo(e.pageX, e.pageY);
    canvas.stroke();
  }
});

document.addEventListener('mouseup', function(e){
  paint = false;
  canvas.moveTo(e.pageX, e.pageY);
  canvas.beginPath();
});

function changeColor(newColor) {
  console.log(newColor);
  color = newColor;
  console.log(color)
}

function saveMe() {
  canvas.save();
  console.log(canvas.save())
}

function goBack() {
  canvas.restore()
}