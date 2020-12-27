/**
* @param out: []
* @param radius: int
*
* onCircle([], 100);
*/
// random dot on circle
onCircle: function (out, radius) {
	var angle = Math.random() * 2.0 * Math.PI;
	out[0] = Math.cos(angle) * radius;
	out[1] = Math.sin(angle) * radius;
	return out;
};

// random dot in circle
insideCircle: function (out, radius) {
	var angle = Math.random() * 2.0 * Math.PI;
	var r = radius * Math.sqrt(Math.random());
	out[0] = Math.cos(angle) * r;
	out[1] = Math.sin(angle) * r;
	return out;
}; 
