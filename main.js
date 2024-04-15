document.addEventListener("DOMContentLoaded", function() {
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");

    if (registerBtn) {
        registerBtn.addEventListener("click", register);
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", login);
    }
});

function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch('/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: username,
        email: email,
        password: password
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    alert(data.message);
    window.location.href = "login.html";
})
.catch(error => {
    console.error('Error:', error);
    alert("Registration failed. Please try again later.");
});
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
        window.location.href = "upload.html";
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Incorrect username or password.");
    });
}
