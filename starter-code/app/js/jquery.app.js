//Prevent default form submission
$('#new-cat').on('submit', function(event){
	console.log("clicked");
	event.preventDefault();
	//push to api
});



//Collected forms data into object

	// #cat-name
	// #cat-note




//Send object to API
	//https://ga-cat-rescue.herokuapp.com/api/cats

$.post('https://ga-cat-rescue.herokuapp.com/api/cats', '{"name": " ", "note": " "}');




//Display API contents in list below forms
	//#cats(ul)
// <li>obj.name + " - " + obj.note</li>



//For loop to diaplay all objs as separate li