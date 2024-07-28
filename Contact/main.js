document.getElementById('contactudbname').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = {
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value
    };
    try {
        const response = await fetch('/.netlify/Functions/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Failed to submit form.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.');
    }
});
