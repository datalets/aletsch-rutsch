Zepto(function($){
	function closeLoader() {
		duration = 1000;
		$('#loading').animate({
	        opacity: 0
	    }, duration, "linear");
	}
	$('#loading').click(closeLoader);
	setTimeout(closeLoader, 1000*8);

	var randhaiku = haiku[Math.round(Math.random() * (haiku.length-1))];
	randhaiku = randhaiku.replace(/\n/g, '<br>');
	$('#loading span').html(randhaiku);

	var balls = [
		document.querySelector('#red-ball'),
		document.querySelector('#green-ball'),
		document.querySelector('#yellow-ball')
	];
	var datamult = [];

	var counter = 0;
	var climatedata = null;
	asyncCsv2Array("data/climate.csv", ",", function(csvdata) {
	    climatedata = csvdata;
	    console.info(climatedata.length, "rows loaded");

		var datarange = [];
		for (var jb=0; jb<balls.length; jb++) {
			if (datamult.length <= jb) datamult.push(null);
			if (datarange.length <= jb) datarange.push([null, null]);
			for (var i=1; i<climatedata.length; i++) {
				//console.log(climatedata[i][jb+1]);
				v = climatedata[i][jb+1] = parseFloat(climatedata[i][jb+1]);
				if (!isNaN(v)) {
					if (datarange[jb][0] == null || v < datarange[jb][0]) 
						datarange[jb][0] = v;
					if (datarange[jb][1] == null || v > datarange[jb][0]) 
						datarange[jb][1] = v;
					datamult[jb] = datarange[jb][1] - datarange[jb][0];
				}
			}
		}
		//console.log(datamult, datarange);

		boing = setInterval(function() {
			for (var jb=0; jb<balls.length; jb++) {
				curtemp = climatedata[counter+1][jb+1];
				//console.log(jb, counter, curtemp);
				if (!isNaN(curtemp)) {
					radius = (0.01 / datamult[jb]) * (curtemp - datarange[jb][0]);
					radius = parseFloat(balls[jb].getAttribute('radius')) + radius;
					if (radius < 5.0) {
						balls[jb].setAttribute('radius', radius);
						balls[jb].emit('blink');
						//console.log(radius);
					}
				}
			}
			counter = (counter >= climatedata.length-2) ? 0 : counter + 1;
		}, 300);

	});

});