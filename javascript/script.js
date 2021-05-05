



$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});





function toggleSlide(item) {
  $(item).each(function(i) {
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });
}
toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');


// modal
$('[data-modal=consultation]').on('click', function(){
  $('.overlay, #consultation').fadeIn('slow');
});

$('.modal1__close').on('click', function() {
  $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});



$('.button_mini').each(function(i) {
  $(this).on('click',function(){
    $('#order .modal1__descr').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn('slow');
  });
});



// валідація



function  validateForms(form) {
  $(form).validate({
    rules: {
      name: { 
        required: true,
        minlength: 2
      },
  
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: 'we need your name',
        minlength: jQuery.validator.format("мінімум {0} символів")
      
  
      },
      phone: 'введи номер',
      email: {
        required: "We need your email address to contact you",
        email: "неправильно введен адрес почти"
      }
    },
    errorClass: "invalid"  
  });
}

validateForms('#order form');
validateForms('#consultation form');
validateForms('#consultation-form');


$('input[name=phone]').mask("+7 (999) 999-9999");

 // smooth scroll 


 $(window).scroll(function() {
   if ($(this).scrollTop() > 1600) {
     $('.pageup').fadeIn();
   } else {
    $('.pageup').fadeOut();
   }
 });

 $("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

new WOW().init();