document.addEventListener("DOMContentLoaded", function() {
    var acceptBtn = document.getElementById("accept-btn");
    var customizeBtn = document.getElementById("customize-btn");
    var closeBtn = document.getElementById("closeBtn");
    var cookiePopup = document.querySelector(".cookie-popup");
    var openedFromPopup = sessionStorage.getItem("openedFromPopup");

    acceptBtn.addEventListener("click", function() {
        // Set cookie to indicate user consent
        // You would typically set a cookie here to remember the user's choice
        cookiePopup.style.display = "none"; // Hide the cookie popup
    });

 

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
    }
});
