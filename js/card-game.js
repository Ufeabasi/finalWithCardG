// // // const cards = document.querySelectorAll(".card");

// // // let matched = 0;
// // // let cardOne, cardTwo;
// // // let disableDeck = false;

// // // function flipCard({target: clickedCard}) {
// // //     if(cardOne !== clickedCard && !disableDeck) {
// // //         clickedCard.classList.add("flip");
// // //         if(!cardOne) {
// // //             return cardOne = clickedCard;
// // //         }
// // //         cardTwo = clickedCard;
// // //         disableDeck = true;
// // //         let cardOneImg = cardOne.querySelector(".back-view img").src,
// // //         cardTwoImg = cardTwo.querySelector(".back-view img").src;
// // //         matchCards(cardOneImg, cardTwoImg);
// // //     }
// // // }

// // // function matchCards(img1, img2) {
// // //     if(img1 === img2) {
// // //         matched++;
// // //         if(matched == 8) {
// // //             setTimeout(() => {
// // //                 return shuffleCard();
// // //             }, 1000);
// // //         }
// // //         cardOne.removeEventListener("click", flipCard);
// // //         cardTwo.removeEventListener("click", flipCard);
// // //         cardOne = cardTwo = "";
// // //         return disableDeck = false;
// // //     }
// // //     setTimeout(() => {
// // //         cardOne.classList.add("shake");
// // //         cardTwo.classList.add("shake");
// // //     }, 400);

// // //     setTimeout(() => {
// // //         cardOne.classList.remove("shake", "flip");
// // //         cardTwo.classList.remove("shake", "flip");
// // //         cardOne = cardTwo = "";
// // //         disableDeck = false;
// // //     }, 1200);
// // // }

// // // function shuffleCard() {
// // //     matched = 0;
// // //     disableDeck = false;
// // //     cardOne = cardTwo = "";
// // //     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
// // //     arr.sort(() => Math.random() > 0.5 ? 1 : -1);
// // //     cards.forEach((card, i) => {
// // //         card.classList.remove("flip");
// // //         let imgTag = card.querySelector(".back-view img");
// // //         imgTag.src = `images/img-${arr[i]}.png`;
// // //         card.addEventListener("click", flipCard);
// // //     });
// // // }

// // // shuffleCard();
    
// // // cards.forEach(card => {
// // //     card.addEventListener("click", flipCard);
// // // });








// // // Levels with specific score requirements
// // // const levels = [
// // //     { name: "Normal", scoreNeeded: 0 },
// // //     { name: "Bronze", scoreNeeded: 10 },
// // //     { name: "Silver", scoreNeeded: 25 },
// // //     { name: "Gold", scoreNeeded: 45 },
// // //     { name: "Platinum", scoreNeeded: 60 }
// // //   ];
  
// // //   let currentScore = 0;
// // //   let currentLevelIndex = 0;
// // //   let attemptsLeft = 3;
// // //   const scorePerPlay = 2;
// // //   const lockoutTime = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
// // //   let lockoutEndTime = null;

// // //   // Function to play the game
// // //   function playGame() {
// // //     if (attemptsLeft <= 0) {
// // //       startLockout();
// // //       return;
// // //     }

// // //     currentScore += scorePerPlay;
// // //     document.getElementById("score").textContent = `Score: ${currentScore}`;
    
// // //     // Check if the player has reached the next level
// // //     if (currentScore >= levels[currentLevelIndex + 1]?.scoreNeeded) {
// // //       currentLevelIndex++;
// // //       document.getElementById("level").textContent = `Level: ${levels[currentLevelIndex].name}`;
// // //       currentScore = levels[currentLevelIndex].scoreNeeded;
// // //     }
    
// // //     // Update energy bar
// // //     const levelThreshold = levels[currentLevelIndex + 1]?.scoreNeeded || currentScore + 10;
// // //     const progress = ((currentScore - levels[currentLevelIndex].scoreNeeded) / (levelThreshold - levels[currentLevelIndex].scoreNeeded)) * 100;
// // //     document.getElementById("energyBar").style.width = `${progress}%`;

// // //     // Decrease attempts
// // //     attemptsLeft--;
// // //     document.getElementById("attempts").textContent = `Attempts Left: ${attemptsLeft}`;

// // //     // If no attempts left, start lockout
// // //     if (attemptsLeft === 0) {
// // //       startLockout();
// // //     }
// // //   }

// // //   // Start lockout period
// // //   function startLockout() {
// // //     lockoutEndTime = Date.now() + lockoutTime;
// // //     document.getElementById("playBtn").disabled = true;
// // //     document.getElementById("lockoutOptions").style.display = "block";
// // //     updateTimer();
// // //   }

// // //   // Update lockout countdown timer
// // //   function updateTimer() {
// // //     const timeLeft = lockoutEndTime - Date.now();
// // //     if (timeLeft <= 0) {
// // //       resetAttempts();
// // //     } else {
// // //       const hours = Math.floor(timeLeft / (1000 * 60 * 60));
// // //       const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
// // //       const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
// // //       document.getElementById("timer").textContent = `Time remaining: ${hours}h ${minutes}m ${seconds}s`;
// // //       setTimeout(updateTimer, 1000);
// // //     }
// // //   }

