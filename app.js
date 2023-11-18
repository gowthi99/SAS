document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform authentication logic here (e.g., check credentials against a database)
        if (username === 'demo' && password === 'password') {
            alert('Login successful!');
            // Redirect to another page or perform additional actions
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });
});
