window.addEventListener('load', function () {
  var items = document.querySelectorAll('.gallery-item');

  for (var i = 0; i < items.length; i++) {
    (function (index) {
      setTimeout(function () {
        items[index].classList.add('visible');
      }, index * 150);
    })(i);
  }

  // tutorial cards fade in
  var cards = document.querySelectorAll('.tutorial-card');
  for (var j = 0; j < cards.length; j++) {
    (function (index) {
      setTimeout(function () {
        cards[index].classList.add('visible');
      }, index * 150);
    })(j);
  }
});

window.addEventListener('load', function () {
  var hero = document.querySelector('.hero-load');
  if (hero) {
    hero.classList.add('visible');
  }
});


