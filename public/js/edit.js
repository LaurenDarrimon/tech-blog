const deleteHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/dashboard/article/${id}`, {
        method: 'DELETE',
        });
    
        if (response.ok) {
        document.location.replace('/');
        } else {
        alert('Failed to delete the article.');
        }
    }
};

const updateHandler = async (event) =>{


    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);
    }


}
  
//when user clicks on update or button buttons, call function 
document
    .querySelector('#update')
    .addEventListener('click', updateHandler);

document
    .querySelector('#delete')
    .addEventListener('click', deleteHandler);
  