<?php
/*
<$connection = mysql_connect("localhost", "root", ""); 
$db = mysql_select_db("mydba", $connection); >
</$connection = mysql_connect("localhost", "root", ""); 
$db = mysql_select_db("mydba", $connection);
*/

$name2=$_POST['name1'];
$email2=$_POST['email1'];
$password2=$_POST['password1'];
$contact2=$_POST['contact1'];

		$to = 'andriy.ilin90@gmail.com, andy@andy.s-host.net'; 
        $subject = 'Обратный звонок';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$name2.'</p>
                        <p>Телефон: '.$email2.'</p>   
                        <p>пароль: '.$password2.'</p>
                        <p>контакт: '.$contact2.'</p>                         
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
                        <p>ваше звернення опрацюється менеджером компанії</p>   
                        <p>та Вам зателефонують за номером '.$contact2.' в найближчий час</p> 
                          <p>з повагою, компанія</p>
                             <a href=\'luvin.ua \'>luvin.ua</a>                   
                    </body>
                </html>'; 
        $headers1  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers1 .= "From: luvin.ua \r\n";
mail($email2, $subject, $message1, $headers1);
        echo "Your mail has been sent successfuly ! Thank you for your feedback";
/*
$query = mysql_query("insert into form_element(name, email, password, contact) values ('$name2', '$email2', '$password2','$contact2')");
echo "Form Submitted Succesfully";
mysql_close($connection);
*/
?>