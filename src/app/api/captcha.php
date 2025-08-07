<?php
session_start();

// ساخت کد تصادفی
$code = substr(str_shuffle("ABCDEFGHJKLMNPQRSTUVWXYZ23456789"), 0, 5);
$_SESSION["captcha_code"] = $code;

// ساخت تصویر
$width = 120;
$height = 40;
$image = imagecreatetruecolor($width, $height);

// رنگ‌ها
$bgColor = imagecolorallocate($image, 255, 255, 255);
$textColor = imagecolorallocate($image, 0, 0, 0);
$lineColor = imagecolorallocate($image, 200, 200, 200);

imagefilledrectangle($image, 0, 0, $width, $height, $bgColor);

// خطوط مزاحم
for ($i = 0; $i < 5; $i++) {
    imageline($image, rand(0,$width), rand(0,$height), rand(0,$width), rand(0,$height), $lineColor);
}

// نوشتن متن
$font = __DIR__ . "/captchacode.otf"; // مسیر فونت TTF (در کنار فایل PHP قرار بده)
imagettftext($image, 20, 0, 10, 30, $textColor, $font, $code);

// هدر برای تصویر
header("Content-type: image/png");
imagepng($image);
imagedestroy($image);
?>
