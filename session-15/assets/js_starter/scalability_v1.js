// Consolidated example on how to exand you API consumption using higher order function and Promises
async function fetchAndProcessData() {
  // Define an array of URLs to fetch data from
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/todos/1",
  ];

  // Also consider
  // "https://jsonplaceholder.typicode.com/posts/1",
  // "https://jsonplaceholder.typicode.com/posts/2",
  // "https://jsonplaceholder.typicode.com/posts/3",

  try {
    // Use Promise.all to concurrently fetch data from all URLs
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    // Use Promise.all to parse JSON data from all responses
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    // Process and log the data from each URL
    data.forEach((item, index) => {
      console.log(`Data from URL ${urls[index]}:`, item);
    });
  } catch (error) {
    // Handle errors if they occur during the asynchronous process
    console.error("An error occurred:", error);
  }

  // Log a message after all asynchronous operations are complete
  console.log("Async/Await Message");
}

// Call the async function to start the asynchronous process
fetchAndProcessData();
