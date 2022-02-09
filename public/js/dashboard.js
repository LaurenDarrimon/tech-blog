//PUBLISH button to submit new post calls post route 
//event listener and prevent default 


const publishHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#titleInput').value.trim();
    const post_content = document.querySelector('#articleTextInput').value.trim();
  
    if (title && post_content) {
      const response = await fetch(`/publish`, {
        method: 'POST',
        body: JSON.stringify({ title, post_content }),
      });
  
      if (response.ok) {
            console.log("new post added")
            //document.location.replace('/');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  
// document
//     .querySelector('#publish')
//     .addEventListener('submit', publishHandler);
  