// // //   // Watch ad option (resets attempts)
// // //   function watchAd() {
// // //     alert("Ad watched! Attempts reset.");
// // //     resetAttempts();
// // //   }

// // //   // Reset attempts
// // //   function resetAttempts() {
// // //     attemptsLeft = 3;
// // //     document.getElementById("attempts").textContent = `Attempts Left: ${attemptsLeft}`;
// // //     document.getElementById("playBtn").disabled = false;
// // //     document.getElementById("lockoutOptions").style.display = "none";
// // //     document.getElementById("timer").textContent = "";
// // //   }






  








// //   const navItems = document.querySelectorAll('.nav-item');
// // navItems.forEach(item => {
// //     item.addEventListener('click', () => {
// //         navItems.forEach(nav => nav.classList.remove('active'));
// //         item.classList.add('active');
// //     });
// // });





// // const cards = document.querySelectorAll(".card");
// // const scoreDisplay = document.getElementById("score");
// // const timeDisplay = document.getElementById('time');
// // const startGameButton = document.getElementById("start-game");
// // const closeMenuIcon = document.getElementById('closeMenuIcon');
// // const closeMenuIconWin = document.getElementById('closeMenuIconWin');
// // const winMenu = document.getElementById('slidingMenuWin');
// // const failMenu = document.getElementById('slidingMenuFail')
// // const exustedAttempt = document.getElementById('attemptExusted');
// // const attemptCount = document.getElementById('attempts')


// // let score = 0;
// // let timeLeft = 10; // Time limit for each round
// // let matched = 0;
// // let cardOne, cardTwo;
// // let disableDeck = false;
// // let timer; // Variable to store the timer interval
// // let isGameActive = false; // Track if the game is currently active



// // // const remainingAttempts = document.getElementById('timer');

// // // level 
// // let currentLevelIndex = 0;
// // let attemptsLeft = 3;
// // // const scorePerPlay = 2;
// // const lockoutTime = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
// // let lockoutEndTime = null;

// // // Levels with specific score requirements
// // const levels = [
// //     { name: "Normal", scoreNeeded: 0 },
// //     { name: "Bronze", scoreNeeded: 10 },
// //     { name: "Silver", scoreNeeded: 25 },
// //     { name: "Gold", scoreNeeded: 45 },
// //     { name: "Platinum", scoreNeeded: 60 }
// //   ];

// // function startTimer() {
// //     clearInterval(timer); // Clear any existing timer before starting a new one
// //     timeLeft = 10; // Reset time for each round
// //     timeDisplay.innerText = timeLeft;

// //     timer = setInterval(() => {
// //         timeLeft--;
// //         timeDisplay.innerText = timeLeft;
// //         if (score <= 0 && timeLeft <=0) {
// //             clearInterval(timer);
// //             failMenu.classList.add('active');
// //             closeMenuIcon.addEventListener('click', () => {
// //                 failMenu.classList.remove('active');
// //             });

// //             shuffleCard(); // Reshuffle cards if time runs out
// //             resetGame(); // Reset game variables
// //             startGameButton.disabled = false; // Enable the start button after the timer ends
// //             isGameActive = false; // Set game state to inactive
            
// //         } else if (timeLeft <=0 && score >= 0) {
// //             clearInterval(timer);
// //             winMenu.classList.add('active');
// //             closeMenuIconWin.addEventListener('click', () => {
// //                 winMenu.classList.remove('active');
// //                 failMenu.classList.remove('active');
// //             });
// //             shuffleCard();
// //             resetGame();
// //             startGameButton.disabled = false;
// //             isGameActive = false;
// //         }
// //         // else if (attemptsLeft <= 0 && timeLeft < 0) {
// //         //     startLockOut()
// //         // } 
// //     }, 1000);
// // }

// // function flipCard({ target: clickedCard }) {
// //     if (cardOne !== clickedCard && !disableDeck) {
// //         clickedCard.classList.add("flip");
// //         if (!cardOne) {
// //             cardOne = clickedCard;
// //             return;
// //         }
        
// //         cardTwo = clickedCard;
// //         disableDeck = true;
// //         let cardOneImg = cardOne.querySelector(".back-view img").src;
// //         let cardTwoImg = cardTwo.querySelector(".back-view img").src;
// //         matchCards(cardOneImg, cardTwoImg);
// //     }
// // }

// // function matchCards(img1, img2) {
// //     if (img1 === img2) {
// //         matched++;
// //         score += calculateScore(matched);
// //         scoreDisplay.innerText = score;

// //         // Restart the timer with each successful match
// //         startTimer();

// //         if (matched == 8) {
// //             setTimeout(() => {
// //                 shuffleCard();
// //             }, 1000);
// //         }

// //         cardOne.removeEventListener("click", flipCard);
// //         cardTwo.removeEventListener("click", flipCard);
// //         resetSelection();
// //     } else {
// //         setTimeout(() => {
// //             cardOne.classList.add("shake");
// //             cardTwo.classList.add("shake");
// //         }, 400);

