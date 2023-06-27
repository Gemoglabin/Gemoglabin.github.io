(function() {
  var pre = document.getElementsByTagName('pre'),
  pl = pre.length;
  for (var i = 0; i < pl; i++) {
    pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
    var num = pre[i].innerHTML.split(/\n/).length;
    for (var j = 0; j < (num - 1); j++) {
      var line_num = pre[i].getElementsByTagName('span')[0];
      line_num.innerHTML += '<span>' + (j + 1) + '</span>';
    }
  }
})();

// Функция для скролла страницы вверх при нажатии на кнопку
function topFunction() {
        document.body.scrollTop = 0; // Для Safari
        document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
      }

// Показать кнопку скролла вверх при прокрутке страницы
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
}

var images = document.querySelectorAll('.image-container');
    var overlay = createOverlay();

    images.forEach(function(image) {
      var largeImageSrc = image.src;

      image.addEventListener('click', function() {
        overlay.querySelector('img').src = largeImageSrc;
        overlay.classList.add('show');
      });
    });

    overlay.addEventListener('click', function() {
      overlay.classList.remove('show');
    });

    function createOverlay() {
      var overlay = document.createElement('div');
      overlay.className = 'overlay';
      var overlayImg = document.createElement('img');
      overlay.appendChild(overlayImg);
      document.body.appendChild(overlay);
      return overlay;
    }