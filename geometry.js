/**
* @param out: []
* @param radius: int
*
* onCircle([], 100);
*/

/**
* onCircleInt([], radius, sides, angle);
*
onCircleInt: function (out, radius, sides = 3, angle = 0) {
	for(let i = 0; i < sides; i++) {
	var a = angle + Math.PI * 2.0 * (i / sides);
	out[0] = Math.cos(a) * radius;
	out[1] = Math.sin(a) * radius;
	}
	return out;
}
*/

/**
* onCircleInt([], radius, sides);
*/
// dot on circle
onCircleInt: function (out, radius, sides) {
	for(let i = 0; i < sides; i++) {
	var a = Math.PI * 2.0 / sides;
	var r = a * i;
	out[0] = Math.cos(r) * radius;
	out[1] = Math.sin(r) * radius;
	}
	return out;
}

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

// Phyllotaxis
/**
* @param out: []
* @param dot: index of the dot
* @param scale: scale pattern
* http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
*/
phyllotaxis: function (out, dot, scale) {
	//var angle = dot * 137.5; // angle in radius
	var a = dot * (137.5 * Math.PI / 180); // angle in degrees
	var r = scale * Math.sqrt(dot);
	out[0] = Math.cos(a) * r;
	out[1] = Math.sin(a) * r;
	return out;
}

