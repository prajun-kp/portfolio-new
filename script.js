document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form validation (basic)
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('thankYouMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
