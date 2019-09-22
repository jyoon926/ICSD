$(document).ready(function(){
    //Parallax effect
    if ($(window).width() > 600) {
		var $bg = $('#landerimg');
		var $win = $(window);
		$win.on('scroll', function() {
			var top1 = $win.scrollTop()/4;
			$bg.css('top', '' + top1 + 'px');
		});
	}
});


