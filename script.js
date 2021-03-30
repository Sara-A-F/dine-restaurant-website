// MANAGING THE SLIDER SECTION
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var titleSlide = document.getElementsByClassName("text-link");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < titleSlide.length; i++) {
    titleSlide[i].className = titleSlide[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  titleSlide[slideIndex-1].className += " active";
}

// MANAGING THE DROPDOWN SELECTOR

// MANAGING THE PEOPLE COUNT SELECTOR

// SUBMITTING THE FORM

// CLOSING THE SUCCESS MESSAGE

// CHECKING IF AN INPUT IS NUMERIC

// VALIDATING NAME

// VALIDATING EMAIL

// VALIDATING DATE

// VALIDATING TIME