// //         setTimeout(() => {
// //             cardOne.classList.remove("shake", "flip");
// //             cardTwo.classList.remove("shake", "flip");
// //             resetSelection();
// //         }, 1200);
// //     }
// // }

// // function resetSelection() {
// //     cardOne = cardTwo = "";
// //     disableDeck = false;
// // }

// // function calculateScore(matched) {
// //     if (matched <= 2) return 10;
// //     else if (matched <= 5) return 20;
// //     else return 30;
// // }

// // function shuffleCard() {
// //     matched = 0;
// //     disableDeck = false;
// //     cardOne = cardTwo = "";
// //     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
// //     arr.sort(() => Math.random() > 0.5 ? 1 : -1);
// //     cards.forEach((card, i) => {
// //         card.classList.remove("flip");
// //         let imgTag = card.querySelector(".back-view img");
// //         imgTag.src = `images/img-${arr[i]}.png`;
// //         card.addEventListener("click", flipCard);
// //     });
// //     // startTimer(); // Start the timer when the game is shuffled
// // }

// // function resetGame() {
// //     score = score;
// //     scoreDisplay.innerText = score;
// //     matched = 0;
// //     shuffleCard();
// // }

// // shuffleCard();
// // cards.forEach(card => card.addEventListener("click", flipCard));

// // // Start Game function
// // function startGame() {
// //     if (attemptsLeft > 0 && !isGameActive) { // Check if the game is not already active
// //         isGameActive = true; // Set game state to active
// //         attemptsLeft--; // Decrease attempts
// //         // updateAttempts(); //Update attempst display
// //         attemptCount.textContent = attemptsLeft 
// //         score = score; 
// //         scoreDisplay.innerText = score;
// //         matched = 0;
// //         shuffleCard();
// //         startTimer(); // Start the timer when the game starts
// //         startGameButton.disabled = true;
// //     }
// // }

// // // End Game function
// // function endGame() {
// //     clearInterval(timer); // Stop the timer
// //     // isGameActive = false; // Set game state to inactive
// //     // alert(`Game Over! Your score: ${score}`);
// //     resetGame(); // Reset the game state
// // }
// // // Event listeners for buttons
// // startGameButton.addEventListener('click', startGame);

// // function startLockOut() {
// //     exustedAttempt.classList.add('active');
// //     lockoutEndTime = Date.now() + lockoutTime;
// //     startGameButton.disabled = true;

// // }











// // // // JavaScript to control the modal display
// // // const modal = document.getElementById('modal');
// // // const openModalBtn = document.getElementById('open-modal-btn');
// // // const closeModal = document.getElementById('close-modal');

// // // // Open the modal when button is clicked
// // // openModalBtn.addEventListener('click', () => {
// // //   modal.style.display = 'flex';
// // // });

// // // // Close the modal when the close icon is clicked
// // // closeModal.addEventListener('click', () => {
// // //   modal.style.display = 'none';
// // // });

// // // // Close the modal when clicking outside of it
// // // window.addEventListener('click', (event) => {
// // //   if (event.target === modal) {
// // //     modal.style.display = 'none';
// // //   }
// // // });











// // // // Function to display user data
// // // function displayUserData(userData) {
// // //     const content = document.getElementById('user_name');
  
// // //     if (userData && userData.username) {
// // //       content.textContent = userData.username;
// // //     } else {
// // //       content.textContent = 'User data not available.';
// // //     }
// // //   }
  
// // //   // Initialize the app and fetch user data
// // //   document.addEventListener('DOMContentLoaded', () => {
// // //     const WebApp = window.Telegram.WebApp;
  
// // //     // Retrieve user data from the WebApp SDK
// // //     if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
// // //       const userData = WebApp.initDataUnsafe.user;
// // //       displayUserData(userData.username);
// // //     } else {
// // //       console.error('User data is not available in WebApp.initDataUnsafe.');
// // //       document.getElementById('content').textContent = 'User data not found.';
// // //     }
// // //   }
// // // );










































// const cards = document.querySelectorAll(".card");
// const scoreDisplay = document.getElementById("score");
// const timeDisplay = document.getElementById('time');
// const startGameButton = document.getElementById("start-game");
// const commitScoreButton = document.getElementById("commit-score"); // New button to commit tempScore to score
// const closeMenuIcon = document.getElementById('closeMenuIcon');
// const closeMenuIconWin = document.getElementById('closeMenuIconWin');
// const winMenu = document.getElementById('slidingMenuWin');
// const failMenu = document.getElementById('slidingMenuFail');
// const exustedAttempt = document.getElementById('attemptExusted');
// const attemptCount = document.getElementById('attempts');
// const tryAgainBtn = document.querySelector('.close');
// const winMenuScoreDisplay = document.getElementById("mainScore");
// const levelDisplay = document.getElementById('levelDisplay');
// const energyBar = document.getElementById('energy-bar');
// const topLevelNumDisplay = document.getElementById('top-level');
// const attemptExhaustedMenu = document.getElementById("attemptExhaustedMenu"); // New sliding menu
// const countdownTimerDisplay = document.getElementById("countdownTimer");
// const watchAdButton = document.getElementById("watchAdButton");


