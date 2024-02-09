


//Burgher
//================================================================================
// Получаем ссылки на бургер и меню
const  burger = document.querySelector('.burger__menu');
const  menuClose = document.querySelector('.menu-close')
const menu_mobile = document.querySelector('.menu-mobile')


// Функция для переключения меню
function openMenu() {
    burger.classList.toggle('activeBurger');
    menu_mobile.classList.toggle('menu-mobile_active')
    document.body.style.overflowY = 'hidden'; 
}

function closeMenu(){
  menu_mobile.classList.toggle('menu-mobile_active')
  burger.classList.toggle('activeBurger');
}


// Добавляем обработчик события для бургера
burger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu)




//Slick-carousel------------------------------------------------------------------------------
$(".slick-carousel-1").slick({
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
        slidesToShow: 3,
      }

    }
  ]
});





//=====================================================================================================
$(".faq-title ").click(function(){
    $(this).next(".faq-text").slideToggle();
});





//price=========================================================================================
let tarif = true;
const praceRange = document.getElementById('praceRange')
const range = document.querySelector('.grey')
const allowedValues = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const evro = document.getElementById('evro')
const month = document.getElementById('month')
const oldPrice = document.getElementById('oldPrice')


$(".btn-2").click(function(){
  tarif = false
  console.log(tarif)
  $(this).toggleClass('active_btn')
  $(".btn-1").toggleClass('active_btn')
  updateSpan(range.value)
});
   

$(".btn-1").click(function(){
  tarif = true
   console.log(tarif)
   $(this).toggleClass('active_btn')
   $(".btn-2").toggleClass('active_btn')
   updateSpan(range.value)
});



function updateSpan(value) {
    const nearest = findNearest(value);
    console.log(nearest)
    document.getElementById('rangeValueView').textContent = nearest.view;
    document.getElementById('rangeValuePrice').textContent = nearest.price;
    document.getElementById('oldPrice').textContent = nearest.oldPrice;


    console.log(value)
    if(value == 90) {
        document.getElementById('rangeValueBigPrice').innerHTML =  `<a href="#" class="text-3xl text-sky-700 underline decoration-solid" title="Contact Us">Contact Us</a>`;
        document.getElementById('rangeValuePrice').innerHTML =  `<a href="#" class="text-xl text-sky-700 underline decoration-solid" title="Contact Us">Contact Us</a>`;
        evro.style.display = 'none'
        month.style.display = 'none'
        oldPrice.style.display = 'none'
    }else {
        const regex = /\d+/;
        const match =  nearest.price.match(regex);
        document.getElementById('rangeValueBigPrice').textContent = match[0];
        evro.style.display = 'inline-block'
        month.style.display = 'inline-block'
        oldPrice.style.display = 'inline-block'
    }
}

function findNearest(value) {
    const obj = {
      view: '',
      price: '',
      oldPrice: ''
    }
    if(value==10){
      if( tarif ) {
        obj.view = '10k',
        obj.price = '€ 5 / mo',
        obj.oldPrice = '€7.5 / mo'
      }else{
        obj.view = '120k',
        obj.price = '€ 50 / yr'
        obj.oldPrice = '€ 75 / yr'
      }
      return obj;
    }else if(value==20){
      if( tarif ) {
        obj.view = '100k';
        obj.price = '€ 15 / mo',
        obj.oldPrice = '€20 / mo'
      }else{
        obj.view = '1.2M',
        obj.price = '€ 150 / yr',
        obj.oldPrice = '€ 200 / yr'
      }
      return obj;
    }else if(value==30){
      if( tarif ) {
        obj.view = '250k';
        obj.price = '€ 25 / mo',
        obj.oldPrice = '€25 / mo'
      }else{
        obj.view = '3M',
        obj.price = '€ 250 / yr',
        obj.oldPrice = '€ 300 / yr'
      }
      return obj;
    }else if(value==40){
      if( tarif ) {
        obj.view = '500k';
        obj.price = '€ 40 / mo',
        obj.oldPrice = '€50 / mo'
      }else{
        obj.view = '3M',
        obj.price = '€ 400 / yr',
        obj.oldPrice = '€ 500 / yr'
      }
      return obj;
    }else if(value==50){
      if( tarif ) {
        obj.view = '1M';
        obj.price = '€ 55 / mo',
        obj.oldPrice = '€55 / mo'
      }else{
        obj.view = '12M',
        obj.price = '€ 550 / yr',
        obj.oldPrice = '€ 700 / yr'
      }
      return obj;
    }else if(value==60){
      if( tarif ) {
        obj.view = '2M';
        obj.price = '€ 70 / mo',
        obj.oldPrice = '€90 / mo'
      }else{
        obj.view = '24M',
        obj.price = '€ 700 / yr',
        obj.oldPrice = '€ 900 / yr'
      }
      return obj;
    }else if(value==70){
      if( tarif ) {
        obj.view = '5M';
        obj.price = '€ 100 / mo',
        obj.oldPrice = '€120 / mo'
      }else{
        obj.view = '60M',
        obj.price = '€ 1000 / yr',
        obj.oldPrice = '€ 1200 / yr'
      }
      return obj;
    }else if(value==80){
      if( tarif ) {
        obj.view = '10M';
        obj.price = '€ 135 / mo',
        obj.oldPrice = '€150 / mo'
      }else{
        obj.view = '120M',
        obj.price = '€ 1350 / yr',
        obj.oldPrice = '€ 1500 / yr'
      }
      return obj;
    }else if(value==90){
      if( tarif ) {   
        obj.view = '10M+';
        obj.price = 'Contact Us',
        obj.oldPrice = ''
      }else{
        obj.view = '120M+',
        obj.price = 'Contact Us',
        obj.oldPrice = ''
      }
      return obj;
    }
    return obj;
  
}






