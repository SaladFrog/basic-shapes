var simplex = new SimplexNoise();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width = 400;
var h = canvas.height = 400;

var hue = 0;
var inc = 0.01;
var scl = 20;
var zoff = 0;

var cols = Math.floor(w / scl);
var rows = Math.floor(h / scl);

var flowfield = new Array(cols * rows);

var particles = [];
for (let i = 0; i < 20; i++) {
    pos = vector.create(Math.random() * w, Math.random() * h);
    vel = vector.create(Math.random() * 2 - 1, Math.random() * 2 - 1);
    acc = vector.create(0, 0);
    size = 8;
    particles.push({
        pos: pos,
        vel: vel,
        acc: acc,
        size: size,
    })
}

function setup() {
    requestAnimationFrame(setup);
    clear();
    flowField();
    drawParticle();
}

function clear() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
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
            
            // gl-vec2
            /*
            var v1 = vec2.create();
            var r1 = vec2.rotate([], v1, angle);
            var a1 = Math.atan2(r1[1], r1[0]);
            */
            
            flowfield[index] = v;
            xoff += inc;
            ctx.save();
            ctx.translate(x * scl, y * scl);
            ctx.rotate(v.getAngle());
            //ctx.rotate(a1);
            ctx.beginPath();
            ctx.lineTo(0, 0);
            ctx.lineTo(scl, 0);
            ctx.globalAlpha = 0.3;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();
        }
        yoff += inc;
        zoff += 0.0002;
    }
}

function drawParticle() {
    for (let i = 0; i < particles.length; i++) {
        p = particles[i];
        hue += 0.02;
        ctx.fillStyle = `hsla(${hue}, 50%, 50%, 1)`;
        ctx.fillRect(p.pos._x, p.pos._y, p.size, p.size);
        let pos = p.pos.divide(scl);
        let x = Math.floor(pos._x);
        let y = Math.floor(pos._y);
        let index = x + y * cols;
        if (pos._x >= 0 &&
            pos._x < cols &&
            pos._y >= 0 &&
            pos._y < rows) {
            v = flowfield[index];
            p.acc.addTo(v);
        }
        p.vel.addTo(p.acc);
        p.pos.addTo(p.vel);

        if (p.vel.getLength() > 2) {
            p.vel.setLength(2);
        }
        p.acc.setLength(0);

        if (p.pos._x > w) {
            p.pos._x = 0;
        } else if (p.pos._x < -p.size) {
            p.pos._x = w;
        }
        if (p.pos._y > h) {
            p.pos._y = 0;
        } else if (p.pos._y < -p.size) {
            p.pos._y = h;
        }
    }
}
setup();
