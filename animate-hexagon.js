const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let width = canvas.width = 400;
let height = canvas.height = 400;
let angle = 0;

function setup() {
  angle += 0.01;
  clear();
  draw();
  window.requestAnimationFrame(setup);
}

function clear() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, width, height);
}

function draw(dt) {
  const dim = Math.min(width, height);
  const time = new Date().getTime() / 1000;
  const rings = 10;
  const sides = 6;
  const maxRadius = dim * 0.75;
  
  context.strokeStyle = 'white';

  for (let j = 0; j < rings; j++) {
    const t = (j + 1) / rings;
    const radius = t * maxRadius;
    const maxThickness = maxRadius / rings * 1;
    const minThickness = maxRadius / rings * 0.01;
    const pingPong = Math.sin(t * 3.0 + time) * 0.5 + 0.5;
    const thickness = lerp(minThickness, maxThickness, pingPong);
    context.lineWidth = thickness;
    
    context.save();
    context.translate(width/2, height/2);
    context.rotate(angle);
    polygon(0, 0, radius, sides, Math.PI /2);
    context.restore();
  }
}

function polygon(x, y, radius, sides = 3, angle = 0) {
  context.beginPath();
  for (let i = 0; i < sides; i++) {
    const a = Math.PI / 2 + Math.PI * 2.0 * (i / sides);
    let sx = x + Math.cos(a) * radius;
    let sy = y + Math.sin(a) * radius;
    context.lineTo(sx, sy)
    context.lineTo(sx, sy)
  }
  context.closePath()
  context.stroke();
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end
}

setup();
