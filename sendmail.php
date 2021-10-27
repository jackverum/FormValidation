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
$mail->IsHTML(true);

//Recipients - от кого письмо
$mail->setFrom('codejs@i.ua', 'MailerCodeJS');
//recipient - кому отправить
$mail->addAddress('codejs@i.ua');   
//format to HTML
$mail->Subject = 'Отправка письма';

// Hend - рука
$hand = "Правая";
if($_POST['hand'] == "left") {
    $hand = "Левая";
}


// Тело письма
$body = ' <h1>Отправка данных на почту</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p>Имя: '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p>E-mail: '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['hand']))) {
    $body.='<p>Рука: '.$hand.'</p>'
}
if(trim(!empty($_POST['age']))){
    $body.='<p>Возраст: '.$_POST['age'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p>Сообщение: '.$_POST['message'].'</p>';
}

//Send file
if(!empty($_FILES['image']['tmp_name'])) {
    // path downloadfile
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    // download file
    if (copy($_FILES['image']['tmp_nmae'], $filePath)) {
        $fileAttach = $filePath;
        $body.='<p>Фото в приложении</p>';
        $mail->addAttachment($fileAttach);
    }
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


/>