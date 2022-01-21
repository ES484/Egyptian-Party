// function to open and close nav bar
$('.open').click(function () {  
    $('.nav-side').css({width: '250px'});
    $(`.open`).css({marginLeft: `250px`});
});
$('.close').click(function () {  
    $('.nav-side').css({width: 0});
    $(`.open`).css({marginLeft: 0});
});

// function to display singer information when click singer name
$('.signers h4').click(function (e) { 
    $(this).next().slideToggle(500).siblings().filter('.signers p').slideUp(500);
    console.log(e)
 });

// function to add - before each part of countdown timer
 $(document).ready(function(){
    loopcounter('first-counter');
    $('.first-counter div').children().before('-');
});

// function to display ramining characters allowed to user to write in message box
let mesLength = document.getElementById('userMessage');
function getMessageLength() {
    mesLength.maxLength = '100';
    let avaliableCharacter = mesLength.maxLength - mesLength.value.length;
    document.getElementById('charRemain').innerHTML = avaliableCharacter;
    if (avaliableCharacter == 0) {
        document.getElementById('charRemain').innerHTML = 'your available character finished';
    }
  };
  mesLength.addEventListener('keyup', function (e) {  
    getMessageLength();
  });
// function to make nice scroll
  $(function() {  
    $("body").niceScroll({
        cursorcolor: '#D62E33',
        cursorwidth: "7px",
        cursorborder: "1px solid #D62E33"
    });
});
// function to make scrolling to each section more smoothing
$(`.nav-side ul li a[href^='#']`).click(function (e) {
    let aHref = $(e.target).attr('href');
    let sectionOffset = $(aHref).offset().top;
    console.log(sectionOffset);
    $(`html, body`).animate({scrollTop: sectionOffset}, 1000);
  });

// function to make up button move to the top with smoothing
  $(window).scroll(function () { 
    let windowScroll = $(window).scrollTop();
    if (windowScroll > ($('#details').offset().top)) {
        $('.upbtn').fadeIn(500);
    }
    else
    {
        $('.upbtn').fadeOut(500);
    }
    $('.upbtn').click(function () {  
        $(`html, body`).animate({scrollTop: '0'}, 1000);
    });
   });


