// Fetch example 1
fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (error) {
	// There was an error
	console.warn(error);
});
