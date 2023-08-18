<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $email_from = 'shirvilsheth@gmail.com';
    $email_subject = "New Form Submission";
    $email_body = "User Name: $name.\n" .
                  "User Email: $email.\n" .
                  "User Message: $message.\n";

    $to = "shirvil@umich.edu";

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Mail sent successfully.";
    } else {
        echo "Error sending mail.";
    }
} else {
    echo "Invalid request method.";
}
?>
