$(document).ready(function() {
	var max_item = $('.ratenode').length;
	var currentRating = 0;
	//only one can use
	function reset() {
		for (var i = 1; i <= max_item; i++) {
			$("#" + i).removeClass('rating nomal');
		}
	}

	$('.ratenode').bind('mouseover', function(event) {
		reset();
		var currentRating = parseInt(event.currentTarget.id);
		for (var i = 1; i <= currentRating; i++) {
			$("#" + i).addClass('rating');
		}
		for (var i = currentRating + 1; i <= max_item; i++) {
			$("#" + i).addClass('nomal');
		}
		onChange(currentRating);
	});

	function getCurrentRating() {
		return currentRating;
	}

	//overwrite
	function onChangeRating(id) {

	}

});