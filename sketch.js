function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	lastMinute = minute();
}

function draw() {
	background(225);
	textSize(32);
	fill(180);
	let h = hour();
	let m = minute();
	let s = second();
	let start = 0 - HALF_PI;
	noStroke();
	fill('#8ebf5a');
	arc(400, 300, 600, 600, start, start + (h * PI / 12));
	fill('#d9dd91');
	arc(400, 300, 400, 400, start, start + (m * PI / 30));
	fill('#53726e');
	arc(400, 300, 200, 200, start, start + (s * PI / 30));
	var newMinute = minute();
	if (newMinute != lastMinute) {
		console.log(minute());
		lastMinute = minute();
	}
}
