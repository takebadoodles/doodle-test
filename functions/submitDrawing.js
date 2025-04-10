// Handle the submit button click
document.getElementById('submit').addEventListener('click', () => {
    const imageData = canvas.toDataURL('image/png');  // Get image data from canvas

    const formData = {
        doodle: imageData,  // Sending the doodle image
        from_name: "Doodle Notifications!",  // The name you want to show
        message: "New epic doodle woo!"  // Your message
    };

    // Send the email through EmailJS
    emailjs.send("service_ilx2rm4", "template_tkbabxl", formData)
        .then(function(response) {
            alert('Email sent successfully!');
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas after submission
        }, function(error) {
            console.error('Error sending email: ', error);
            alert('Failed to send email: ' + error.text);
        });
});
