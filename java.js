const passwordInput = document.querySelector('.password-group input');
const toggleIcon = document.querySelector('.pwd-icon');
const inputs = document.querySelectorAll('input');
const loginButton = document.querySelector('.submit-btn');
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
    location.reload();
});

toggleIcon.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    toggleIcon.textContent = type === 'password' ? '⌨️' : '🙈';
});


inputs.forEach(input => {
    input.addEventListener('input', () => {
        const allFilled = [...inputs]
            .filter(i => i.type !== 'checkbox')
            .every(i => i.value.trim() !== '');

        if (allFilled) {
            loginButton.disabled = false;
            loginButton.style.backgroundColor = '#00B900';
            loginButton.style.cursor = 'pointer';
        } else {
            loginButton.disabled = true;
            loginButton.style.backgroundColor = '#ccc';
            loginButton.style.cursor = 'not-allowed';
        }
    });
});
