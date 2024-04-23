document.addEventListener("DOMContentLoaded", function() {
    var acceptBtn = document.getElementById("accept-btn");
    var customizeBtn = document.getElementById("customize-btn");
    var closeBtn = document.getElementById("closeBtn"); // Assuming you have a close button with id "closeBtn"
    var cookiePopup = document.querySelector(".cookie-popup");
    var openedFromPopup = sessionStorage.getItem("openedFromPopup");

    // Function to show the cookie popup with fade-in effect
    function showCookiePopup() {
        cookiePopup.style.opacity = "1";
    }

    // Function to hide the cookie popup with fade-out effect
    function hideCookiePopup() {
        cookiePopup.style.opacity = "0";
        setTimeout(function() {
            cookiePopup.style.display = "none";
        }, 5000); // Adjust the timeout value to match the transition duration
    }

    // Event listener for the accept button
    acceptBtn.addEventListener("click", function() {
        // Set cookie to indicate user consent
        // You would typically set a cookie here to remember the user's choice
        hideCookiePopup(); // Hide the cookie popup with fade-out effect
    });

    // Event listener for the close button
    closeBtn.addEventListener("click", function() {
        if (openedFromPopup) {
            // Close the popup window
            window.close();
        } else {
            // Redirect to the homepage or perform any other action
            // For demonstration purposes, let's redirect to the homepage
            window.location.href = "index.html";
        }
    });

    // Check if the Cookie Policy page was opened from the cookie popup
    if (openedFromPopup === null) {
        // Set a session storage flag indicating that the Cookie Policy page was opened from the popup
        sessionStorage.setItem("openedFromPopup", "true");
        // Show the cookie popup with fade-in effect
        showCookiePopup();
    }
});
