//menu icon, show
const hamburger = document.querySelector('div.icon');
const menu = document.querySelector('div.menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('change');
  menu.classList.toggle('change');
})

//slider
const slideList = [{
    img: 'images/instalacje.jpg',
    text: 'Instalacje elektryczne'
  },
  {
    img: 'images/pomiary.jpg',
    text: 'Pomiary'
  },
  {
    img: 'images/automatyka.jpg',
    text: 'Automatyka'
  }
]

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const dot1 = document.querySelector('.dots #one');
const dot2 = document.querySelector('.dots #two');
const dot3 = document.querySelector('.dots #three');

const time = 4000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex(dot =>
    dot.classList.contains('active'));
  dots[activeDot].classList.remove('active');
  dots[active].classList.add('active');
}

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
}

setInterval(changeSlide, time);

dot1.addEventListener('click', function () {
  active = 0;
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
});

dot2.addEventListener('click', function () {
  active = 1;
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
});

dot3.addEventListener('click', function () {
  active = 2;
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
});

//menu scroll
$('nav a').on("click", function () {
  const goSection = "[data-section=" + $(this).attr('class') + "]";
  $('body, html').animate({
    scrollTop: ($(goSection).offset().top - 60)
  })
  $("div.icon, div.menu").removeClass("change");
})

//form
$(document).ready(function () {
  $('html').on('submit', '#contact-form', function (e) {
    e.preventDefault();
    $('#send-form-status').html('').hide();
    var data = $('#contact-form').serialize();
    $.post('/send-form.php', data, function (res) {
      $('#send-form-status').html(res.msg).show();
      if (res.status == 1) {
        $('#contact-form')[0].reset();
      }
    })
  })
})

//dynamic