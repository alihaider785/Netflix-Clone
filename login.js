document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    var email = document.getElementById('addressInput').value;
    var password = document.getElementById('passwordInput').value;

    // You can replace the hardcoded values with your own validation logic
    if(email === 'example@email.com' && password === 'password123') {
        alert('You logged in successfully. Thank You');
        // You can add your own logic here for successful login
    } else {
        alert('Please check your information and try again.');
    }
});