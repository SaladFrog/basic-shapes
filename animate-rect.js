const sketch = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  let width = canvas.width = 400;
  let height = canvas.height = 400;
  let angle = 0;

  function start() {
    clear();
    draw();
    window.requestAnimationFrame(start);
  }

  function clear() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
  }

  function draw(dt) {
    angle += 1;
    context.fillStyle = 'white';
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(angle * Math.PI / 180);
    context.fillRect(-20, -20, 40, 40)
    context.restore();
  }

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
  }

  return {
    start: start,
  }
}

sketch().start();
