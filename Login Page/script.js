// Show/Hide Password Function
document.getElementById("togglePassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});

// Form Validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form from refreshing

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // Username must be at least 4 chars, only letters & numbers
    const usernamePattern = /^[A-Za-z0-9]{4,}$/;

    if (!usernamePattern.test(username)) {
        message.textContent = "❌ Username must be at least 4 characters and only letters/numbers.";
        message.className = "message error";
        return;
    }

    // Password must be at least 6 chars
    if (password.length < 6) {
        message.textContent = "❌ Password must be at least 6 characters.";
        message.className = "message error";
        return;
    }

    // If all checks pass
    message.textContent = "✅ Login Successful!";
    message.className = "message success";
});
