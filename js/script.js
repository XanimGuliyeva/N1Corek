
$('.sliderall').slick({
  dots: false,
  autoplay:true,
  fade: true,
  autoplaySpeed:5000,
  responsive: [
    {
      breakpoint: 576,
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

AOS.init();

$(function(){
  $(window).on("scroll",function(){
      if($(window).scrollTop()>50){
        $('.counter').each(function(){
          var $this=$(this),
          countTo=$this.attr('data-count');
          $({countNum: $this.text()}).animate({
              countNum: countTo
          },
        
          {
              duration:2000,
              easing: 'linear',
              step: function() {
                  $this.text(Math.floor(this.countNum));          
              },
              complete: function() {
                  $this.text(this.countNum);          
              },
          });
        });
      }
  })
})

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
   });
});




function Myfunction(Language) {
  var programming = document.getElementsByClassName("opentext");
  for (i = 0; i < programming.length; i++) {
    programming[i].style.display = "none";
  }
  document.getElementById(Language).style.display = "block";
}




$(document).ready(function(){
  let content2 = $(".button2");
    $(content2).click(function(){
      $(content2).css({
        'color':'black',
        'background-color':'white',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button3').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button4').css({
        'color':'white',
        'background-color':'#fca700',
      });
    })
})


$(document).ready(function(){
  let content3 = $(".button3");
    $(content3).click(function(){
      $(content3).css({
        'color':'black',
        'background-color':'white',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button2').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button4').css({
        'color':'white',
        'background-color':'#fca700',
      });
    })
})



$(document).ready(function(){
  let content4 = $(".button4");
    $(content4).click(function(){
      $(content4).css({
        'color':'black',
        'background-color':'white',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button3').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
    })
})

$(document).ready(function(){
  let content1 = $(".button1");
    $(content1).click(function(){
      $(content1).css({
        'color':'black',
        'background-color':'white',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button3').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button4').css({
        'color':'white',
        'background-color':'#fca700',
      });
    })
})





$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})



function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



