Zepto(function($){
	function closeLoader() {
		duration = 1000;
		$('#loading').animate({
	        opacity: 0
	    }, duration, "linear");
	}
	$('#loading').click(closeLoader);
	setTimeout(closeLoader, 1000*10);

	randhaiku = haiku[Math.round(Math.random() * (haiku.length-1))];
	randhaiku = randhaiku.replace(/\n/g, '<br>');
	$('#loading span').html(randhaiku);
});