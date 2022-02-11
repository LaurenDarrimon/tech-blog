const postComment = async (event) => {

    event.preventDefault(); //prevent page relaod 


    //retrieve data attribute from clicked button 
    const id =  document.querySelector('#submit-comment').getAttribute('data-id');
    const comment = document.querySelector('#commentInput').value.trim();  
    
    console.log(id + " " + comment)

    const newComment = {
        article_id: id, 
        comment_text: comment,
    }
    //post request 
    const response = await fetch(`/api/comment/${id}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newComment)
    });

    if (response.ok) {
        document.location.replace(`/article/${id}`); //refresh the article page 
        } else {
        alert('Failed to post the comment.');
    }
}


document.querySelector('.comment-form').addEventListener('submit', postComment);