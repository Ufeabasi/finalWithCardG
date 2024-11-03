
//THIS CONTROLS THE TIMERS
// Function to start countdown timers for each element with the class 'countdown'
function startCountdownTimers() {
  const countdownElements = document.querySelectorAll(".countdown");
  
  countdownElements.forEach(countdownElement => {
    // Get initial countdown time from data attribute in seconds
    let countdownTime = parseInt(countdownElement.getAttribute("data-time"));

    // Set an interval for each countdown timer
    const countdownInterval = setInterval(() => {
      // Calculate hours, minutes, and seconds
      let hours = Math.floor(countdownTime / 3600);
      let minutes = Math.floor((countdownTime % 3600) / 60);
      let seconds = countdownTime % 60;

      // Update the timer text
      countdownElement.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      
      // Decrease the countdown time
      countdownTime--;

      // Stop the countdown at zero
      if (countdownTime < 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "00:00:00"; // Show timer expired
      }
    }, 1000);
  });
}
// Start all countdown timers on page load
startCountdownTimers();




// THIS handle the functionality of the nav items ACTIVE change
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});





// Function to display user data
function displayUserData(userData) {
  const content = document.getElementById('username');

  if (userData && userData.username) {
    content.textContent = userData.username;
  } else {
    content.textContent = 'User data not available.';
  }
}

// Initialize the app and fetch user data
document.addEventListener('DOMContentLoaded', () => {
  const WebApp = window.Telegram.WebApp;

  // Retrieve user data from the WebApp SDK
  if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
    const userData = WebApp.initDataUnsafe.user;
    displayUserData(userData.username);
  } else {
    console.error('User data is not available in WebApp.initDataUnsafe.');
    document.getElementById('content').textContent = 'User data not found.';
  }
}
);
