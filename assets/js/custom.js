'use strict';

var getHeight = function(el) {
var el_style      = window.getComputedStyle(el),
el_display    = el_style.display,
el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

wanted_height = 0;

if(el_display !== 'none' && el_max_height !== '0') {
return el.offsetHeight;
}

el.style.display    = 'block';
wanted_height     = el.offsetHeight;
el.style.display    = el_display;

return wanted_height;
},


toggleSlide = function(el) {
var el_max_height = 0;


if(el.getAttribute('data-max-height')) {
if(el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
el.style.maxHeight = el.getAttribute('data-max-height');
} else {
el.style.maxHeight = '0';

}
} else {
el_max_height                  = getHeight(el) + 'px';
el.style.maxHeight             = '0';
el.setAttribute('data-max-height', el_max_height);
el.style.display               = 'block';

setTimeout(function() {
el.style.maxHeight = el_max_height;
}, 10);
}
};




var dropdown__link = document.querySelectorAll('.header__list.dropdown');
var dropdown__mobilelink = document.querySelectorAll('.header__list.dropdown > .dropdown-link .plus-icon');
var dropdown__hamburger = document.querySelector('.header__hamburger');
var dropdown__mobilemenu = document.querySelector('.header__nav');

dropdown__hamburger.addEventListener('click', function(){
this.classList.toggle('open');
dropdown__mobilemenu.classList.toggle('show');
});


// function show_largescreen(){
// dropdown__link.forEach(el_all => {
// el_all.addEventListener('mouseover', function(){
// const dropdown_sub = this.children[1];
// dropdown_sub.style.display = 'block';      
// setTimeout(function() {
// dropdown_sub.children[0].style.maxHeight =(window.innerHeight-80)+'px' ;
// }, 10);

// }, false); 
// el_all.addEventListener('mouseout', function(){
// const dropdown_sub = this.children[1];
// dropdown_sub.children[0].style.maxHeight ='0px' ;
// dropdown_sub.style.display = 'none';   
// }, false); 
// });
// }
// function show_mobilescreen(){

// dropdown__mobilelink.forEach(dropdown__mobilelink => {
//     dropdown__mobilelink.addEventListener("click", event => {
//     const open = document.querySelector(".dropdown-link .plus-icon.open");
//     if(open && open !== dropdown__mobilelink ) {
//       open.classList.toggle("open");
//       open.parentNode.nextElementSibling.style.display = 'none' ;
//       open.parentNode.nextElementSibling.children[0].style.maxHeight = 0 ;
//     }
//     dropdown__mobilelink.classList.toggle("open");
//     const mobiledropdown = dropdown__mobilelink.parentNode.nextElementSibling;
//     if(dropdown__mobilelink.classList.contains("open")){
//         mobiledropdown.style.display = 'block';
//         mobiledropdown.children[0].style.maxHeight = mobiledropdown.children[0].scrollHeight + "px";
//     } else {
//         mobiledropdown.style.display = 'none';
//         mobiledropdown.children[0].style.maxHeight = 0;

//     }
//   })
// })

// }

function show_mobilescreen(){

dropdown__mobilelink.forEach(dropdown__mobilelink => {
    dropdown__mobilelink.addEventListener("click", event => {
    const open = document.querySelector(".dropdown-link .plus-icon.open");
    if(open && open !== dropdown__mobilelink ) {
      open.classList.toggle("open");
      open.parentNode.nextElementSibling.classList.toggle("show");
    }
    dropdown__mobilelink.classList.toggle("open");
    const mobiledropdown = dropdown__mobilelink.parentNode.nextElementSibling;
    if(dropdown__mobilelink.classList.contains("open")){
        mobiledropdown.classList.add("show");
    } else {
      mobiledropdown.classList.remove("show");
    }
  })
})

}

 window.addEventListener("load", function(){
if(window.innerWidth <= 991){
show_mobilescreen();
}
});

window.addEventListener("resize",function(){
if(window.innerWidth <= 991){
show_mobilescreen();
}
});




/* Sticky menu code started */

var stikyheader = document.querySelector('.header');
function onScroll() {
if (window.pageYOffset) {
stikyheader.classList.add('sticky');
} else {
stikyheader.classList.remove('sticky');
}
}
window.addEventListener('scroll', onScroll);

/* Sticky menu code ended */




$('.industries__list > ul > li').mouseover(function(){
    $('.industries__list > ul > li').removeClass('active');
$(this).toggleClass('active');
var listclass = $(this).children('a').attr("class");
$('.industries__image').attr("src", "assets/images/industries/"+listclass+".webp");
});






jQuery(document).ready(function () {

  setInterval(function () {
    var textHeight = $('.innerWe__content-right-sub > span').height();
    var textCount = $('.innerWe__content-right-sub > span').length;
    var textUlHeight = textCount * textHeight;
    
    $('.innerWe__content-right').css({height: textHeight });
    $('.innerWe__content-right-sub').css({ height: textUlHeight, marginTop: - textHeight });
    $('.innerWe__content-right-sub > span').prependTo('.innerWe__content-right-sub');
    
        $('.innerWe__content-right-sub').animate({
            top: - textHeight
        }, 200, function () {
            $('.innerWe__content-right-sub > span:first-child').appendTo('.innerWe__content-right-sub');
            $('.innerWe__content-right-sub').css('top', '');
        });

  
  }, 2000);
  });  



 






