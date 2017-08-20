$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});

$(document).ready(function(){
  if(window.matchMedia('(min-width: 768px)').matches){
    if($('.main').length){
      $(".main").onepage_scroll({
        sectionContainer: ".section",
        animationTime: 600,
        responsiveFallback: 600,
        loop: true
      });
    }
  }
});

$('.burger').click(function(e) {
  var menu = $('#mobile-menu');
  if(!menu.hasClass('active')){
    $(this).addClass('active')
    menu.addClass('active')
  }
  else{
    $(this).removeClass('active')
    menu.removeClass('active')
  }
});

$('.login-btn').click(function(e) {
  e.preventDefault();
  $('.login-dropdown').show()
});

$(document).mouseup(function (e) {
  var container = $('.login-dropdown');
  if (container.has(e.target).length === 0){
    container.hide();
  }
});

$('.profile__btn--search').click(function(e) {
  e.preventDefault();
  $(this).addClass('hidden-item')
  $('.search-form').fadeIn(350)
});

$('.search-form__btn').click(function(e) {
  e.preventDefault()
  $('.search-form').fadeOut(350)
  $('.profile__btn--search').removeClass('hidden-item')
});

if($('.banner__carousel').length){
  $('.banner__carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
      0:{
          items:1
      }
    }
  })
}

$('.questions__btn__toggle').click(function(e) {
  e.preventDefault();
  var qBody = $(this).closest('.questions__header').next()
  if(qBody.is(':hidden')){
    $(this).text('Свернуть -')
    qBody.slideDown(250)
  }
  else{
    qBody.slideUp(250)
    $(this).text('Развернуть +')
  }
});