var countdownGenerator = function (x) {
	var array = [3, 2, 1, 0, -1];
	var x = array.length

	console.log(`T-minus ${x} 3...`)
	console.log(`T-minus ${x} 2...`)
	console.log(`T-minus ${x} 1...`)
	console.log(`T-minus ${x} Blast Off!`)
	console.log(`T-minus ${x} Rockets already gone, bub!`)

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!