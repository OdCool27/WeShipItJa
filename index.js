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
