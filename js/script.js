$(document).ready(function(){
	$("a").click(function(ev){
		if (this.hash!="") {
			ev.preventDefault();
			var hash=this.hash;
			$("html,body").animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash=hash;
			});
		}
	});
});