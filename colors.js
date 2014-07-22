
var r1, g1, b1, r2 = Math.floor(Math.random() * 256), g2 = Math.floor(Math.random() * 256), b2 = Math.floor(Math.random() * 256), rStep1, gStep1, bStep1, r3, g3, b3, r4 = Math.floor(Math.random() * 256), g4 = Math.floor(Math.random() * 256), b4 = Math.floor(Math.random() * 256), rStep2, gStep2, bStep2, count;

function reset() {
	r1 = r2;
	g1 = g2;
	b1 = b2;

	r2 = Math.floor(Math.random() * 256);
	g2 = Math.floor(Math.random() * 256);
	b2 = Math.floor(Math.random() * 256);

	rStep1 = (r2 - r1) / 100;
	gStep1 = (g2 - g1) / 100;
	bStep1 = (b2 - b1) / 100;

	r3 = r4;
	g3 = g4;
	b3 = b4;

	r4 = Math.floor(Math.random() * 256);
	g4 = Math.floor(Math.random() * 256);
	b4 = Math.floor(Math.random() * 256);

	rStep2 = (r4 - r3) / 100;
	gStep2 = (g4 - g3) / 100;
	bStep2 = (b4 - b3) / 100;

	count = 0;
}

function animate() {
	$('body').css('background', 'linear-gradient(to right, rgb(' + Math.floor(r1) + ', ' + Math.floor(g1) + ', ' + Math.floor(b1) + '), rgb(' + Math.floor(r3) + ', ' + Math.floor(g3) + ', ' + Math.floor(b3) + '))');

	count++;

	if (count == 100) {
		reset();
	}

	r1 += rStep1;
	g1 += gStep1;
	b1 += bStep1;
	r3 += rStep2;
	g3 += gStep2;
	b3 += bStep2;
}

$(document).ready(function() {
	reset();
	setInterval(animate, 2);
});
