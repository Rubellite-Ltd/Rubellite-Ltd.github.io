<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate inputs
    $name = cleanInput($_POST["name"]);
    $email = cleanInput($_POST["email"]);
    $message = cleanInput($_POST["message"]);

    $errors = array();

    // Validate name
    if (empty($name)) {
        $errors[] = "Name is required";
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address";
    }

    // Validate message
    if (empty($message)) {
        $errors[] = "Message is required";
    }

    // If there are validation errors, return them
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(array("errors" => $errors));
        exit;
    }

    // Send email
    $to = "tradesphere@icloud.com"; // Update with your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(array("message" => "Thank you! Your message has been sent."));
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Oops! Something went wrong. Please try again later."));
    }
} else {
    // Redirect to contact form if accessed directly
    header("Location: contact.html");
    exit;
}

// Function to clean input data
function cleanInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

?>
