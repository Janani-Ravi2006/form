const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        message.innerText = "Registration Successful!";
        message.style.color = "green";
        form.reset(); // clear form
    } else {
        message.innerText = "";
    }
});

function validateInputs() {
    let isValid = true;

    clearErrors();

    // Username
    if (username.value.trim() === '') {
        setError(username, 'Username is required');
        isValid = false;
    }

    // Email
    if (email.value.trim() === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        setError(email, 'Enter a valid email');
        isValid = false;
    }

    // Password
    if (password.value.trim() === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (password.value.length < 6) {
        setError(password, 'Password must be at least 6 characters');
        isValid = false;
    }

    // Confirm Password
    if (cpassword.value.trim() === '') {
        setError(cpassword, 'Confirm your password');
        isValid = false;
    } else if (cpassword.value !== password.value) {
        setError(cpassword, 'Passwords do not match');
        isValid = false;
    }

    return isValid;
}

function setError(input, message) {
    const inputGroup = input.parentElement;
    const errorDiv = inputGroup.querySelector('.error');
    errorDiv.innerText = message;
    input.classList.add('error-border');
}

function clearErrors() {
    const errorTexts = document.querySelectorAll('.error');
    errorTexts.forEach(e => e.innerText = '');

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('error-border'));
}

function isValidEmail(email) {
    // basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
