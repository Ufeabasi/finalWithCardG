// shows the menue items in the Game, Socials and Task section

function showTab(tabId) {
    // Remove active class from all tabs and tab contents
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding tab content
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}














// let startX = 0;
// let currentTranslateX = 0;
// let prevTranslateX = 0;

// const container = document.getElementById('card-container');
// const cardWidth = container.offsetWidth; // Get the width of the card container
// const totalWidth = container.scrollWidth; // Get the total width of all cards

// // Start tracking touch
// container.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
//     container.style.transition = 'none'; // No transition during drag
// });

// // Track movement while swiping
// container.addEventListener('touchmove', (e) => {
//     const touchX = e.touches[0].clientX;
//     const moveX = touchX - startX;
//     currentTranslateX = prevTranslateX + moveX;

//     // Limit movement: Prevent going beyond the left boundary
//     if (currentTranslateX > 0) {
//         currentTranslateX = 0; // Stop at the left edge
//     }

//     // Limit movement: Prevent going beyond the right boundary
//     const maxTranslateX = cardWidth - totalWidth; // Calculate the maximum left position
//     if (currentTranslateX < maxTranslateX) {
//         currentTranslateX = maxTranslateX; // Stop at the right edge
//     }
    
//     container.style.transform = `translateX(${currentTranslateX}px)`;
// });

// // Stop tracking touch, save position
// container.addEventListener('touchend', () => {
//     prevTranslateX = currentTranslateX; // Save current position
// });









//FUNTION TO TRACK THE TASKLIST LEVEL BAR

