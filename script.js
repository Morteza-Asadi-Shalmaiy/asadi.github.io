// Set launch date (December 31, 2024)
const launchDate = new Date('December 31, 2024 00:00:00').getTime();

// Update countdown every second
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display results
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
    
    // If countdown is over
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "<h2>Website Launched!</h2>";
    }
}, 1000);

// Format time to always show 2 digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Form submission handler
document.getElementById("notify-form").addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if (validateEmail(email)) {
        // In a real application, you would send this to a server
        // For now, we'll just show a success message
        showNotification();
        document.getElementById('email').value = '';
        
        // Here you could add code to actually save the email
        console.log('Email saved for notification:', email);
    } else {
        alert('Please enter a valid email address.');
    }
});

// Email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Show notification
function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe features for animation
    document.querySelectorAll('.feature').forEach(feature => {
        observer.observe(feature);
    });
});
