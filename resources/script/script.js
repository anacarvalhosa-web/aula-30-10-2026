let form = document.
    querySelector("form");
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = inputEmail.value;
    let password = inputPassword.value;
    console.log(email, password)
});