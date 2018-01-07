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

	$('#search-form').submit(function(e) {
		e.preventDefault();
	});	
}); 

//https://www.googleapis.com/youtube/v3/search?part=snippet&q=Adele&key=AIzaSyAf4IEgy469xdmJu7VmYT3wOwpfvZrtwd4

function search() {
	//clear results

	console.log('inside search')

	$('#results').html('');

	$('#buttons').html('');

	// get form input
	q = $('#query').val();

	// Run get request on API

	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
			part: 'snippet,id',
			q:q,
			type:'video',
			key:'AIzaSyAf4IEgy469xdmJu7VmYT3wOwpfvZrtwd4'},
			function(data) {
				var nextPageToken = data.nextPageToken;
				var prevPageToken = data.prevPageToken;
				console.log(data);

				$.each(data.items, function(i, item){
					var output = getOutput(item);

					// display results 

					$('#results').append(output);
				});
			}
		);	
}

