// Fetch example 2
fetch('https://jsonplaceholder.typicode.com/postses')
.then(function (response) {
	// If the response is successful, get the JSON
	if (response.ok) {
		return response.json();
	}

	// Otherwise, throw an error
	throw response.status;

}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (error) {
	// There was an error
	console.warn(error);
});