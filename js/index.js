//navbar scroll
const sectionTop = $(".singers").offset().top;

$(window).scroll(function () {
  if ($(window).scrollTop() > sectionTop) {
    $(".nav-bar").addClass("nav-fixed");
    $(".icon-scroll").fadeIn(500);
    console.log("tmam");
  } else {
    $(".nav-bar").removeClass("nav-fixed");
    $(".icon-scroll").fadeOut(500);
    console.log("m4 tmam");
  }
});
//sidebar

let sidebarWidth = $(".side-bar-right").innerWidth();
$(".side-bar-button ").click(function () {
    console.log(sidebarWidth)
    
    if( $(".side-bar").css('left') == '0px'){
        $(".side-bar").animate({ left: -sidebarWidth }, 500);
        $(".nav-bar").css('display' ,'block');
    }else{
        $(".side-bar").animate({ left: '0' }, 500);
        $(".nav-bar").css('display' ,'none');
    }
  
});
$('.close').click(function(){
    $(".side-bar").animate({ left: -sidebarWidth }, 500);
    console.log('rrrrrr')
})



// sidebar colors
$(".color-box-item").click(function () {
  let currentColor = $(this).css("backgroundColor");
  $("h1,h2,h4,h5,ul li ,a ").css("color", currentColor);
  $(".btn, button").css("backgroundColor", currentColor);
  $(":root").css("--main-color", currentColor);
});

let colorBox = $(".color-box-item");
for (let i = 0; i < 9; i++) {
  let red = Math.random() * 255;
  let blue = Math.random() * 255;
  let green = Math.random() * 255;

  colorBox.eq(i).css("backgroundColor", `rgb(${red},${green},${blue})`);
}

//icon scroll
$(".icon-scroll").click(function () {
  $("html").animate({ scrollTop: 0 }, 2000);
});

//scroll to section
$("nav ul li a").click(function () {
  const currentSection = $(this).attr("href");
  const sectionOffset = $(currentSection).offset().top;

  $("html,body").animate({ scrollTop: sectionOffset }, 2000);
});

//singer toggle
$(".singer h3").click(function () {
  $(".singer-caption").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

//clock

window.onload = function() {
   
    countDownToTime("10 october 2021 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $("#days").html(`${days} D`);
    $("#hours").html(`${hours} h`);
    $("#minutes").html(`${ mins } m`);
    $('#seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }

