// Challenge 3
/**
 * Get an article by id
 * @param id
 */
function getArticleByID(id) {
  fetch($`https://jsonplaceholder.typicode.com/posts/${id}`) // Step 1: Initiate an HTTP request
    .then(function (response) {
      // Step 2: Wait for the response to arrive
      return response.json(); // Step 3: Parse the response as JSON
    })
    .then(function (data) {
      // Step 4: Handle the parsed JSON data
      console.log("Traditional Fetch", data); // Step 5: Display the data
    });

  // This message will be displayed immediately
  console.log("Traditional Message"); // Step 6: Display this message
  // end
}

// Get the article with an ID of 999999
// if there's an error, a warning is logged to the console by the catch() block in the function
getArticleByID(3);
