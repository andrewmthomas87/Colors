
var audio, context, analyser, source;
audio = new Audio();
audio.src = 'Some-Nights.mp3';
audio.controls = false;
audio.loop = true;
audio.autoplay = true;

var currentR1 = 255, currentG1 = 255, currentB1 = 255, targetR1, targetG1, targetB1, currentR2 = 0, currentG2 = 0, currentB2 = 0, targetR2, targetG2, targetB2;

var interval;

var freeze = false;

function resize() {
	$('span').css('left', ($(window).width() - $('span').width()) / 2);
}

function reset1() {
	targetR1 = Math.floor(Math.random() * 256);
	targetG1 = Math.floor(Math.random() * 256);
	targetB1 = Math.floor(Math.random() * 256);
}

function reset2() {
	targetR2 = Math.floor(Math.random() * 256);
	targetG2 = Math.floor(Math.random() * 256);
	targetB2 = Math.floor(Math.random() * 256);
}

function animate() {
	var fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	var averageFrequency = 0;
	for (i = 0; i < 100; i++) {
		averageFrequency += fbc_array[i];
	}
	averageFrequency /= 10000;
	if (averageFrequency < 1) {
		console.log('Less than 1');
		return;
	}
	averageFrequency = Math.pow(averageFrequency, 1.5);
	if (targetR1 >= currentR1 + averageFrequency) {
		currentR1 += averageFrequency;
	}
	else if (targetR1 <= currentR1 - averageFrequency) {
		currentR1 -= averageFrequency;
	}
	else if (targetG1 >= currentG1 + averageFrequency) {
		currentG1 += averageFrequency;
	}
	else if (targetG1 <= currentG1 - averageFrequency) {
		currentG1 -= averageFrequency;
	}
	else if (targetB1 >= currentB1 + averageFrequency) {
		currentB1 += averageFrequency;
	}
	else if (targetB1 <= currentB1 - averageFrequency) {
		currentB1 -= averageFrequency;
	}
	else {
		reset1();
	}
	if (targetR2 >= currentR2 + averageFrequency) {
		currentR2 += averageFrequency;
	}
	else if (targetR2 <= currentR2 - averageFrequency) {
		currentR2 -= averageFrequency;
	}
	else if (targetG2 >= currentG2 + averageFrequency) {
		currentG2 += averageFrequency;
	}
	else if (targetG2 <= currentG2 - averageFrequency) {
		currentG2 -= averageFrequency;
	}
	else if (targetB2 >= currentB2 + averageFrequency) {
		currentB2 += averageFrequency;
	}
	else if (targetB2 <= currentB2 - averageFrequency) {
		currentB2 -= averageFrequency;
	}
	else {
		reset2();
	}
	$('body').css('background', 'linear-gradient(to right, rgb(' + Math.floor(currentR1) + ', ' + Math.floor(currentG1) + ', ' + Math.floor(currentB1) + '), rgb(' + Math.floor(currentR2) + ', ' + Math.floor(currentG2) + ', ' + Math.floor(currentB2) + '))');
}

$(document).ready(function() {
	document.body.appendChild(audio);
	context = new webkitAudioContext();
	analyser = context.createAnalyser();
	source = context.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(context.destination);
	resize();
	reset1();
	reset2();
	interval = setInterval(animate, 10);
});

$(window).resize(resize);

$('body').click(function() {
	freeze = !freeze;
	if (freeze) {
		audio.pause();
		clearInterval(interval);
		$('span').show();
		$('span').fadeOut(2000);
	}
	else {
		audio.play();
		interval = setInterval(animate, 10);
		$('span').hide();
	}
});
