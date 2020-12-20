/**
* Coding Challenge #14: Fractal Trees - Recursive
* https://www.youtube.com/watch?v=0jjeOYMjmDU
*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var height = 400;
var width = 400;

function draw() {
  ctx.translate(200, height);
  branch(100);
}

ctx.beginPath();

function branch(len) { 
  ctx.lineTo(0,0);
  ctx.lineTo(0, -len);
  ctx.translate(0, -len);
  ctx.rotate(Math.PI / 4);
  if (len > 4) {
    branch(len * 0.67);
  }
  ctx.stroke();
}
draw();
