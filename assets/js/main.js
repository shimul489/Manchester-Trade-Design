(function($) { "use strict";

 // niceSelect
 $('select').niceSelect();

var lgDownWidth = $(window).width();
if ( lgDownWidth <= 991 ) {
  // mobile-drop-down
  $(".main-nav .bx").on('click', function (event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $fl.next(".sub-menu").slideToggle();
  });

}

new WOW().init();

// Home Two testimonial Slider
var swiper = new Swiper(".h1-testimonial-slider", {
  spaceBetween: 24,
  slidesPerView: 1,
  loop: true,
  speed:2000,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".next-btn-5",
    prevEl: ".prev-btn-5",
  },
 
  // breakpoints: {
  //   280:{
  //     slidesPerView: 1,
  //   },
  //   480:{
  //     slidesPerView: 1
  //   },
  //   768:{
  //     slidesPerView: 1
  //   },
  //   992:{
  //     slidesPerView: 1
  //   },
  //   1200:{
  //     slidesPerView: 1
  //   },
  //   1400:{
  //     slidesPerView:1
  //   },
  //   1600:{
  //     slidesPerView: 1
  //   },
  // }
});

// mobile-search-area

$('.search-btn').on("click", function(){
  $('.mobile-search').addClass('slide');
});

$('.search-cross-btn').on("click", function(){
  $('.mobile-search').removeClass('slide');
});

// Menu Toggle button sidebar
var toggleIcon = document.querySelectorAll('.sidebar-btn')
var closeIcon = document.querySelectorAll('.cross-icon')
var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')

toggleIcon.forEach((element)=>{
  element.addEventListener('click', ()=>{
      document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
          el.classList.add('show-sidebar')
      })
  })
})
closeIcon.forEach((element)=>{
  element.addEventListener('click', ()=>{
      document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
          el.classList.remove('show-sidebar')
      })
  })
})

window.onclick = function(event){
  // Menu Toggle button sidebar
  searchWrap.forEach((el)=>{
    if(event.target === el){
      el.classList.remove('show-sidebar')
    }
  })
}
document.querySelector('.sidebar-button').addEventListener('click', () => 
document.querySelector('.main-nav').classList.toggle('show-menu'));

$('.sidebar-button').click (function(){
  $(this).toggleClass('active');
});


  // mobile-menu

  $(".mobile-menu-btn").on("click", function () {
    $(".main-nav").addClass("show-menu");
  });

  $(".menu-close-btn").on("click", function () {
    $(".main-nav").removeClass("show-menu");
  });

}(jQuery));