// let score = 0;
// let tempScore = 0; // Temporary score for the current round
// let allLevelsScore = 0; //This holds all the scores for the energy bar to use
// let timeLeft = 10;
// let matched = 0;
// let cardOne, cardTwo;
// let disableDeck = false;
// let timer;
// let isGameActive = false;
// let currentLevelIndex = 0;
// let currentEnergyIndex = 0;
// let attemptsLeft = 3;
// // const lockoutTime = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
// const lockoutTime = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
// let lockoutEndTime = null;
// let countdownInterval;

// const levels = [
//     { name: "Normal", scoreNeeded: 0 },
//     { name: "Bronze", scoreNeeded: 100 },
//     { name: "Silver", scoreNeeded: 300 },
//     { name: "Gold", scoreNeeded: 400 },
//     { name: "Platinum", scoreNeeded: 2000 }
// ];


// const levelTargets = [100, 200, 300, 400, 550]; // Energy needed per level












// // Function to update attempts display and handle lockout
// function updateAttempts() {
//     attemptCount.textContent = attemptsLeft;
//     if (attemptsLeft === 0) {
//         lockoutEndTime = Date.now() + lockoutTime;
//         startLockout();
//     }
// }

// // Lockout countdown logic
// function startLockout() {
//     startGameButton.disabled = true; // Disable the start button
//     showSlidingMenu(); // Show the slide-up menu

//     countdownInterval = setInterval(() => {
//         const timeRemaining = lockoutEndTime - Date.now();
//         if (timeRemaining <= 0) {
//             clearInterval(countdownInterval);
//             countdownTimerDisplay.textContent = "You can now play!";
//             startGameButton.disabled = false;
//         } else {
//             updateCountdownDisplay(timeRemaining);
//         }
//     }, 1000);
// }

// // Update countdown display
// function updateCountdownDisplay(timeRemaining) {
//     const hours = String(Math.floor(timeRemaining / (1000 * 60 * 60))).padStart(2, '0');
//     const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
//     const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');
//     countdownTimerDisplay.textContent = `You can play again in: ${hours}:${minutes}:${seconds}`;
// }



// // Show sliding menu when attempts are exhausted
// function showSlidingMenu() {
//     attemptExhaustedMenu.classList.add("active");
// }

// // Hide sliding menu
// function hideSlidingMenu() {
//     attemptExhaustedMenu.classList.remove("active");
// }

// // Event listener for the ad button to restore attempts
// watchAdButton.addEventListener("click", () => {
//     restoreAttempts();
//     hideSlidingMenu(); // Hide menu after watching ad
//     clearInterval(countdownInterval); // Stop countdown
//     startGameButton.disabled = false; // Re-enable the start button
//     updateAttempts();
// });

// // Restore attempts after watching an ad
// function restoreAttempts() {
//     attemptsLeft = 3; // Restore all attempts
//     alert("Attempts fully restored! You can play again.");
// }












// function startTimer() {
//     clearInterval(timer);
//     timeLeft = 10;
//     timeDisplay.innerText = timeLeft;

//     timer = setInterval(() => {
//         timeLeft--;
//         timeDisplay.innerText = timeLeft;
//         if (tempScore <= 0 && timeLeft <= 0) {
//             clearInterval(timer);


//             failMenu.classList.add('active');
//             closeMenuIcon.addEventListener('click', () => {
//                 failMenu.classList.remove('active');
//             });

//             tryAgainBtn.addEventListener('click', () => {
//                 winMenu.classList.remove('active');
//                 failMenu.classList.remove('active');
//                 // winMenu.classList.remove('active');
//             });


//             shuffleCard();
//             resetGame();
//             startGameButton.disabled = false;
//             isGameActive = false;
//         } else if (timeLeft <= 0 && tempScore >= 0) {
//             clearInterval(timer);

//             winMenu.classList.add('active');


//             closeMenuIconWin.addEventListener('click', () => {
//                 winMenu.classList.remove('active');
//                 failMenu.classList.remove('active');

//                 shuffleCard();
//                 resetGame();
//                 startGameButton.disabled = false;
//                 isGameActive = false;
//             }); 


//             shuffleCard();
//             resetGame();
//             startGameButton.disabled = false;
//             isGameActive = false;
//         }
//     }, 1000);
// }

// function flipCard({ target: clickedCard }) {
//     if (!isGameActive) {
//         alert("Please click 'Start Game' to begin!");
//         return;
//     }
//     if (cardOne !== clickedCard && !disableDeck) {
//         clickedCard.classList.add("flip");
//         if (!cardOne) {
//             cardOne = clickedCard;
//             return;
//         }
        
//         cardTwo = clickedCard;
//         disableDeck = true;
//         let cardOneImg = cardOne.querySelector(".back-view img").src;
//         let cardTwoImg = cardTwo.querySelector(".back-view img").src;
//         matchCards(cardOneImg, cardTwoImg);
//     }
// }


// function matchCards(img1, img2) {
//     if (img1 === img2) {
//         matched++;
//         const scoreForMatch = calculateScore(matched); // Calculate score for the match
//         tempScore += scoreForMatch; // Update tempScore for display if needed
//         allLevelsScore += scoreForMatch; // Add directly to cumulative score




