//Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    // Get field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("telephone").value.trim();

    // Email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone pattern (7–15 digits, optional +)
    const phonePattern = /^\+?\d{7,15}$/;

    // Validation checks
    if (name === "") {
        alert("Please enter your name.");
        e.preventDefault();
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid contact number (7–15 digits).");
        e.preventDefault();
        return;
    }

});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});



//Section Float
// Select all sections
const sections = document.querySelectorAll("section");

// Create an Intersection Observer
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // optional: animate once only
            }
        });
    },
    {
        threshold: 0.2, // triggers when 20% of section is visible
    }
);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
