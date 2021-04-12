// ------------------------------------------------MANAGING THE SLIDER SECTION
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
  var textLink = document.getElementsByClassName("text-link");
  if (n > slides.length) {
    slideIndex = 1
  }   
  if (n < 1) {
    slideIndex = slides.length 
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
  for (i = 0; i < textLink.length; i++) {
    textLink[i].className = textLink[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  textLink[slideIndex-1].className += "active";
  
}

console.log(showSlides);

//--------------------------------------------------------SUBMITTING THE FORM

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


//--------------------------------------------------------API - IMAGE AND TITLE
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

require('dotenv').config();
const api_key = process.env.API_KEY;


const ingredients = ["salmon","filet mignon", "chocolate mousse"];

app.appendChild(container)

let url = "";

url = `https://api.spoonacular.com/food/menuItems/search?apiKey=${api_key}&query=${ingredients}&number=2`;
    console.log("url: ", url);

    async function getApi() {
      await fetch(url)
          .then((response) => response.json())
          .then((data) => renderApi(data))
          .catch((error) => console.log("error: ", error));
  };
 
  // Begin accessing JSON data here

  function renderApi(data) {
    let dataAPI = data;
    console.log("data API: ", dataAPI);

    let card = document.createElement('div');
    card.className = 'container renderDiv';
    card.innerHTML =`
    <div class="d-grid gap-4 d-md-flex justify-content-md-end">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <img src=${dataAPI.menuItems[0].image} alt="">  
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <p class="txt-white">${dataAPI.menuItems[0].title}</p>
        </div>
    </div>`;

      container.appendChild(card);
    
  }

getApi();