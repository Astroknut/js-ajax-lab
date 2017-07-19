
//Display list of all API objects
var listCats = function(){
	$.ajax({
		type: "GET",
		url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
		dataType: 'json',
		success: function(data){
			data.forEach(function(el){
				$('#cats').append("<li>" + el.name + " - " + el.note + "</li>");
			});
		}
	});
};


//Create object from form input
var newCat = $("#new-cat").submit(function(event) {
	event.preventDefault();

	let catObj = {
		name: $('#cat-name').val(),
		note: $('#cat-note').val()
	};


	//POST object to API(stingified version)
	$.ajax({
		type: "POST",
		url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
		dataType: 'json',
		data: JSON.stringify(catObj)
	});


	//Get API objects and display in list under form
	$.ajax({
	type: "GET",
	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
	dataType: 'json',
	success: function(data){
		data.forEach(function(el){
			$('#cats').append("<li>" + el.name + " - " + el.note + "</li>");
		});
	}
});
	//Run function to update list without page refresh
	listCats();
});

//Initial run of function to display list of objects on page load
listCats();
