const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let width = canvas.width = 400;
let height = canvas.height = 400;

const rings = 10;
const sides = 6;
const radius = 50;

context.beginPath();
for (let i = 0; i < sides; i++) {
  const a = Math.PI / 2 + Math.PI * 2.0 * (i / sides);
  let sx = width / 2 + Math.cos(a) * radius;
  let sy = height / 2 + Math.sin(a) * radius;
  context.lineTo(sx,sy)
  context.lineTo(sx,sy)
}
context.closePath()
context.stroke();
