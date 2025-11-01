function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Store user data in session
    const userData = { email, rememberMe };
    sessionStorage.setItem('currentUser', JSON.stringify(userData));

    alert('Đăng nhập thành công!');
    window.location.href = '/';
}