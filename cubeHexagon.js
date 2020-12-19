var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var count = 6;

// create array with points
function createPlot() {
  var points = []
  for (let i = 0; i < count; ++i) {
    var scale = Math.min(canvas.width, canvas.height) / 2;
    var interval = 2 * Math.PI / count;
    var dpr = interval * i;
    var position = hexagon([], scale * 0.5, dpr);
    position[0] += canvas.width / 2;
    position[1] += canvas.height / 2;
    points.push(position)
  }
  return points;
}

// create point for hexagon
function hexagon(out, scale, dpr) {
  var r = Math.PI / 2 + dpr; // adjust the start angle with Math.PI/2
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}

// fetch the created array
const particles = createPlot();
console.log(particles);

context.rect(0, 0, canvas.width, canvas.height);
context.fill();

// draw to canvas
context.beginPath();
particles.forEach((p, i) => {
  context.lineTo(p[0], p[1]);
  if (i % 2 == 0) {
    context.lineTo(canvas.width / 2, canvas.height / 2);
    context.lineTo(p[0], p[1]);
  }
})
context.lineCap = 'round';
context.lineJoin = 'round';
context.lineWidth = 10;
context.strokeStyle = 'white';
context.closePath();
context.stroke();
