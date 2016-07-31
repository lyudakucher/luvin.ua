$(document).ready(function() {

/*
  var navli = $('ul#menu li');

 $('.section').waypoint(function(){
	 
	 var hash=$(this).attr('id');
	 console.log(hash);
	 console.log($('.section'));
	 navli.removeClass('active');
	 $.each(navli, function(){
		if($(this).children('a').attr('href').slice(1) == hash) {
			$(this).addClass('active');
		};
	 });
 }, {
	offset:'30%'	 
 });   
*/

$('.feedback_slider').slick({
//	dots: true,
  infinite: true,
  slidesToShow: 2,
  
  slidesToScroll: 2,

  adaptiveHeight: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
//   appendDots: $('.slick-dots'),
/*
  autoplay: true,
  autoplaySpeed: 2000,
*/responsive: [
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.feedback-slider_content').slick({
// dots: true,
  infinite: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
//   appendDots: $('.slick-dots'),
/*
  autoplay: true,
  autoplaySpeed: 2000,
*/
});

$('h2.title').each(function() {
  $(this).waypoint(function() {
  // console.log($(this));
    $(this.element).next().animate({ width: "30%"}, 1100);
 //   this.destroy();
},{ 
  offset: '99%'
  });
});

$('.gallery_img_previev').click(function(){
	var old_id = $(this).attr('src');
	$(this).parent().siblings().attr('src', old_id);
	//console.log($(this).parent().before().before());
	//console.log($(this).parent().siblings());
});

/*
newImg.animate(css, SPEED, function() {
    var old_id = img.attr('id');
    img.remove();
    newImg.attr('id', old_id);
    newImg.removeClass('morpher');
    (callback || function() {})();
});
*/

$('.benefits_item').waypoint(function(direction) {
$('.benefits_item').addClass('animated flash');
},{ 
  offset: '99%'

});

$('.num').waypoint(function(direction) {
$('.num').animate({ num: 115784 - 10000/* - начало */ }, {
    duration: 1500,
    step: function (num){
        this.innerHTML = (num + 10000).toFixed(0) // + '%'
    }
})},{ 
  offset: '99%'

});


$('.read-more_wrap1').hide();
$('.read-more_wrap2').hide();
$('.read-more_wrap3').hide();
$(".readMoreOption1").click(function() {
	$(".read-more_wrap1").slideToggle( "slow", function() {
  });
});
$(".readMoreOption2").click(function() {
	$(".read-more_wrap2").slideToggle( "slow", function() {
  });
});
$(".readMoreOption3").click(function() {
	$(".read-more_wrap3").slideToggle( "slow", function() {
  });
});
	
/*
$(".toggle_mnu").click(function() {
	$(".sandwich").toggleClass("active");
	$('.menu').toggleClass('trust-exp').css('display','');
});
*/

function trutime() {
  
  var deadline = 'july 31 2016 14:20:59 GMT+03:00';
  
  initializeClock('clock', deadline);
  
  //Initialize clock
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    updateClock(endtime); 
    var timeinterval = setInterval(function() {
      var t = getTimeRemaining(endtime);
      updateClock(endtime);
      if ( t.total <= 0) {
        clearInterval(timeinterval);
      //  console.log('time end');
         $('.rem').show();
		  $('.rem_first').hide();
      } 
    }, 1000);
  }
  
  //Calculate time remaining
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
     if ( t <= 0) {
       // $('#clock').hide();
         $('.rem_first').hide();
         $('.rem').show();
		 t=0;
      } 

    var days = Math.floor( t/(1000*60*60*24) );
    var hours = Math.floor( (t/(1000*60*60)) %  24 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var seconds = Math.floor( (t/1000) % 60 );
    
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function updateClock(endtime) {
    var t = getTimeRemaining(endtime);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');  

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);      
  }  
};

trutime();
/*

 $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('nav ul li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('nav ul li a').each(function () {
           $(this).removeClass('activenav');
            $(".sandwich").removeClass("active");
            $('.trust').toggleClass('trust-exp').css('display','');
		   
            })
        $(this).addClass('activenav');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
    function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos +50 && refElement.position().top + refElement.height() > scrollPos + 50) {
            $('#menu ul li a').removeClass("activenav");
            currLink.addClass("activenav");
        }
        else{
            currLink.removeClass("activenav");
        }
    }
    );};
*/

$("#back-top").hide();	
$(window).scroll(function(){
	var scroll_top = $(this).scrollTop();
    if (scroll_top<500){	
		$('#back-top').fadeOut();			  
	}
	else {
		 $('#back-top').fadeIn();
	}
});

$('#back-top a').click(function () {
	$('body,html').animate({
	    scrollTop: 0
	}, 800);
	return false;
});

/*
	$('.butContrCont').eq(3).addClass('activeContCont');
	 $('.cityPopUpAll').addClass('showCityContact');;
     $('.cityPopUpStyle').addClass('contCityDisplayNone');
     $('.cityPopUpStyle').eq(3).removeClass('contCityDisplayNone').addClass('contCityDisplayBlock');
*/


$('.butContrCont').on('click', function () {
    var value=$(this).attr('data-atcont');
	$('.butContrCont').removeClass('activeContCont');
	$(this).addClass('activeContCont');
    $('.cityPopUpAll').addClass('showCityContact');;
     
/*
     $('.cityPopUpStyle').each(function(){
	  $(this).removeClass('contCityDisplayBlock').addClass('contCityDisplayNone');
     });
*/
      $('.cityPopUpStyle').removeClass('contCityDisplayBlock').addClass('contCityDisplayNone');
     $('.cityPopUpStyle').eq(value).removeClass('contCityDisplayNone').addClass('contCityDisplayBlock');    
});

$('.showForm').on('click', function () {
	$('.formStyle').show();
	$('.nameForm').show();
	$('.nameFormComent').show();
	$('.formThanxStyle').hide();

	var content=$(this).contents().val();
	$('.nameForm').text( $(this).html());
	$.magnificPopup.open({
          items: {
		      src: '#formPopUp'
		    },
		  type: 'inline' 
	});		
});

var magnificPopup = $.magnificPopup.instance; 
// save instance in magnificPopup variable

$("#submit").click(function(){
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var subject = $('.nameForm').html();
	var dataString = 'name1='+ name + '&email1='+ email + '&phone1='+ phone + '&subject1='+ subject;
	//console.log(dataString);
	var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	if(name==''||email==''||phone=='')
	{
		 $('.valid').eq(0).text("укажите, как к вам обращаться");
		 $('.valid').eq(1).text("пожалуйста, заполните поле email");
		 $('.valid').eq(2).text("укажите телефон для связи");

		$('.valid').css('display','block');
		//alert("Please Fill All Fields");
	}	
          else  if(!(pattern.test(email))){
//                $("#email").css({'border' : '1px solid #569b44'});
                $('.valid').eq(1).text('ваш e-mail указано не верно');
                $('.valid').eq(0).hide();
                $('.valid').eq(2).hide();

                
            } /*
else if(pattern.test(email)) {
               $("#email").css({'border' : '1px solid #ff0000'});
                $('.valid').eq(1).text('Не верно');
            }
*/
       
	
	
	else
	{
		$.ajax({
		type: "POST",
		url: "send.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#name").val('');
			$("#email").val('');
			$("#phone").val('');
			$('.valid').css('display','none');
			$('.formStyle').hide();
			$('.nameForm').hide();
	$('.nameFormComent').hide();
			$('.formThanxStyle2').show();
			//alert("Дякуємо за замовлення");
			setTimeout(function() { magnificPopup.close(); }, 4000);

			

	}
	});
	}
	return false;

});

