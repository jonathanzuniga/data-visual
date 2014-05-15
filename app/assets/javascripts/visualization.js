$(function() {
	var d = document,
		canvas = d.body.appendChild(d.createElement('canvas')),
		context = canvas.getContext('2d'),
		time = 0,
		w = 1,
		h = 1,
		cos = Math.cos,
		sin = Math.sin,
		PI = Math.PI;
	
	function resize() {
		canvas.width = w = innerWidth;
		canvas.height = h = innerHeight;
	}

	addEventListener('resize', resize, false);

	resize();
	
	setInterval(function() {
		context.clearRect(0, 0, w, h);
		context.fillStyle = 'rgba(0, 0, 255, 0.5)';
		context.globalCompositeOperation = 'lighter';
		
		time += 0.1;
		
		i = 10000;
		
		while(i--) {
			r = ((w + h) * 0.4) * (cos((time + i) * (0.05 + ((sin(time * 0.00002) / PI) * 0.2))) / PI);
			context.fillRect(sin(i) * r + (w/2), cos(i) * r + (h/2), 1, 1);
		}
	}, 16);
})
