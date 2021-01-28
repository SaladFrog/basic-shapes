const sketch = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  let width = canvas.width = 400;
  let height = canvas.height = 400;
  let angle = 0;
  let dir = Math.random() > 0.5 ? -1 : 1
  let yOff = 0;
  let loop = true;

  function start() {
    clear();
    draw();
    if(loop) {
      window.requestAnimationFrame(start);
    }  
  }

  function clear() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
  }

  function draw(dt) {
    angle += dir * 4;
    yOff += 2;

    let sx = width / 2;
    let sy = height / 2 + yOff;

    context.fillStyle = 'white';
      
    context.save();
    context.translate(sx, sy);
    context.rotate(angle * Math.PI / 180);
    context.fillRect(-20, -20, 40, 40)
    context.restore();

    if (sy > height) {
      loop = false;
    }    
  }

  return {
    start: start,
  }
}

sketch().start();
