const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return;
    }
    if (email === '') {
        alert('Please enter your email.');
        return;
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (message === '') {
        alert('Please enter your message.');
        return;
    }
    alert('Form submitted successfully!');
    form.reset(); 
});

// Function to validate email format
function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}