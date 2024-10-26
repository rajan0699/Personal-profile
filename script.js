

//  side menu

let menu=document.querySelector('#menu-icon');
let navbar =document.querySelector('#sideMenu');

 menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }

 window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
 }

 // typing text code
 
 var typed = new Typed('.muliple-text', {
    strings: ['Java Developer','Full Stack developer','Software Developer','Web Design'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
  });

  // -------------- education -----------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName){

for(tablink of tablinks){
    tablink.classList.remove("active-link");
}

for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}

event.currentTarget.classList.add("active-link");
document.getElementById(tabName).classList.add("active-tab");

}

// slider code

let currentSlide = 1;

const slides = document.getElementsByClassName('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function showSlide(n) {
    if (n > slides.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide - 1].style.display = 'block';
}

function prevSlide() {
if (currentSlide > 1) {
    currentSlide -= 1;
} else {
    currentSlide = slides.length;
}

showSlide(currentSlide);
disableButtons();
}

function nextSlide() {
if (currentSlide < slides.length) {
    currentSlide += 1;
} else {
    currentSlide = 1;
}

showSlide(currentSlide);
disableButtons();
}

function disableButtons() {
    if (currentSlide === 1) {
        prev.style.display = 'none';
        next.style.display = 'block';
    } else if (currentSlide === slides.length) {
        next.style.display = 'none';
        prev.style.display = 'block';
    } else {
        prev.style.display = 'block';
        prev.style.right = '20px';
        next.style.display = 'block';
    }
}

// Show the first slide initially
showSlide(currentSlide);
disableButtons();

// Automatic sliding every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

// --- google sheet merge 


const scriptURL = 'https://script.google.com/macros/s/AKfycbwOhnZxa5yYTMKVeuYXjoUeYO_OWtiMcDfAKBA67Sw2P97EudXGe34l0QmWNVaPQrYdpg/exec'
    const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent Sucessfully"
            setTimeout(function(){
              msg.innerHTML = ""
            },5000
            )
            form.reset()
        } 
        )
        .catch(error => console.error('Error!', error.message))
    })


