var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

const size = 20;
const columns = Math.floor(canvas.width / size);
const rows = Math.floor(canvas.height / size);
const points = createGrid();

points.forEach(([u, v]) => {
  const x = u * canvas.width;
  const y = v * canvas.height;
  ctx.beginPath();
  ctx.arc(x, y, 1, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
});

// test shape
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2);
ctx.globalAlpha = 0.5;
ctx.strokeStyle = 'red';
ctx.stroke();

function createGrid() {
const points = [];
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
        const u = x / columns;
        const v = y / rows;
      points.push([u, v]);
    }
  }
  return points;
}
