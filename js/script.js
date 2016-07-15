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


/*
var scroll = $('#scroll');
	$("#back-top").hide();
	
$(window).scroll(function(){
		var scroll_top = $(this).scrollTop();
 
        if (scroll_top<500){
			$('#logo-pps').css({'top':(mapPosition-scroll_top*1.2+mapheight/2)});
			$('#back-top').fadeOut();
		//	scroll.css({'opacity':scroll_top*(scroll_top/mapPosition)});
		//	scroll.fadeOut(1000);
			    videodiv.removeClass('no-fixed').addClass('fixed');
		}
		else if (scroll_top>500 && scroll_top < full*2.5 ){
			 $('#back-top').fadeIn();
			     videodiv.removeClass('no-fixed').addClass('fixed');
		//	 scroll.fadeOut(slow);
		}
		else if (scroll_top >= full*2.5){
			$('#back-top').fadeIn();
			  videodiv.removeClass('fixed').addClass('no-fixed');		
		}    
});
*/


$('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
$('#scroll').click(function () {
        $('body,html').animate({
            scrollTop: 800
        }, 800);
        return false;
    });



});

window.onload = init;

    var product;
    function init(){

      product = $('.product').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-premium/',
        filePrefix: '',
        ext: '.png',
        height: 600,
        width: 600,
        navigation: false,
        
      });     

    };
 
