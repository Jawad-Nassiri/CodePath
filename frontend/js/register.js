import { register } from './funcs/auth.js';

const signUpBtn = document.querySelector('#sign-up-btn');

signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    register();
})