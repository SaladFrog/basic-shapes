/**
* Coding Challenge #14: Fractal Trees - Recursive
* https://www.youtube.com/watch?v=0jjeOYMjmDU
*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var height = 400;
var width = 400;
var angle = Math.PI / 4;

function draw() {
  ctx.translate(200, height);
  ctx.beginPath();
  branch(100);
  ctx.stroke();
}

function branch(len) {
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.translate(0, -len);
  if (len > 4) {
    // to the right to the right
    ctx.save();
    ctx.rotate(angle);
    branch(len * 0.67);
    ctx.restore();
    // to the left to the left
    ctx.save();
    ctx.rotate(-angle);
    branch(len * 0.67);
    ctx.restore();
  }
}
draw();

