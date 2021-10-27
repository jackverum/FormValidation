<?php

/* https://api.telegram.org/bot2016716656:AAHbP0PkegwVV6punFl_SlnnEk0OTrEk5uw/getUpdates */
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$image = $_POST['image'];
$imageFile = $_FILES['image']['tmp_name'];
// $mail = __DIR__ . "/files/" . $_FILES['image']['name'];

$token = "2016716656:AAHbP0PkegwVV6punFl_SlnnEk0OTrEk5uw";
$chat_id = "-423324412";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Foto' => $image,
  // 'File' => $imageFile,
  // 'Filesss' => $mail,
);
// if(!empty($_FILES['image']['tmp_name'])) {
//   // path downloadfile
//   $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
//   // download file
//   if (copy($_FILES['image']['tmp_nmae'], $filePath)) {
//       $fileAttach = $filePath;
//       $body.='<p>Фото в приложении</p>';
//       $mail->addAttachment($fileAttach);
//   }
// }

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";

};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>