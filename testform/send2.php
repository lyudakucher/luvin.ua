<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>formSendAjax</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script src="script1.js"></script>
</head>
<body>
	<form action='#' id="form" method="post" name="form">
	    <input type="text" name="name" required="required"/>
	    <input type="text" name="phone" required="required"/>
	    <input name="submit" type="submit" value="Заказать звонок"/>
	</form>
	<h3><?php include "send-php.php"?></h3>
		
</body>
</html>
