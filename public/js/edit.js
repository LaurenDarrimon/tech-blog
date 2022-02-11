const publishUpdate = async (event) => {
  event.preventDefault();


  //retrive data from cliked buttton and DOM element 
  const id = document.querySelector("#update-article").getAttribute("data-id");
  const author = document
    .querySelector("#update-article")
    .getAttribute("data-author");
  const title = document.querySelector("#titleUpdateInput").value.trim();
  const postContent = document.querySelector("#updateTextInput").value.trim();

  //console.log("author");
  //console.log(author);

  const newArticle = {
    id: id,
    title: title,
    post_content: postContent,
    author_name: author,
  };

  //put request to update article 
  const response = await fetch(`/dashboard/article/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newArticle),
  });

  if (response.ok) {
    document.location.replace(`/dashboard/${author}`);  //page refresh 
  } else {
    alert("Failed to edit the article.");
  }
};

//when user clicks to submit the update to thier post, call function
document
  .querySelector(".update-form")
  .addEventListener("submit", publishUpdate);
