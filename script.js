document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const statusMsg = document.getElementById('formStatus');

    // Validation rules (Simple Regex)
    const patterns = {
        email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        name: /^[a-zA-Z\s]{2,50}$/ // Letters and spaces only, min 2 chars
    };

    // Helper function to show/hide errors
    const setError = (input, message) => {
        const parent = input.parentElement;
        const errorSpan = parent.querySelector('.error-msg');
        
        parent.classList.add('error');
        errorSpan.textContent = message;
    };

    const clearError = (input) => {
        const parent = input.parentElement;
        const errorSpan = parent.querySelector('.error-msg');
        
        parent.classList.remove('error');
        errorSpan.textContent = '';
    };

    // Validate individual field
    const validateField = (input) => {
        const value = input.value.trim();
        const name = input.name;

        if (value === '') {
            setError(input, 'This field is required');
            return false;
        }

        if (name === 'email' && !patterns.email.test(value)) {
            setError(input, 'Enter a valid email address');
            return false;
        }

        if (name === 'name' && !patterns.name.test(value)) {
            setError(input, 'Enter a valid name (letters only)');
            return false;
        }

        if (name === 'message' && value.length < 10) {
            setError(input, 'Message is too short (min. 10 characters)');
            return false;
        }

        clearError(input);
        return true;
    };

    // Event Listener: Real-time validation (blur and input)
    ['input', 'blur'].forEach(event => {
        form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener(event, () => {
                // Only validate on 'input' if there is already an active error to avoid being intrusive
                if (event === 'blur' || input.parentElement.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    });

    // Event Listener: Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate all fields
        form.querySelectorAll('input, textarea').forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Submission simulation
            const btn = form.querySelector('.btn-submit');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending...';
            btn.disabled = true;
            statusMsg.textContent = '';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
                statusMsg.textContent = 'Message sent successfully!';
                statusMsg.className = 'form-status success';
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    statusMsg.textContent = '';
                    statusMsg.className = 'form-status';
                }, 3000);
            }, 1500);
        } else {
            statusMsg.textContent = 'Please fix the errors above.';
            statusMsg.className = 'form-status error';
        }
    });
});