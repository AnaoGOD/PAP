<<<<<<< HEAD
let slideIndex = 1;
showSlides(slideIndex);

//Controlo prev/next
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Controlo slide imagem
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("transparente");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" ativo", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " ativo";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
=======
let slideIndex = 1;
showSlides(slideIndex);

//Controlo prev/next
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Controlo slide imagem
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("transparente");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" ativo", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " ativo";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
>>>>>>> 37bcba312b7b54177077aa371b2974bf869b73b6
