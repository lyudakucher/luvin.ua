$(document).ready(function() {

$('.question').click(function(){
	$('.answer').slideUp();
//if($(this).next()){
//	console.log('true');}
//	console.log($(this).next().visibility);
	
	$(this).next().show();

});

$('.hideAns').click(function(){
	$('.answer').slideUp();

});


})

