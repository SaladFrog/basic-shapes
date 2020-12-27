/**
* polygon([], radius, sides, angle);
*
* polygon(canvas.width / 2, canvas.height / 2, 40, 6, Math.PI / 2);
*/
function polygon(x, y, radius, sides, angle) {
  context.beginPath();
  for (let i = 0; i < sides; i++) {
    const a = angle + Math.PI * 2.0 * (i / sides);
    let sx = x + Math.cos(a) * radius;
    let sy = y + Math.sin(a) * radius;
    context.lineTo(sx, sy);
    context.lineTo(sx, sy);
  }
  context.closePath();
}
/*
// dot to create polygon
polygon: function (out, radius, sides) {
	for(let i = 0; i < sides; i++) {
	var a = Math.PI * 2.0 / sides;
	var r = a * i;
	out[0] = Math.cos(r) * radius;
	out[1] = Math.sin(r) * radius;
	}
	return out;
}
*/
// random dot on circle
onCircle: function (out, radius) {
	var a = Math.random() * 2.0 * Math.PI;
	out[0] = Math.cos(a) * radius;
	out[1] = Math.sin(a) * radius;
	return out;
};

// random dot in circle
insideCircle: function (out, radius) {
	var a = Math.random() * 2.0 * Math.PI;
	var r = radius * Math.sqrt(Math.random());
	out[0] = Math.cos(a) * r;
	out[1] = Math.sin(a) * r;
	return out;
}; 

/**
* @param out: []
* @param dot: index of the dot
* @param scale: scale/radius pattern
* http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
*/
phyllotaxis: function (out, dot, radius) {
	//var angle = dot * 137.5; // angle in radius
	var a = dot * (137.5 * Math.PI / 180); // angle in degrees
	var r = radius * Math.sqrt(dot);
	out[0] = Math.cos(a) * r;
	out[1] = Math.sin(a) * r;
	return out;
}

