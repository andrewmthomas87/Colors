
var audio, context, analyser, source;
audio = new Audio();
audio.src = 'Some-Nights.mp3';
audio.controls = false;
audio.loop = true;
audio.autoplay = true;

$(document).ready(function() {
	document.body.appendChild(audio);
	context = new webkitAudioContext();
	analyser = context.createAnalyser();
	source = context.createMediaElementSource(audio);
	source.connect(analyser);
	analyser.connect(context.destination);
});

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
	console.log(fbc_array);
	if (targetR1 > currentR1) {
		currentR1++;
	}
	else if (targetR1 < currentR1) {
		currentR1--;
	}
	else if (targetG1 > currentG1) {
		currentG1++;
	}
	else if (targetG1 < currentG1) {
		currentG1--;
	}
	else if (targetB1 > currentB1) {
		currentB1++;
	}
	else if (targetB1 < currentB1) {
		currentB1--;
	}
	else {
		reset1();
	}
	if (targetR2 > currentR2) {
		currentR2++;
	}
	else if (targetR2 < currentR2) {
		currentR2--;
	}
	else if (targetG2 > currentG2) {
		currentG2++;
	}
	else if (targetG2 < currentG2) {
		currentG2--;
	}
	else if (targetB2 > currentB2) {
		currentB2++;
	}
	else if (targetB2 < currentB2) {
		currentB2--;
	}
	else {
		reset2();
	}
	$('body').css('background', 'linear-gradient(to right, rgb(' + currentR1 + ', ' + currentG1 + ', ' + currentB1 + '), rgb(' + currentR2 + ', ' + currentG2 + ', ' + currentB2 + '))');
}

$(document).ready(function() {
	resize();
	reset1();
	reset2();
	interval = setInterval(animate, 10);
});

$(window).resize(resize);

$('body').click(function() {
	freeze = !freeze;
	if (freeze) {
		clearInterval(interval);
		$('span').show();
		$('span').fadeOut(2000);
	}
	else {
		interval = setInterval(animate, 10);
		$('span').hide();
	}
});
