let container = document.getElementById('postContainer')

// Fetch example 2
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
	// If the response is successful, get the JSON
	if (response.ok) {
		return response.json();
	}

	// Otherwise, throw an error
	throw response.status; //200,400,500

}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
	container.innerText = data[0].body;
}).catch(function (error) {
	// There was an error
	console.warn(error);
});