import { register } from "./funcs/auth.js";


document.addEventListener("DOMContentLoaded", () => {
  const signUpBtn = document.querySelector("#sign-up-btn");

  signUpBtn.addEventListener("click", (event) => {
    event.preventDefault();
    register();
  });
});
