//LOGIN
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Grab input values from the login form
  const username = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(username + " " + password);

  // Send a POST request to the API endpoint
  if (username && password) {

    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password, }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log(response);
      //If successful, redirect the browser to the profile page
      document.location.replace(`/dashboard/${username}`);
    } else {
      alert(response.statusText);
    }
  }
};

//SIGN UP
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#user-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  //call the route to login, which will set session data
  if (username && password) {
    const response = await fetch("/user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    //if log in goes okay, show author dashboard
    if (response.ok) {
      document.location.replace(`/dashboard/${username}`);
    } else {
      alert(response.statusText);
    }
  }
};

//event listeners for signing up new user and login existing user
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
