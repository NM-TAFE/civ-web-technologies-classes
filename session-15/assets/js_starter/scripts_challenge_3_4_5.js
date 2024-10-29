// Challenge 3
function originalFunction() {
    // Start fetching data from the server
    fetch('https://jsonplaceholder.typicode.com/posts/') // Step 1: Initiate an HTTP request
        .then(function (response) {
            // Step 2: Wait for the response to arrive
            return response.json(); // Step 3: Parse the response as JSON
        })
        .then(function (data) {
            // Step 4: Handle the parsed JSON data
            console.log('Traditional Fetch', data); // Step 5: Display the data
        });

    // This message will be displayed immediately
    console.log('Traditional Message'); // Step 6: Display this message
}

originalFunction();


