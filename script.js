// Smooth Scroll Functionality
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the targeted section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



// Form Validation for Reservation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const date = document.querySelector('input[type="date"]').value;
    const time = document.querySelector('input[type="time"]').value;
    const guests = document.querySelector('input[type="number"]').value;

    if (!name || !email || !date || !time || !guests) {
        alert('Please fill out all fields.');
        e.preventDefault(); // Prevent form submission if validation fails
    }
});

