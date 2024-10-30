document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate sending data to a server
        setTimeout(function() {
            // Success message
            showMessage('Your message has been sent successfully!', 'success');
            // Clear form fields
            form.reset();
        }, 1000);
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = type;
        setTimeout(function() {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 3000);
    }
});