const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let width = canvas.width = 400;
let height = canvas.height = 400;

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end
}

function draw(dt) {
	console.log(dt)
  const dim = Math.min(width, height);
  const date = new Date();
  const time = date.getMilliseconds() / 1000;

  const rings = 10;
  const sides = 6;
  const maxRadius = dim * 0.4;

  for (let j = 0; j < rings; j++) {

    const t = (j + 1) / rings;
    const radius = t * maxRadius;
    const maxThickness = maxRadius / rings * 1;
    const minThickness = maxRadius / rings * 0.001;
    const pingPong = Math.sin(t * 3.0 + time) * 0.5 + 0.5;

    const thickness = lerp(minThickness, maxThickness, pingPong);
    context.lineWidth = thickness;

    context.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = Math.PI / 2 + Math.PI * 2.0 * (i / sides);
      let sx = width / 2 + Math.cos(a) * radius;
      let sy = height / 2 + Math.sin(a) * radius;
      context.lineTo(sx, sy)
      context.lineTo(sx, sy)
    }
    context.closePath()
    context.stroke();
  }
}
window.requestAnimationFrame(draw);



