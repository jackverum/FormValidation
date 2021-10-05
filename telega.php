<?php

/* https://api.telegram.org/bot2016716656:AAHbP0PkegwVV6punFl_SlnnEk0OTrEk5uw/getUpdates */
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$token = "2016716656:AAHbP0PkegwVV6punFl_SlnnEk0OTrEk5uw";
$chat_id = "-423324412";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  // header('Location: thanks.html
  $message = 'Данные отправленны!';
} else {
  echo "Error";
}
?>