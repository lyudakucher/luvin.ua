<?php

$name2=$_POST['name1'];
$email2=$_POST['email1'];
$phone2=$_POST['phone1'];
//$contact2=$_POST['contact1'];

		$to = 'andriy.ilin90@gmail.com, andy@andy.s-host.net'; 
        $subject = $_POST['subject1'];
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name2.'</p>
                        <p>E-mail: '.$email2.'</p>   
                        <p> Телефон: '.$phone2.'</p>
                        <p> Cуть звернення: '.$subject.'</p>
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: andy@andy.s-host.net\r\n"; 
mail($to, $subject, $message, $headers); 
         
        $message1 = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>шановний(а) '.$name2.' </p>
                        <p>дякуємо за замовлення</p>
                        <p>ви звернулись до компанії з приводу "'.$subject.'"</p> 
                        <p>ваше звернення опрацюється менеджером компанії</p>   
                        <p>та Вам зателефонують за номером '.$phone2.' в найближчий час</p> 
                          <p>з повагою, компанія</p>
                             <a href="luvin.ua">luvin.ua</a>                   
                    </body>
                </html>'; 
        $headers1  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers1 .= "From: luvin.ua \r\n";
mail($email2, $subject, $message1, $headers1);
        echo "Your mail has been sent successfuly ! Thank you for your feedback";
?>