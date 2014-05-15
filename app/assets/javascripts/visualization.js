$(function() {
	var d = document,
		canvas = d.body.appendChild(d.createElement('canvas')),
		context = canvas.getContext('2d'),
		m = Math,
		time = 0,
		cos = m.cos,
		sin = m.sin,
		PI = m.PI;

	function resize() {
	  h = canvas.height = innerHeight;
		w = canvas.width = innerWidth;
	}

	resize();

	addEventListener('resize', resize, false);

	setInterval(function() {
		var r = function() { return Math.floor(Math.random() * 256) },
			x, y, bg_color = 'rgba(' + r() + ', ' + r() + ', ' + r() + ', 1)';

		canvas.width = canvas.width;

		context.clearRect(0, 0, w, h);
		context.fillStyle = 'rgba(255, 255, 255, 0.3)';
		context.globalCompositeOperation = 'lighter';
		
		time += 0.05;
		
		// i = 10000;
		
		while(i--) {
			r = (w + h) * 2 * (cos((time + i) * (0.025 + ((sin(time/100000) / PI) * 0.2))) / PI);

			x = sin(i) * r + (w / 2);
			y = cos(i) * r + (h / 2);

			context.fillRect(x, y, 5, 5);
		}

		$('body').css('background-color', bg_color);
	}, 4);
});
