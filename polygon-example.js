var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

context.beginPath();

// draw circle
context.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2);
context.globalAlpha = 0.5;
context.strokeStyle = 'red';
context.stroke();

// draw polygon
polygon(canvas.width / 2, canvas.height / 2, 40, 6, Math.PI / 2);
context.strokeStyle = 'red';
context.stroke();

function polygon(x, y, radius, sides, angle) {
  context.beginPath();
  for (let i = 0; i < sides; i++) {
    const a = angle + Math.PI * 2.0 * (i / sides);
    let sx = x + Math.cos(a) * radius;
    let sy = y + Math.sin(a) * radius;
    context.lineTo(sx, sy);
    context.lineTo(sx, sy);
  }
  context.closePath();
}
