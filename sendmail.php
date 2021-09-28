<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer-6.5.1/src/Exception.php'
require 'PHPMailer-6.5.1/src/PHPMailer'


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer-6.5.1/language/');
$mail->isHTML(true);

//Recipients - от кого письмо
$mail->setFrom('codejs@i.ua', 'MailerCodeJS');
//recipient - кому отправить
$mail->addAddress('codejs@i.ua');   
//format to HTML
$mail->Subject = 'Отправка письма';


// Тело письма
$body = ' <h1>Отправка данных на почту</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p>Имя: '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p>E-mail: '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['age']))){
    $body.='<p>Возраст: '.$_POST['age'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p>Сообщение: '.$_POST['message'].'</p>';
}




$mail->Body = $body;

// Отправляем
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправленны!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);





// Оберіть варіанти
// Код 12nc (комерційний код) *

// Серійний номер *

// iСерійний номер є унікальним ідентифікатором вашого пристрою (наприклад. 379633322115).
// Дата придбання *


// дд.мм.гггг
// Номер фіксального чеку *

// Назва магазину *

// Оберіть варіанти
// Поле для завантаження фото *

// Файл не выбран
// Завантажити фотоЗавантажити
// Звертаємо Вашу увагу, що перевірку справжності чека буде проводитись через сайт податкової служби.

// Обов'язкові поля *


// Зареєструвати