//         scoreDisplay.innerText = score; // Display main score + tempScore
//         winMenuScoreDisplay.innerText = tempScore;
//         startTimer();

//         // Update energy bar based on new tempScore
//         updateEnergyBar();

//         if (matched == 8) {
//             setTimeout(() => {
//                 shuffleCard();
//             }, 1000);
//         }

//         cardOne.removeEventListener("click", flipCard);
//         cardTwo.removeEventListener("click", flipCard);
//         resetSelection();
//     } else {
//         setTimeout(() => {
//             cardOne.classList.add("shake");
//             cardTwo.classList.add("shake");
//         }, 400);

//         setTimeout(() => {
//             cardOne.classList.remove("shake", "flip");
//             cardTwo.classList.remove("shake", "flip");
//             resetSelection();
//         }, 1200);
//     }
// }





// function resetSelection() {
//     cardOne = cardTwo = "";
//     disableDeck = false;
//     updateEnergyBar();
// }

// function calculateScore(matched) {
//     if (matched <= 2) return 10;
//     else if (matched <= 5) return 20;
//     else return 30;
// }

// function shuffleCard() {
//     matched = 0;
//     disableDeck = false;
//     cardOne = cardTwo = "";
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
//     arr.sort(() => Math.random() > 0.5 ? 1 : -1);
//     cards.forEach((card, i) => {
//         card.classList.remove("flip");
//         let imgTag = card.querySelector(".back-view img");
//         imgTag.src = `images/img-${arr[i]}.png`;
//         card.addEventListener("click", flipCard);
//     });
// }

// // Function to update the energy bar based on score
// function updateEnergyBar() {
//     const currentTarget = levelTargets[currentEnergyIndex];
//     const progress = Math.min((allLevelsScore / currentTarget) * 100, 100); // Cap at 100%

//     energyBar.style.width = `${progress}%`;

//     // Check if the current level is completed
//     if (allLevelsScore >= currentTarget) {
//         levelUp();
//     }
// }

// // Function to handle leveling up
// function levelUp() {
//     if (currentEnergyIndex < levelTargets.length - 1) {
//         currentEnergyIndex++; // Move to the next level
//         tempScore = 0; // Reset temp score for the new level
//         energyBar.style.width = "0%"; // Reset energy bar
//         alert(`Congratulations! You've reached level ${levels[currentLevelIndex].name}.`);
        
//     } else {
//         alert("You've reached the maximum level!");
//     }
// }

// function resetGame() {
//     scoreDisplay.innerText = score;
//     // allLevelsScore += tempScore;
//     matched = 0;
//     // tempScore = 0;
//     shuffleCard();
//     updateEnergyBar();
    
// }

// function startGame() {
//     if (attemptsLeft > 0 && !isGameActive) {
//         isGameActive = true;
//         attemptsLeft--;
//         updateAttempts();
//         matched = 0;
//         // attemptCount.textContent = attemptsLeft;
//         tempScore = 0;
//         scoreDisplay.innerText = score; // Display main score + tempScore
//         matched = 0;
//         shuffleCard();
//         startTimer();
//         startGameButton.disabled = true;
//         updateEnergyBar();
//     } else if (attemptsLeft === 0) {
//         showSlidingMenu(); // Show sliding menu if attempts are exhausted
//     }
// }

// // Commit Score function - Adds tempScore to main score when button is clicked
// function commitScore() {
//     score += tempScore; // Add tempScore to the main score
//     tempScore = 0; // Reset tempScore
//     scoreDisplay.innerText = score; // Update score display
//     updateEnergyBar();
//     checkLevelUp();
//     isGameActive = false;
// }

// function checkLevelUp() {
//     for (let i = levels.length - 1; i >= 0; i--) {
//         if (score >= levels[i].scoreNeeded) {
//             if (currentLevelIndex !== i) {
//                 currentLevelIndex = i;
//                 topLevelNumDisplay.innerText = currentLevelIndex;
//                 alert(`Congratulations! You have reached the ${levels[i].name} level!`)
//             }
//             break;
//         }
//     }
//     levelDisplay.innerText = levels[currentLevelIndex].name;
// }

// // End Game function
// function endGame() {
//     clearInterval(timer);
//     resetGame();
//     isGameActive = false;
// }

// // Event listeners for buttons
// startGameButton.addEventListener('click', startGame);
// commitScoreButton.addEventListener('click', commitScore); // New listener for commit button
// // closeMenuSlide.addEventListener('click', failMenu.classList.remove('active'))

// // function startLockOut() {
// //     exustedAttempt.classList.add('active');
// //     lockoutEndTime = Date.now() + lockoutTime;
// //     startGameButton.disabled = true;
// // }




  






