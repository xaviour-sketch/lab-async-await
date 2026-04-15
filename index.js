// Write your code here!
function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  posts.forEach(post => {
    //Creating elements for each post and appending them to the ul
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    //Adding the post title and body to the h1 and p elements respectively
    h1.textContent = post.title;
    p.textContent = post.body;

    //Appending the h1 and p elements to the li element, and then appending the li element to the ul
    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    displayPosts(data);
  })
  .catch(error => console.error(":Error fetching posts:", error));

  async function fetchPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      displayPosts(data);// Call the function to display the posts
    } catch (error) {
      console.error("Error:", error);
    }
  }

fetchPosts();
