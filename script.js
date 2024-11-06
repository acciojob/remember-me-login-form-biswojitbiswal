//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkboxInput = document.getElementById("checkbox");

    // Check if there are saved details in localStorage
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        // Show existing user login button if there are saved details
        existingButton.style.display = "block";
    }

    // Submit form
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = checkboxInput.checked;

        if (rememberMe) {
            // Save username and password to localStorage
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert(`Logged in as ${username}`);
    });

    existingButton.addEventListener("click", () => {
        alert(`Logged in as ${savedUsername}`);
    });
});

