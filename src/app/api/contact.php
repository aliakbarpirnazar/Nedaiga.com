<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// فقط POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$firstName = htmlspecialchars(trim($data["firstName"] ?? ""), ENT_QUOTES, 'UTF-8');
$lastName = htmlspecialchars(trim($data["lastName"] ?? ""), ENT_QUOTES, 'UTF-8');
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$description = htmlspecialchars(trim($data["description"] ?? ""), ENT_QUOTES, 'UTF-8');
$captchaInput = trim($data["captcha"] ?? "");

// بررسی فیلدها
if (!$firstName || !$lastName || !$email || !$description || !$captchaInput) {
    http_response_code(400);
    echo json_encode(["error" => "Please fill in all required fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match("/[\r\n]/", $email)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email address."]);
    exit;
}

// بررسی CAPTCHA
if (empty($_SESSION["captcha_code"]) || strtolower($captchaInput) !== strtolower($_SESSION["captcha_code"])) {
    http_response_code(400);
    echo json_encode(["error" => "CAPTCHA is incorrect."]);
    exit;
}
unset($_SESSION["captcha_code"]); // پاکسازی کپچا برای امنیت بیشتر

// ارسال ایمیل
$to = "info@nedaiga.com";
$subject = "Contact Form Submission";
$message = "
First Name: $firstName
Last Name: $lastName
Email: $email
Phone: " . ($phone ?: "Not Provided") . "

Request Description:
$description
";
$headers = "From: Neda Website <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Failed to send email. Please try again later."]);
}
?>
