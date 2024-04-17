// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    var acceptBtn = document.getElementById("accept-btn");
    var customizeBtn = document.getElementById("customize-btn");
    var modal = document.getElementById("custom-modal");
    var closeModal = document.querySelector(".close");

    acceptBtn.addEventListener("click", function() {
        // Set cookie to indicate user consent
        // You would typically set a cookie here to remember the user's choice
        modal.style.display = "none"; // Hide the modal
    });

    customizeBtn.addEventListener("click", function() {
        modal.style.display = "block"; // Display the modal
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none"; // Hide the modal when close button is clicked
    });

    // Close the modal if user clicks outside of it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission (saving preferences)
    var form = document.getElementById("cookie-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        // Handle saving preferences (e.g., update cookie settings)
        alert("Preferences saved successfully!"); // Temporary alert for demonstration
        modal.style.display = "none"; // Hide the modal after saving preferences
    });
});

// Function to set a cookie with the given name, value, and expiration date
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get the value of a cookie with the given name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

document.addEventListener("DOMContentLoaded", function() {
    var acceptBtn = document.getElementById("accept-btn");
    var customizeBtn = document.getElementById("customize-btn");
    var modal = document.getElementById("custom-modal");
    var closeModal = document.querySelector(".close");

    // Check if cookie preferences are saved
    var cookiePreferences = getCookie("cookie_preferences");
    if (cookiePreferences) {
        // Apply saved preferences here (e.g., load scripts based on preferences)
        console.log("Cookie preferences found:", cookiePreferences);
    }

    acceptBtn.addEventListener("click", function() {
        // Set cookie to indicate user consent
        // You would typically set a cookie here to remember the user's choice
        modal.style.display = "none"; // Hide the modal
        setCookie("cookie_preferences", "accepted", 365); // Save cookie preferences for 1 year
    });

    customizeBtn.addEventListener("click", function() {
        modal.style.display = "block"; // Display the modal
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none"; // Hide the modal when close button is clicked
    });

    // Close the modal if user clicks outside of it
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission (saving preferences)
    var form = document.getElementById("cookie-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        // Handle saving preferences (e.g., update cookie settings)
        var selectedPreferences = [];
        var checkboxes = form.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedPreferences.push(checkbox.id);
            }
        });
        setCookie("cookie_preferences", JSON.stringify(selectedPreferences), 365); // Save cookie preferences for 1 year
        modal.style.display = "none"; // Hide the modal after saving preferences
    });
});

