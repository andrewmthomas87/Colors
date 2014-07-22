
$(document).ready(function() {
	setInterval(function() {
		$('body').css('background', 'linear-gradient(to right, rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + '), rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + '))');
	}, 1000);
});