$('.formThanxStyle2').hide();

$("#submitOpenForm").click(function(){
	var name = $("#name_man").val();
	var email = $("#email_man").val();
	var phone = $("#phone_man").val();
	var subject = $("#cont_man").val();
	var dataString = 'name1='+ name + '&email1='+ email + '&phone1='+ phone + '&subject1='+ subject;
	//console.log(dataString);
	var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	if(name==''||email==''||phone=='')
	{
		 $('.valid').eq(0).text("укажите, как к вам обращаться");
		 $('.valid').eq(1).text("пожалуйста, заполните поле email");
		 $('.valid').eq(2).text("укажите телефон для связи");

		$('.valid').css('display','block');
		//alert("Please Fill All Fields");
	}	
          else  if(!(pattern.test(email))){
//                $("#email").css({'border' : '1px solid #569b44'});
                $('.valid').eq(1).text('ваш e-mail указано не верно');
                $('.valid').eq(0).hide();
                $('.valid').eq(2).hide();

                
            } /*
else if(pattern.test(email)) {
               $("#email").css({'border' : '1px solid #ff0000'});
                $('.valid').eq(1).text('Не верно');
            }
*/
       
	
	
	else
	{
		$.ajax({
		type: "POST",
		url: "sendtomanager.php",
		data: dataString,
		cache: false,
		success: function(result){
			$("#name_man").val('');
			$("#email_man").val('');
			$("#phone_man").val('');
			$("#cont_man").val('');
			$('.valid').css('display','none');
			$('.formStyle').hide();
//			$('.nameForm').hide();
//	$('.nameFormComent').hide();
			$('.formThanxStyle2').show();
			setTimeout(function() { $('.formStyle').show();$('.formThanxStyle2').hide();; }, 4000);

			

	}
	});
	}
	return false;

});