const cards = document.querySelectorAll(".card");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById('time');
const startGameButton = document.getElementById("start-game");
const commitScoreButton = document.getElementById("commit-score"); // New button to commit tempScore to score
const closeMenuIcon = document.getElementById('closeMenuIcon');
const closeMenuIconWin = document.getElementById('closeMenuIconWin');
const closeAttemptMenuIcon = document.getElementById('closeAttemptMenuIcon')
const winMenu = document.getElementById('slidingMenuWin');
const failMenu = document.getElementById('slidingMenuFail');
const exustedAttempt = document.getElementById('attemptExusted');
const attemptCount = document.getElementById('attempts');
const tryAgainBtn = document.querySelector('.close');
const winMenuScoreDisplay = document.getElementById("mainScore");
const levelDisplay = document.getElementById('levelDisplay');
const energyBar = document.getElementById('energy-bar');
const topLevelNumDisplay = document.getElementById('top-level');
const attemptExhaustedMenu = document.getElementById("attemptExhaustedMenu"); // New sliding menu
const countdownTimerDisplay = document.getElementById("countdownTimer");
const watchAdButton = document.getElementById("watchAdButton");



let score = 0;
let tempScore = 0; // Temporary score for the current round
let allLevelsScore = 0; //This holds all the scores for the energy bar to use
let timeLeft = 10;
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let timer;
let isGameActive = false;
let currentLevelIndex = 0;
let currentEnergyIndex = 0;
let attemptsLeft = 4;
// const lockoutTime = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
const lockoutTime = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
let lockoutEndTime = null;
let countdownInterval;
let currentRound = 0; // Track the current round
const totalRounds = 3; // Total rounds available

const levels = [
    { name: "Normal", scoreNeeded: 0 },
    { name: "Bronze", scoreNeeded: 100 },
    { name: "Silver", scoreNeeded: 120 },
    { name: "Gold", scoreNeeded: 200 },
    { name: "Platinum", scoreNeeded: 250 }
];


const levelTargets = [50, 90, 130, 170, 240]; // Energy needed per level












function updateAttempts() {
    attemptCount.textContent = attemptsLeft;
    
    if (attemptsLeft === 0) {
        currentRound++;
        if (currentRound < totalRounds) {
            // If it's not the last round, reset attempts for the next round
            attemptsLeft = 3; // Reset attempts for the next round
            alert("You have completed this round! You can continue to the next round.");
            updateAttempts(); // Update display
        } else {
            // If it is the last round, start lockout countdown
            lockoutEndTime = Date.now() + lockoutTime;
            startLockout();
        }
    }
}



















// Function to update attempts display and handle lockout
// function updateAttempts() {
//     attemptCount.textContent = attemptsLeft;
//     if (attemptsLeft === 0) {
//         lockoutEndTime = Date.now() + lockoutTime;
//         startLockout();
//     }
// }

// Lockout countdown logic
function startLockout() {
    startGameButton.disabled = true; // Disable the start button
    showSlidingMenu(); // Show the slide-up menu

    countdownInterval = setInterval(() => {
        const timeRemaining = lockoutEndTime - Date.now();
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            countdownTimerDisplay.textContent = "You can now play!";
            startGameButton.disabled = false;

            // attemptExhaustedMenu.classList.add('active');
            // closeAttemptMenuIcon.addEventListener('click', () => {
            //     attemptExhaustedMenu.classList.remove('active');
            // })
        } else {
            updateCountdownDisplay(timeRemaining);
            console.log(countdownTimerDisplay)
        }
    }, 1000);
}

// Update countdown display
function updateCountdownDisplay(timeRemaining) {
    const hours = String(Math.floor(timeRemaining / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');
    countdownTimerDisplay.textContent = `You can play again in: ${hours}:${minutes}:${seconds}`;
}



// Show sliding menu when attempts are exhausted
function showSlidingMenu() {
    attemptExhaustedMenu.classList.add("active");

    closeAttemptMenuIcon.addEventListener('click', () => {
        attemptExhaustedMenu.classList.remove('active');
        failMenu.classList.remove('active');
        winMenu.classList.remove('active');
    });
}

// Hide sliding menu
function hideSlidingMenu() {
    attemptExhaustedMenu.classList.remove("active");
}

// Event listener for the ad button to restore attempts
watchAdButton.addEventListener("click", () => {
    restoreAttempts();
    hideSlidingMenu(); // Hide menu after watching ad
    clearInterval(countdownInterval); // Stop countdown
    startGameButton.disabled = false; // Re-enable the start button
    updateAttempts();
});

// Restore attempts after watching an ad
function restoreAttempts() {
    attemptsLeft = 3; // Restore all attempts
    alert("Attempts fully restored! You can play again.");
}












function startTimer() {
    clearInterval(timer);
    timeLeft = 10;
    timeDisplay.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.innerText = timeLeft;
        if (tempScore <= 0 && timeLeft <= 0) {
            clearInterval(timer);


            failMenu.classList.add('active');
            closeMenuIcon.addEventListener('click', () => {
                failMenu.classList.remove('active');
            });

            tryAgainBtn.addEventListener('click', () => {
                winMenu.classList.remove('active');
                failMenu.classList.remove('active');
                // winMenu.classList.remove('active');
            });


            shuffleCard();
            resetGame();
            startGameButton.disabled = false;
            isGameActive = false;
        } else if (timeLeft <= 0 && tempScore >= 0) {
            clearInterval(timer);

            winMenu.classList.add('active');


            closeMenuIconWin.addEventListener('click', () => {
                winMenu.classList.remove('active');
                failMenu.classList.remove('active');

                shuffleCard();
                resetGame();
                startGameButton.disabled = false;
                isGameActive = false;
            }); 


            shuffleCard();
            resetGame();
            startGameButton.disabled = false;
            isGameActive = false;
        }
    }, 1000);
}

