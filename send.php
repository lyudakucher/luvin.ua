<?php

$name2=$_POST['name1'];
$email2=$_POST['email1'];
$phone2=$_POST['phone1'];
//$contact2=$_POST['contact1'];
$date1 = date("d.m.y"); 
$time1 = date("H:i:s"); 

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
                        <p> Дата та час замовлення: '.$date1.' / '.$time1.'</p>

                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: andy@andy.s-host.net\r\n"; 
mail($to, $subject, $message, $headers); 
         
        $message1 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body style="margin: 0px;">
	<table cellpadding="0" cellspacing="0" border="0" width="100%" align="center" style="margin: 0; padding: 0;">
		<tr>
			<td align="center" height="100%" style="background-image: url(http://andy.s-host.net/luvin_email/logo_bgr.png);">
                <table cellpadding="0" cellspacing="0" border="0" align="center" style="max-width: 640px;">
                    <tr height="20px">
                        <td colspan="7"></td>
                    </tr>
                    <tr height="38px">
                        <td width="5%"></td>
                        <td width="1%" style="min-width: 6px;"></td>
                        <td width="32%"></td>
                        <td align="center" width="26%" rowspan="3" bgcolor="#ffffff">
                            <a href="http://luvin.ua/?utm_source=luvin_mail_order&utm_medium=Logo&utm_campaign=luvin_mail_order" target="_blank">
                                <img src="http://andy.s-host.net/luvin_email/1.png" border="0" style="display: block;" alt="Luvin" title="Luvin">
                            </a>
                        </td>
                        <td width="32%"></td>
                        <td width="1%" style="min-width: 6px;"></td>
                        <td width="5%"></td>
                    </tr>
                    <tr height="5px">
                        <td width="5%"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="32%" bgcolor="#761e86"></td>
                        <td width="32%" bgcolor="#761e86"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="5%"></td>
                    </tr>
                    <tr height="20px">
                        <td width="5%"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="32%" bgcolor="#ffffff"></td>
                        <td width="32%" bgcolor="#ffffff"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="5%"></td>
                    </tr>
                    <tr height="20px">
                        <td width="5%"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td colspan="3" width="90%">
                            <table cellpadding="0" cellspacing="0" border="0" align="center" width="100%" bgcolor="#ffffff" style="padding: 10% 10% 5% 10%">
                                <tr>    
                                    <td align="left" style="color: #000000; font: italic bold 24px Georgia,Arial,helvetica,sans-serif!important; padding:0px 0px 23px 0px;">Вітаємо, '.$name2.'! </td>
                                </tr>
                                <tr>    
                                    <td align="left" style="color: #000000; font: 14px/20px  Arial,helvetica,sans-serif!important; padding:0px 0px 28px 0px;">
                                        Дякуємо за інтерес до компанії <strong>LUVIN<sup>tm</sup></strong>.<br>Ваше звернення на '.$subject.' прийнято та передано у відділ продажів.<br><br>Найближчим часом на вказаний номер '.$phone2.' зателефонує спеціаліст, розповість всі деталі та надасть відповіді на всі запитання.
                                    </td>
                                </tr>
                                <tr>    
                                    <td align="left" style="color: #3a3a3a; font: 12px/15px  Arial,helvetica,sans-serif!important; padding:0px 0px 28px 0px;">
                                        Ви залишили запит '.$date1.' о '.$time1.'
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="5%"></td>
                    </tr>
                    <tr height="20px">
                        <td width="5%" bgcolor="#eeeaf3"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td colspan="3" width="90%">
                            <table bgcolor="#eeeaf3" cellpadding="0" cellspacing="0" border="0" align="center" width="100%" style="padding: 5% 10%;">
                                <tr>
                                    <td>
                                        <span style="color: #3a3a3a; font: 12px/15px  Arial,helvetica,sans-serif!important; display: inline-block; width: 49%; min-width: 200px;">
                                            <span style="line-height: 24px"></style><strong>Наша адреса</strong></span><br>ТОВ «Євровікна» - <strong>LUVIN<sup>tm</sup></strong><br>м. Вінниця, вул. Чехова, 7Б
                                        </span>
                                        <span style="color: #3a3a3a; font: 12px/15px  Arial,helvetica,sans-serif!important; display: inline-block; width: 49%; min-width: 200px;">
                                        <span style="line-height: 24px"><strong>Телефон для консультацій</strong></span><br><span style="text-decoration: 0; color: #3a3a3a !important;">&#173;+38 &#173;067 &#173;433 &#173;2234</span><br>пн-пт: з 9.00 до 18.00
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="5%" bgcolor="#eeeaf3"></td>
                    </tr>
                    <tr height="20px">
                        <td width="5%" bgcolor="#eeeaf3"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="32%" bgcolor="#eeeaf3"></td>
                        <td align="center" width="26%" rowspan="3" bgcolor="#eeeaf3">
                            <table cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td width="36px" align="center">
                                        <a href="https://www.facebook.com/viknaLUVIN/?fref=ts?utm_source=luvin_mail_order&utm_medium=soc_facebook&utm_campaign=luvin_mail_order" target="_blank">
                                            <img alt="facebook.com/viknaLUVIN" title="facebook.com/viknaLUVIN" src="http://andy.s-host.net/luvin_email/facebook.png" width="32px" height="32px" border="0" style="display: block;">
                                        </a>
                                    </td>
                                    <td width="34px">
                                        <a href="https://plus.google.com/103224566250779286194/videos?utm_source=luvin_mail_order&utm_medium=soc_google&utm_campaign=luvin_mail_order" target="_blank">
                                            <img alt="plus.google.com/103224566250779286194" title="plus.google.com/103224566250779286194" src="http://andy.s-host.net/luvin_email/google-plus.png" width="32px" height="32px" border="0" style="display: block;">
                                        </a>
                                    </td>
                                    <td width="34px">
                                        <a href="https://twitter.com/TM_Luvin?utm_source=luvin_mail_order&utm_medium=soc_twitter&utm_campaign=luvin_mail_order" target="_blank">
                                            <img alt="twitter.com/TM_Luvin" title="twitter.com/TM_Luvin" src="http://andy.s-host.net/luvin_email/twitter.png" width="32px" height="32px" border="0" style="display: block;">
                                        </a>
                                    </td>
                                    <td width="32px">
                                        <a href="https://www.youtube.com/channel/UCFsffd_rCDWy28il7mTiWWA?utm_source=luvin_mail_order&utm_medium=soc_youtube&utm_campaign=luvin_mail_order" target="_blank">
                                            <img alt="youtube" title="Youtube" src="http://andy.s-host.net/luvin_email/youtube.png" width="32px" height="32px" border="0" style="display: block;">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="32%" bgcolor="#eeeaf3"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="5%" bgcolor="#eeeaf3"></td>
                    </tr>
                    <tr height="5px">
                        <td width="5%" bgcolor="#eeeaf3"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="32%" bgcolor="#761e86"></td>
                        <td width="32%" bgcolor="#761e86"></td>
                        <td width="1%" bgcolor="#761e86" style="min-width: 6px;"></td>
                        <td width="5%" bgcolor="#eeeaf3"></td>
                    </tr>
                    <tr height="20px">
                        <td width="5%" bgcolor="#eeeaf3"></td>
                        <td width="1%" bgcolor="#eeeaf3" style="min-width: 6px;"></td>
                        <td width="32%" bgcolor="#eeeaf3"></td>
                        <td width="32%" bgcolor="#eeeaf3"></td>
                        <td width="1%" bgcolor="#eeeaf3" style="min-width: 6px;"></td>
                        <td width="5%" bgcolor="#eeeaf3"></td>
                    </tr>
                    <tr height="20px">
                        <td colspan="7" bgcolor="#eeeaf3"></td>
                    </tr>
                </table> 
            </td>
        </tr>
    </table>
</body>
</html>'; 
        $headers1  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers1 .= "From: luvin.ua \r\n";
mail($email2, $subject, $message1, $headers1);
        echo "Your mail has been sent successfuly ! Thank you for your feedback";
?>