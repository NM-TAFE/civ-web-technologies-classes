// Challenge 4 Starter
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
    // If the response is successful, get the JSON
    if (response.ok) {
        return response.json();
    }

    // Otherwise, throw an error
    throw response.status;
})
.then(function (data) {
    // This is the JSON from our response
    // Create and display the list of posts here
    // Modify this part of the code
})
.catch(function (error) {
    // There was an error
    console.warn(error);
});