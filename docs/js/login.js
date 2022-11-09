"use strict";
window.onload = function () {
    const loginForm = document.getElementById("login");
    // Option1
    // loginForm.addEventListener("submit", function(event) {
    //     console.log("email: ", document.getElementById("email").value);
    //     console.log("password: ", document.getElementById("password").value);
    //     console.log("website: ", document.getElementById("website").value);
    //     event.preventDefault();
    // });

    // Option 2
    loginForm.onsubmit =  function(event) {
        event.preventDefault();
        const txtEmail = document.getElementById("email");
        const txtPassword = document.getElementById("password");
        const txtWebsite = document.getElementById("website");

        console.log("email: ", txtEmail.value);
        console.log("password: ", txtPassword.value);
        console.log("website: ", txtWebsite.value);

        document.getElementById("spanEmail").innerHTML = `Your email is ${txtEmail.value}`;
        document.getElementById("spanPsw").innerHTML = `Your password is ${txtPassword.value}`;

        txtEmail.value = '';
        txtPassword.value = '';
        txtWebsite.value = '';
    };
};




