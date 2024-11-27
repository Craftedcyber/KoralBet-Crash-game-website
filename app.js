const nav = document.getElementById("nav-container");  
const burger = document.getElementById("burger");  
const buttons = document.querySelectorAll('.deposit-btn');
const registerBtn = document.getElementById('registerBtn');
const registerBtnSnd = document.getElementById('registerBtn-snd');
const formPopup = document.getElementById('signin-popup');
const formPopupSnd = document.getElementById('signin-popup-snd');
const closeBtn = document.querySelector('.close-btn');
// Function to show deposit popup
function showDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'flex';
}

// Function to close deposit popup
function closeDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'none';
}

// Add event listener to deposit button
document.addEventListener('DOMContentLoaded', function() {
    const depositButton = document.getElementById('deposit');
    if (depositButton) {
        depositButton.addEventListener('click', showDepositPopup);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const depositButton = document.getElementById('second-deposit');
    if (depositButton) {
        depositButton.addEventListener('click', showDepositPopup);
    }
});

// Close popup when clicking outside the content area
document.addEventListener('click', function(event) {
    const popup = document.getElementById('deposit-popup');
    const popupContent = document.querySelector('.deposit-content');
    
    if (popup && event.target === popup) {
        closeDepositPopup();
    }
});

// Prevent popup from closing when clicking inside the content
document.querySelector('.deposit-content')?.addEventListener('click', function(event) {
    event.stopPropagation();
});

function showDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'flex';
}

function closeDepositPopup() {
    document.getElementById('deposit-popup').style.display = 'none';
}

function copyAddress() {
    const address = document.getElementById('crypto-address').textContent;
    navigator.clipboard.writeText(address).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 2v10h10V2H4zm9 9H5V3h8v8z"/>
                    <path d="M2 6H1v9c0 .6.4 1 1 1h9v-1H2V6z"/>
                </svg>
                Copy Address
            `;
        }, 2000);
    });
}

// Add click handlers for crypto options
document.querySelectorAll('.crypto-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.crypto-option').forEach(opt => {
            opt.classList.remove('active');
        });
        option.classList.add('active');
    });
});

// Show popup for both register and login buttons
registerBtn.addEventListener('click', () => {
    formPopup.style.display = 'block';
});

registerBtnSnd.addEventListener('click', () => {
    formPopup.style.display = 'block';
});

// Close popup when X is clicked
closeBtn.addEventListener('click', () => {
    formPopup.style.display = 'none';
});

// Close popup when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === formPopup) {
        formPopup.style.display = 'none';
    }
});

buttons.forEach(button => {
  button.addEventListener("click", showPopup);
});
// Function to open or close the navigation  
function openNav() {  
    // Check if the nav is currently hidden  
    if (nav.style.display === "none" || nav.style.display === "") {  
        nav.style.display = "grid"; // Show the navigation  
        
        // Add animation classes  
        nav.classList.add("animate__animated", "animate__fadeInLeft");  
        nav.classList.remove("animate__slideOutLeft"); // Remove fade out animation if present  
    } else {  
        nav.classList.remove("animate__fadeInLeft"); // Remove fade in animation  
        nav.classList.add("animate__animated", "animate__slideOutLeft"); // Add fade out animation  

        // Use 'animationend' event to hide nav after animation completes  
        nav.addEventListener('animationend', function() {  
            nav.style.display = "none"; // Hide the navigation after animation ends  
        }, { once: true }); // Ensures the event listener is removed after execution  
    }  
}  
document.addEventListener('click', function(event) {
    const nav  = document.getElementById('nav-container');
    if (nav && event.target === nav) {
        closeNav();
    }
});

function closeNav(){
    document.getElementById('nav-container').style.display = 'none';
}
burger.addEventListener("click", openNav);


function showDepositContainer() {
    // Show the overlay and the deposit container (popup)
    document.getElementById("overlay").style.display = "block";
    document.getElementById("depositContainer").style.display = "block";
}

function hideDepositContainer() {
    // Hide the overlay and the deposit container (popup)
    document.getElementById("overlay").style.display = "none";
    document.getElementById("depositContainer").style.display = "none";
}
// Close pop-up when clicking outside the content area
window.addEventListener("click", function(event) {
    if (event.target == hideDepositContainer) {
      closePopupHandler();
    }
});