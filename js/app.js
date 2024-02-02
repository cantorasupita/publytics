
//console.log('Boambele')



//Burgher
//================================================================================
// Получаем ссылки на бургер и меню
let burger = document.querySelector('.burger__menu');
//const burger_mobile = document.querySelector('.burger__menu-2');
//const menu_mobile = document.querySelector('.sidebar ')




// Функция для переключения меню
function toggleMenu() {
    burger.classList.toggle('activeBurger');
    //burger_mobile.classList.toggle('activeBurger');
    //menu_mobile.classList.toggle('menu-ope')
   // $("#sidebar").toggleClass("menu-open");
    document.body.style.overflowY = 'hidden'; 
    
}

// Добавляем обработчик события для бургера
burger.addEventListener('click', toggleMenu);









  //------------------------------------------------------------------------------
$(".faq-title ").click(function(){
    // Используем метод slideToggle() для анимации показа/скрытия questions-attribute-options
    $(this).next(".faq-text").slideToggle();
   // $(this).closest(".questions-attribute").toggleClass("active")
});
    


$(".slick-carousel").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
   // the magic
   responsive: [{
    breakpoint: 1296,
    settings: {
      slidesToShow: 6,
    }
  }, {

    breakpoint: 1116,
    settings: {
      slidesToShow: 4,
    }

  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
    }

  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 2,
    }

  }
]
});