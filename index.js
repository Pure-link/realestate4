function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (validateEmail(email)) {
      // Here, you can perform further actions like sending data to a server
      // For demonstration purposes, we'll show a success message
      document.getElementById('contactForm').reset();
      document.getElementById('successMessage').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
      }, 3000); // Hide the success message after 3 seconds
    } else {
      alert('Please enter a valid email address.');
    }
  }
  
  function validateEmail(email) {
    // Basic email validation using a regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }



const box = document.querySelector('.box');

gsap.from(box, {
  duration: 4,
  y: '-100vh', // Move from bottom to top
  opacity: 0, // Change opacity to 1
  ease: 'power2.out' // Easing function
});
const box2 = document.querySelector('.about');

gsap.from(box2, {
  duration: 4,
  y: '100vh', // Move from bottom to top
  opacity: 0, // Change opacity to 1
  ease: 'power2.out' // Easing function
});




