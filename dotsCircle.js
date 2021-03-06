var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var count = 30;

// create array with points
function createPlot() {
  var points = []
  for (let i = 0; i < count; i++) {
    var scale = Math.min(canvas.width, canvas.height) / 2;
    var interval = Math.PI * 2 / count;
    var dpr = interval * i;

    var position = circle([], scale * 0.5, dpr);
    
    // or skip circle fn
    // x = Math.cos(dpr) * scale;
    // y = Math.sin(dpr) * scale;
    // x += canvas.width / 2;
    // y += canvas.height / 2;
    
    position[0] += canvas.width / 2;
    position[1] += canvas.height / 2;

    points.push(position)
  }
  return points;
}

// create point for circle
function circle(out, scale, dpr) {
  // used to randomize dots in a circle shape
  //var r = Math.random() * Math.PI * 2.0;
  var r = dpr;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}

// fetch the created array
const particles = createPlot();

// draw to canvas
particles.forEach(p => {
  context.beginPath();
  context.arc(p[0], p[1], 3, 0, Math.PI * 2);
  context.stroke();
})

/*
for (let j = 0; j < 1; j++) {
  particles.forEach(p => {
    context.beginPath();
    context.arc(p[0], p[1], scale, 0, Math.PI * 2);
    context.stroke();
  })
  scale += 0.2;
}
*/
