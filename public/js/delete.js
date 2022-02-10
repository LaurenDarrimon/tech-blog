const deleteHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/dashboard/article/${id}`, {
        method: 'DELETE',
        });
    

        document.location.replace('/dashboard');

    }
};

document
    .querySelector('#delete')
    .addEventListener('click', deleteHandler);
