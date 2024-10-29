// Challenge 3
/**
 * Get an article by id
 * @param id
 */
async function getArticleByID(id) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  let data = await response.json();

  console.log(data);
}

getArticleByID(1);
