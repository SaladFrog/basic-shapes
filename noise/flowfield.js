var simplex = new SimplexNoise();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width = 400;
var h = canvas.height = 400;

var inc = 0.01;
var scl = 20;
var zoff = 0;

var cols = Math.floor(w / scl);
var rows = Math.floor(h / scl);

function setup() {
  requestAnimationFrame(setup);
  clear();
  flowField();
}

function flowField() {
  var yoff = 0;
  for (let y = 0; y < rows; y++) {
    var xoff = 0;
    for (let x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = simplex.noise3D(xoff, yoff, zoff) * Math.PI * 2;
      var v = vector.create();
      v.setAngle(angle);
      xoff += inc;
      ctx.save();
      ctx.translate(x * scl, y * scl);
      ctx.rotate(v.getAngle());
      ctx.beginPath();
      ctx.lineTo(0, 0);
      ctx.lineTo(scl, 0);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'white';
      ctx.stroke();
      ctx.restore();
    }
    yoff += inc;
    zoff += 0.0002;
  }
}

function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);
}

// simple vector library for 2D canvas
// only to make this example to work
var vector = {
  x: 1,
  y: 0,
  create: function(x, y) {
    var obj = Object.create(this);
    obj.setX(x || this.x);
    obj.setY(y || this.y);
    return obj;
  },
  setX: function(value) {
    this.x = value;
  },
  setY: function(value) {
    this.y = value;
  },
  setAngle: function(angle) {
    var length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  },
  getAngle: function() {
    return Math.atan2(this.y, this.x);
  },
  getLength: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
}
setup();
