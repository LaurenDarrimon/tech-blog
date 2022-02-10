
const publishUpdate = async (event) => {

    event.preventDefault();

    const id =  document.querySelector('#update-article').getAttribute('data-id');
    const title = document.querySelector('#titleUpdateInput').value.trim();
    const postContent = document.querySelector('#updateTextInput').value.trim();
   

    const newArticle = {
        "id": id, 
        "title": title,
        "post_content": postContent,
    }


    const response = await fetch(`/dashboard/article/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newArticle)
    });

    if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to delete the article.');
    }
}

  
//when user clicks to submit the update to thier post, call function 
document
    .querySelector('.update-form')
    .addEventListener('submit', publishUpdate);


  