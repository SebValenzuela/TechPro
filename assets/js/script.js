window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 60) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

/*-----========== =========-----*/

function aparecerElemento() {
  var elementos = document.getElementsByClassName("fade-up");
  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var elementoPosicion = elemento.getBoundingClientRect().top;
    var ventanaPosicion = window.innerHeight;
    
    if (elementoPosicion < ventanaPosicion) {
      elemento.classList.add("aparecer");
    }
  }

  var btnScrollElements = document.getElementsByClassName("btn-scroll-element");
  for (var j = 0; j < btnScrollElements.length; j++) {
    var btnScrollElement = btnScrollElements[j];
    if (window.pageYOffset > 50) {
      btnScrollElement.classList.add("mostrar");
    } else {
      btnScrollElement.classList.remove("mostrar");
    }
  }
}

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  window.addEventListener("DOMContentLoaded", aparecerElemento);
  window.addEventListener("scroll", aparecerElemento);

  var btnScrollTop = document.getElementById("btn-scroll-top");
  btnScrollTop.addEventListener("click", scrollToTop);