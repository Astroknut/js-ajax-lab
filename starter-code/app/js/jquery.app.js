//Prevent default form submission

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



var newCat = $("#new-cat").submit(function(event) {
	event.preventDefault();

	let catObj = {
		name: $('#cat-name').val(),
		note: $('#cat-note').val()
	};
	console.log(catObj);

	$.ajax({
		type: "POST",
		url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
		dataType: 'json',
		data: JSON.stringify(catObj)
	});

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
	listCats();
});

listCats();



//For loop to diaplay all objs as separate li