
const links =document.querySelectorAll("nav li")
let myIcons = document.getElementById("icons")
  myIcons.addEventListener("click",()=>{
    nav.classList.toggle("active")
  })
links.forEach((link)=>{
  link.addEventListener("click",()=>{
    nav.classList.remove("active")
  })
})



const numbers = document.querySelectorAll('.number');

function fadeInNumbers() {
    numbers.forEach((number, index) => {
        setTimeout(() => {
            number.style.opacity = '1';
        }, index * 1000); // Augmentez le délai si vous voulez que les chiffres apparaissent plus lentement
    });
}

// Déclenchez l'animation lorsque la page est entièrement chargée
window.addEventListener('load', fadeInNumbers);


const imageContainer = document.querySelector('.nex-container');
const circle = document.querySelector('.nex0');
/*
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;
    const imageWidth = imageContainer.clientWidth;
    const circleWidth = circle.clientWidth;

    if (scrollY > imageWidth - windowWidth) {
        imageContainer.style.left = '0';
        circle.style.left = '0';
    } else {
        imageContainer.style.left = `${windowWidth}px`;
        circle.style.left = `${windowWidth}px`;
    }
});*/

const guitContainer = document.querySelector('.guitare-container');
const cercle = document.querySelector('.guitare0');
/*
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;
    const imageWidth = guitContainer.clientWidth;
    const circleWidth = cercle.clientWidth;

    if (scrollY > imageWidth - windowWidth) {
        guitContainer.style.left = '0';
        cercle.style.left = '0';
    } else {
        guitContainer.style.left = `${windowWidth}px`;
        cercle.style.left = `${windowWidth}px`;
    }
});

*/
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowWidth = window.innerWidth;
  const imageWidth = imageContainer.clientWidth;
  const image2Width = guitContainer.clientWidth;

  if (scrollY > imageWidth - windowWidth) {
      imageContainer.style.left = '0';
      circle.style.left = '0';
  } else {
      imageContainer.style.left = `${windowWidth}px`;
      circle.style.left = `${windowWidth}px`;
  }

  if (scrollY > image2Width - windowWidth) {
      guitContainer.style.left = '0';
      cercle.style.left = '0';
  } else {
      guitContainer.style.left = `${windowWidth}px`;
      cercle.style.left = `${windowWidth}px`;
  }
});