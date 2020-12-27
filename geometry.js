// random dot on circle
onCircle: function (out, radius) {
	var theta = Math.random() * 2.0 * Math.PI;
	out[0] = Math.cos(theta) * radius;
	out[1] = Math.sin(theta) * radius;
	return out;
};

// random dot in circle
insideCircle: function (out, radius) {
	var theta = Math.random() * 2.0 * Math.PI;
	var r = radius * Math.sqrt(Math.random());
	out[0] = Math.cos(theta) * r;
	out[1] = Math.sin(theta) * r;
	return out;
}; 
