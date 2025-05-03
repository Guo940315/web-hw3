// 取得 DOM 元素
const passwordInput = document.querySelector('.password-group input');
const toggleIcon = document.querySelector('.pwd-icon');
const inputs = document.querySelectorAll('input');
const loginButton = document.querySelector('.submit-btn');

// 切換密碼顯示/隱藏
toggleIcon.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    toggleIcon.textContent = type === 'password' ? '⌨️' : '🙈';
});

// 監聽輸入框變化，啟用按鈕
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