$('.clickMap').on('click', function () {
    var value=$(this).attr('data-atr');
    var a=Number(value);
	var db0=[
				{
				 src: '#kyivPopUp',
				  type: 'inline'
				}, 
				{	
				  src: '#odessaPopUp',
				  type: 'inline'
				}, 
				{	
				  src: '#lvovPopUp',
				  type: 'inline'
				},
				{	
				 src: '#vinnitcaPopUp',
				  type: 'inline'
				},
				{
				 src: '#сherkassyPopUp',
				  type: 'inline'
				}, 
				{	
				 src: '#khmelnytskyiPopUp',
				  type: 'inline'
				}, 
				{	
				  src: '#ivanofrankovskPopUp',
				  type: 'inline'
				},
				
				{	
				 src: '#rivnePopUp',
				  type: 'inline'
				},
				{
				 src: '#kirovogradPopUp',
				  type: 'inline'
				},
				{
				 src: '#chernivtsiPopUp',
				  type: 'inline'
				}
		];
//162px,124px
//83px,-16px
   
    var db= new Object (db0);
    var db1=db.splice(a);
    var db2=db1.concat(db);
    $.magnificPopup.open({
          items: db2,
	    gallery: {
	      enabled: true,
	    },
	    type: 'image' 
    });			  
});


});


window.onload = init;



    function init(){
    var product1, product2, product3;

      product1 = $('.product1').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-light/',
        filePrefix: '',
        ext: '.png',
        height: 400,
        width: 400,
        navigation: false,
        
      });   
      
      product2 = $('.product2').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-standart/',
        filePrefix: '',
        ext: '.png',
        height: 400,
        width: 400,
        navigation: false,
        
      });     
      
      	product3 = $('.product3').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-premium/',
        filePrefix: '',
        ext: '.png',
        height: 400,
        width: 400,
        navigation: false,
        
      });     
        
    };
/*
    function init1(){

       product2 = $('.product2').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-standart/',
        filePrefix: '',
        ext: '.png',
        height: 400,
        width: 400,
        navigation: false,
        
      });     
	};
	
	function init2(){
 	
	  	product3 = $('.product3').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-premium/',
        filePrefix: '',
        ext: '.png',
        height: 400,
        width: 400,
        navigation: false,
        
      });     


    };
 
*/
