// JavaScript for handling contact form submission and displaying thank you message

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var formData = new FormData(form);
            // Perform form submission handling here (e.g., AJAX request)
            // Display thank you message
            var thankYouMessage = document.createElement('p');
            thankYouMessage.textContent = 'Thank you for your message!';
            form.parentNode.insertBefore(thankYouMessage, form.nextSibling);
        });
    }
});
