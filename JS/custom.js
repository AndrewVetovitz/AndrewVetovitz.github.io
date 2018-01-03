//creates the initial name on the page upon first loading it
window.onload = function() {
    if($(window).width() >= 1405){
		document.getElementById("nameHeader").innerHTML = "Andrew Gunner Vetovitz";
	}else if($(window).width() > 488 && $(window).width() < 1405){
		document.getElementById("nameHeader").innerHTML = "Andrew G. Vetovitz";
	}else{
		document.getElementById("nameHeader").innerHTML = "A.G.V.";
	}
};

//adjusts name at the top of the page upon resizing
window.onresize = function() {
    if($(window).width() >= 1405){
		document.getElementById("nameHeader").innerHTML = "Andrew Gunner Vetovitz";
	}else if($(window).width() > 488 && $(window).width() < 1405){
		document.getElementById("nameHeader").innerHTML = "Andrew G. Vetovitz";
	}else{
		document.getElementById("nameHeader").innerHTML = "A.G.V.";
	}
};

//closes the navigation menu on mobile after clicking a link
$(document).ready(function () {
    $(window).on('scroll', function(){
        $('.navbar-ex1-collapse').collapse('hide')
    });
});

//closes the navigation menu on mobil unpon resizing the viewport
$(document).ready(function () {
	$(window).on('resize', function () {
	  $('.navbar-ex1-collapse').collapse('hide')
	})
});