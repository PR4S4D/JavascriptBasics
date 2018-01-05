// Searchbar handler

$(function() {
	var searchField = $('#query');
	var icon = $('#searchbutton');


	// Focus event handler
	$(searchField).on('focus', function() {
		$(this).animate({
			width: '100%'
		},400);
		$(icon).animate({
			right: '10px'
		},400);
	});

	//Blur Event Handler
		$(searchField).on('blur', function() {
		 if (searchField.val() == '') {
		 	$(searchField).animate({
		 		width: '45%'
		 	},400);

		 	$(icon).animate({
		 		right: '360px'
		 	}, 400);
		 }

	});
}); 