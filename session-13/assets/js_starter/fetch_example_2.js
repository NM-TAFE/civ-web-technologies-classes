// Fetch example 2
fetch('https://jsonplaceholder.typicode.com/postses')
.then(function (response) {
  // The API call was successful
  // (wait, it was?)
  console.log(response.status);
  return response.json();
}).then(function (data) {
  // This is the JSON from our response
  console.log(data);
}).catch(function (error) {
  // There was an error
  console.warn(error);
});