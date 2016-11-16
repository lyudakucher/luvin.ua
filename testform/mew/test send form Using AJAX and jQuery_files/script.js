
$(document).ready(function(){
$("#submit").click(function(){
var name = $("#name").val();
var email = $("#email").val();
var password = $("#password").val();
var contact = $("#contact").val();
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name1='+ name + '&email1='+ email + '&password1='+ password + '&contact1='+ contact;
if(name==''||email==''||password==''||contact=='')
{
//	$('.valid').css('display','block');
alert("Please Fill All Fields");
}
else
{
// AJAX Code To Submit Form.
$.ajax({
type: "POST",
url: "ajaxsubmit.php",
data: dataString,
cache: false,
success: function(result){
	$("#name").val('');
	$("#email").val('');
	$("#password").val('');
	$("#contact").val('');
alert(result);
}
});
}
return false;
});
});