// Challenge 3
/**
 * Get an article by id
 * @param id
 */
async function getArticleByID(id) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      // throw new Error();
      throw "Something went wrong";
    }

    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.warn(error);
  }
}

getArticleByID(1);
