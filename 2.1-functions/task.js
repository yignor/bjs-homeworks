function getSolutions( a, b, c ) {
	let roots, d = (Math.pow(b, 2) - 4 * a * c);
	if (d < 0) {
		return {d: d, roots: []};
	} else if (d = 0) {
		let x1 = (- b / (2 * a));
		return {d: d, roots: [x1]};
	} else if (d > 0) {
		let x1 = ((- b + Math.sqrt(d)) / (2 * a));
		let	x2 = ((- b - Math.sqrt(d)) / (2 * a));
		return {d: d, roots: [x1, x2]};
		
	};
}; 