let submitForm = document.getElementById("submitForm");



//validation
function validateForm() {
 
  let email = document.getElementById("email");
  let monthNumber = document.getElementById("monthNumber");
  let message = document.getElementById("message");
  let howUs = document.getElementById("howUs");
  let objectSelect = document.getElementById("objectSelect")
  let checkFomr = document.getElementById("checkFomr")
  let succes_form = document.getElementById('succes_form')

  let validEmail =  document.getElementById('validEmail')
  let monthValid =  document.getElementById('monthValid')
  let messageValid = document.getElementById('messageValid')
  let howUsValid = document.getElementById('howUsValid')
  
 

  // Перевірка електронної пошти за допомогою регулярного виразу
  let emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email.value)) {
      validEmail.textContent = "This email is not correct.";
      return false;
  }else {
    validEmail.textContent = "";
    succes_form.textContent = ""
  }
  
  // Перевірка місяця на правильний діапазон
  if (monthNumber.value < 1 || monthNumber.value > 12) {
      monthValid.textContent = "Hits number is required if the object custom plan is selected";
      return false;
  }else{
    monthValid.textContent = ""
    succes_form.textContent = ""
  }
  
  // Перевірка, що повідомлення не порожнє
  if (message.value.trim() === "") {
      messageValid.textContent = "Message field is required.";
      return false;
  }else{
    messageValid.textContent = ""
    succes_form.textContent = ""
  }
  
  // Перевірка, що поле "Як ви дізналися про нас" не порожнє
  if (howUs.value.trim() === "") {
      howUsValid.textContent = "You can not submit if you do not accept our privacy policy.";
      return false;
  }else{
    howUsValid.textContent = ""
    succes_form.textContent = ""
  }
 
  
    return true

  
}



submitForm.addEventListener('click', function(e){
  e.preventDefault()
  let obj = {
  
  }
  if(validateForm()){
      obj.email = email.value
      obj.monthNumber = monthNumber.value
      obj.message = message.value
      obj.howUs = howUs.value
      obj.objectSelect = objectSelect.value
      obj.checkFomr =  checkFomr.value
      succes_form.textContent = 'application sent successfully'

      email.value = ""
      monthNumber.value = ""
      message.value = ""
      howUs.value = ""

  }
    console.log(obj)
})










//copy mail =============================================================================================================
let textToCopy = document.getElementById("textToCopy");

let coppyIcon = document.getElementById("coppyIcon");
let galocikaIcon = document.getElementById("galocikaIcon");


function copyTextToClipboard() {
  
  $('#coppyIcon').toggle()
  $('#galocikaIcon').toggle()
  // Выбираем текстовый элемент
  var textToCopy = document.getElementById("textToCopy");
  
  // Создаем временный элемент для копирования текста
  var tempElement = document.createElement("textarea");
  tempElement.value = textToCopy.textContent;
  
  // Добавляем временный элемент в документ
  document.body.appendChild(tempElement);
  
  // Выбираем текст во временном элементе
  tempElement.select();
  
  // Копируем текст в буфер обмена
  document.execCommand("copy");
  
  // Удаляем временный элемент
  document.body.removeChild(tempElement);
  

}


textToCopy.addEventListener('click',  copyTextToClipboard)