function flipCard({ target: clickedCard }) {
    if (!isGameActive) {
        alert("Please click 'Start Game' to begin!");
        return;
    }
    if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            cardOne = clickedCard;
            return;
        }
        
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src;
        let cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}


function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        const scoreForMatch = calculateScore(matched); // Calculate score for the match
        tempScore += scoreForMatch; // Update tempScore for display if needed
        allLevelsScore += scoreForMatch; // Add directly to cumulative score




        scoreDisplay.innerText = score; // Display main score + tempScore
        winMenuScoreDisplay.innerText = tempScore;
        startTimer();

        // Update energy bar based on new tempScore
        updateEnergyBar();

        if (matched == 8) {
            setTimeout(() => {
                shuffleCard();
            }, 1000);
        }

        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        resetSelection();
    } else {
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            resetSelection();
        }, 1200);
    }
}





function resetSelection() {
    cardOne = cardTwo = "";
    disableDeck = false;
    updateEnergyBar();
}

function calculateScore(matched) {
    if (matched <= 2) return 10;
    else if (matched <= 5) return 20;
    else return 30;
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

// Function to update the energy bar based on score
function updateEnergyBar() {
    const currentTarget = levelTargets[currentEnergyIndex];
    const progress = Math.min((allLevelsScore / currentTarget) * 100, 100); // Cap at 100%

    energyBar.style.width = `${progress}%`;

    // Check if the current level is completed
    if (allLevelsScore >= currentTarget) {
        levelUp();
    }
}

// Function to handle leveling up
function levelUp() {
    if (currentEnergyIndex < levelTargets.length - 1) {
        currentEnergyIndex++; // Move to the next level
        tempScore = 0; // Reset temp score for the new level
        energyBar.style.width = "0%"; // Reset energy bar
        alert(`Congratulations! You've reached level ${levels[currentLevelIndex].name}.`);
        
    } else {
        alert("You've reached the maximum level!");
    }
}

function resetGame() {
    scoreDisplay.innerText = score;
    // allLevelsScore += tempScore;
    matched = 0;
    // tempScore = 0;
    shuffleCard();
    updateEnergyBar();
    
}

function startGame() {
    if (attemptsLeft > 0 && !isGameActive) {
        isGameActive = true;
        attemptsLeft--;
        currentRound++;
        updateAttempts();
        matched = 0;
        // attemptCount.textContent = attemptsLeft;
        tempScore = 0;
        scoreDisplay.innerText = score; // Display main score + tempScore
        matched = 0;
        shuffleCard();
        startTimer();
        startGameButton.disabled = true;
        updateEnergyBar();
    } else if (attemptsLeft === 0) {
        showSlidingMenu(); // Show sliding menu if attempts are exhausted
    }
}

// Commit Score function - Adds tempScore to main score when button is clicked
function commitScore() {
    score += tempScore; // Add tempScore to the main score
    tempScore = 0; // Reset tempScore
    scoreDisplay.innerText = score; // Update score display
    updateEnergyBar();
    checkLevelUp();
    isGameActive = false;
}

function checkLevelUp() {
    for (let i = levels.length - 1; i >= 0; i--) {
        if (score >= levels[i].scoreNeeded) {
            if (currentLevelIndex !== i) {
                currentLevelIndex = i;
                topLevelNumDisplay.innerText = currentLevelIndex;
                alert(`Congratulations! You have reached the ${levels[i].name} level!`)
            }
            break;
        }
    }
    levelDisplay.innerText = levels[currentLevelIndex].name;
}

// End Game function
function endGame() {
    clearInterval(timer);
    resetGame();
    isGameActive = false;
}

// Event listeners for buttons
startGameButton.addEventListener('click', startGame);
commitScoreButton.addEventListener('click', commitScore); // New listener for commit button
// closeMenuSlide.addEventListener('click', failMenu.classList.remove('active'))

// function startLockOut() {
//     exustedAttempt.classList.add('active');
//     lockoutEndTime = Date.now() + lockoutTime;
//     startGameButton.disabled = true;
// }




  



















// // HTML elements
// const cardDeck = document.querySelector(".deck");
// const startGameButton = document.querySelector(".start-game");
// const commitScoreButton = document.querySelector(".commit-score");
// const tryAgainBtn = document.querySelector(".try-again");
// const levelDisplay = document.querySelector(".level-display");
// const energyBar = document.querySelector(".energy-bar");
// const attemptsDisplay = document.querySelector(".attempts-left");

// // Game variables
// let score = 0; // Player's score
// let tempScore = 0; // Temporary score for the current round
// let allLevelsScore = 0; // Cumulative score across levels
// let attemptsLeft = 4; // Number of attempts allowed
// let matched = 0; // Number of matched pairs
// let currentRound = 0; // Current round number
// let currentLevelIndex = 0; // Current level index
// let currentEnergyIndex = 0; // Current energy index
// let disableDeck = false; // Flag to disable card clicks
// let timer; // Timer variable
// let cardOne, cardTwo; // Currently selected cards

// // Level information
// const levels = [
//     { name: "Beginner", scoreNeeded: 0 },
//     { name: "Intermediate", scoreNeeded: 100 },
//     { name: "Advanced", scoreNeeded: 300 },
//     { name: "Expert", scoreNeeded: 600 },
// ];

// const levelTargets = levels.map(level => level.scoreNeeded);

// // Start the game
// function startGame() {
//     resetGame(); // Reset game state
//     shuffleCard(); // Shuffle cards for the new game
// }

// // Shuffle the cards
// function shuffleCard() {
//     const cards = [...document.querySelectorAll(".card")]; // Get all card elements
//     cards.forEach(card => {
//         card.classList.remove("flip"); // Ensure all cards are unflipped
//         card.addEventListener("click", flipCard); // Add click event to each card
//     });
//     // Shuffle logic here...
// }

// // Flip a card
// function flipCard() {
//     if (disableDeck) return; // Prevent clicks while processing
//     this.classList.add("flip"); // Add flip class to the clicked card

//     // Set the first and second card
//     if (!cardOne) {
//         cardOne = this; // First card flipped
//     } else {
//         cardTwo = this; // Second card flipped
//         disableDeck = true; // Disable further clicks
//         checkForMatch(); // Check if the two flipped cards match
//     }
// }

// // Check for a match between two flipped cards
// function checkForMatch() {
//     // Logic to check if cardOne and cardTwo match
//     if (cardOne.dataset.card === cardTwo.dataset.card) {
//         // Cards match
//         tempScore += calculateScore(matched + 1); // Update score for a successful match
//         matched++; // Increment matched count
//         allLevelsScore += tempScore; // Update cumulative score
//         updateEnergyBar(); // Update energy bar for new level if tempScore allows it
//         checkLevelUp(); // Check for level up

//         // Disable card clicks
//         cardOne.removeEventListener("click", flipCard);
//         cardTwo.removeEventListener("click", flipCard);
//         resetVariables(); // Reset variables for the next attempt
//     } else {
//         setTimeout(() => {
//             cardOne.classList.remove("flip"); // Unflip cards if not a match
//             cardTwo.classList.remove("flip");
//             resetVariables(); // Reset variables after 1 second
//         }, 1000);
//     }
// }

// // Calculate score based on the number of matches
// function calculateScore(matches) {
//     switch (matches) {
//         case 1:
//             return 100;
//         case 2:
//             return 150;
//         case 3:
//             return 200;
//         case 4:
//             return 250;
//         case 5:
//             return 300;
//         case 6:
//             return 400;
//         case 7:
//             return 500;
//         case 8:
//             return 600;
//         default:
//             return 0; // No score for zero matches
//     }
// }

// // Reset necessary variables for the next match
// function resetVariables() {
//     cardOne = cardTwo = ""; // Reset selected cards
//     disableDeck = false; // Re-enable card clicks
// }

// // Update energy bar and check if a level-up is needed
// function updateEnergyBar() {
//     // Calculate the energy level based on the total score
//     let energyNeeded = levelTargets[currentEnergyIndex]; // Target energy for current level
//     energyBar.style.width = `${(allLevelsScore / energyNeeded) * 100}%`; // Update energy bar width
    
//     if (allLevelsScore >= energyNeeded) {
//         currentEnergyIndex++; // Advance to the next level
//         if (currentEnergyIndex < levels.length) {
//             alert(`Congratulations! You've reached the ${levels[currentEnergyIndex].name} level!`);
//             allLevelsScore = 0; // Reset cumulative score for the new level
//             updateEnergyBar(); // Refresh energy bar
//             levelDisplay.textContent = levels[currentEnergyIndex].name; // Update level display
//         } else {
//             alert("You've reached the highest level!"); // Max level reached
//         }
//     }
// }

// // Check if the player has leveled up
// function checkLevelUp() {
//     if (score >= levels[currentLevelIndex].scoreNeeded) {
//         currentLevelIndex++;
//         levelDisplay.innerText = levels[currentLevelIndex].name; // Update level display
//         if (currentLevelIndex < levels.length) {
//             alert(`Congratulations! You've leveled up to ${levels[currentLevelIndex].name}`);
//         }
//     }
// }

// // Reset the game state
// function resetGame() {
//     clearInterval(timer); // Clear any existing timer
//     score = 0; // Reset score
//     tempScore = 0; // Reset temporary score
//     allLevelsScore = 0; // Reset cumulative score
//     attemptsLeft = 4; // Reset attempts
//     matched = 0; // Reset matched pairs count
//     currentRound = 0; // Reset current round
//     currentEnergyIndex = 0; // Reset energy index
//     updateAttempts(); // Update attempt display
//     shuffleCard(); // Shuffle cards for a new game
// }

// // Event listeners
// startGameButton.addEventListener("click", startGame); // Start game button
// commitScoreButton.addEventListener("click", commitScore); // Commit score button
// tryAgainBtn.addEventListener("click", resetGame); // Try again button
