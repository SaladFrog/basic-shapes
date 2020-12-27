/**
* <canvas id='canvas'></canvas>
*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

const size = 20;
const columns = Math.floor(canvas.width / size) + 1;
const rows = Math.floor(canvas.height / size) + 1;

const points = createGrid();

points.forEach(([u, v]) => {
  const x = u * canvas.width;
  const y = v * canvas.height;

  ctx.beginPath();
  ctx.arc(x, y, 1, 0, Math.PI * 2);
  ctx.fillStyle = 'black';
  ctx.fill();
});

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
