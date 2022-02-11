const deleteHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    //fetch request to delete the article
    const response = await fetch(`/dashboard/article/${id}`, {
      method: "DELETE",
    });
    //replace url with dashboard
    document.location.replace("/dashboard");
  }
};

document.querySelector("#delete").addEventListener("click", deleteHandler);
