"use strict";

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", loginSubmit, false);

function loginSubmit(event) {
    console.log("email: ", document.getElementById("email").value);
    console.log("password: ", document.getElementById("password").value);
    console.log("website: ", document.getElementById("website").value);
    event.preventDefault();
}





