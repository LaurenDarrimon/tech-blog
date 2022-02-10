//PUBLISH button to submit new post calls post route 
//event listener and prevent default 


const publishHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#titleInput').value.trim();
    const post_content = document.querySelector('#articleTextInput').value.trim();
  
    if (title && post_content) {
      const response = await fetch(`/dashboard/publish`, {
        method: 'POST',
        body: JSON.stringify({ title, post_content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
            console.log("new post added")
            document.location.replace(`/`);
      } else {
        alert('Failed to create project');
      }
    }
  };
  
//when user clicks on publish button, call function 
document
    .querySelector('.publish-form')
    .addEventListener('submit', publishHandler);
  
