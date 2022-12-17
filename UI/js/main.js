const modal = document.querySelector('.modal');
const loginBtn = document.querySelector(".login-btn");
const loginForm = document.querySelector('.login');
const loginExitBtn = document.querySelector('.login__exit-btn');
const loginRegister = document.querySelector('.login__header-signup');

const registerForm = document.querySelector('.register');
const registerBtn = document.querySelector('.signup-btn');
const registerExitBtn = document.querySelector('.register__exit-btn');
const registerLogin = document.querySelector('.register__header-login');

loginBtn.addEventListener("click", ()=>{
    modal.classList.remove('hidden');
    loginForm.classList.remove('hidden');
});

loginExitBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    loginForm.classList.add('hidden');
});

loginRegister.addEventListener('click', ()=>{
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    modal.classList.remove('hidden');
});

modal.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
});

//registerForm
registerBtn.addEventListener("click", ()=>{
    modal.classList.remove('hidden');
    registerForm.classList.remove('hidden');
});

registerExitBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    registerForm.classList.add('hidden');
});

registerLogin.addEventListener('click', ()=>{
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    modal.classList.remove('hidden');
});

