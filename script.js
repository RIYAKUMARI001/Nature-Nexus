const container = document.querySelector('.container');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.addEventListener('click', () => {
    container.classList.add('show-register');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('show-register');
});
