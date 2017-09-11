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
if($('.product-carousel').length){
  var owl = $('.product-carousel')
  owl.owlCarousel({
    loop:true,
    margin: 0,
    dots: false,
    loop: false,
    onInitialized: carouselInitialized,
    rewind: false,
    nav: true,
    navText: ['<i class="fa fa-chevron-up"></i><div class="prev-name middle"></div>',
              '<i class="fa fa-chevron-up"></i><div class="next-name middle"></div>'],
    responsive:{
      0:{
          items:1
      }
    }
  })
  function carouselInitialized(event){
    var prevNameStart = $('.product-carousel .owl-item.active').before().find('h2').text();
    var nextNameStart = $('.product-carousel .owl-item.active').next().find('h2').text();
    $('.product-carousel .prev-name').text(prevNameStart)
    $('.product-carousel .next-name').text(nextNameStart)
  }
  owl.on('changed.owl.carousel',function(property){
    var current = property.item.index;
    var prevName = $(property.target).find(".owl-item").eq(current -1).find("h2").text();
    var nextName = $(property.target).find(".owl-item").eq(current + 1).find("h2").text();
    $('.product-carousel .prev-name').text(prevName)
    $('.product-carousel .next-name').text(nextName)
  });
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

$('.delivery__btn__link').click(function(e) {
  e.preventDefault();
  var qBody = $(this).closest('.delivery__header').next()
  if(qBody.is(':hidden')){
    $(this).text('Свернуть -')
    qBody.slideDown(250)
  }
  else{
    qBody.slideUp(250)
    $(this).text('Развернуть +')
  }
});