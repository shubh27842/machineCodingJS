const buttons = document.querySelector(".buttons");
const carouselItems = document.querySelector(".carousel-container");
const images = document.querySelectorAll("img");
let currentVisible = 0;
let maxSlide = images.length - 1;

images.forEach((img, idx) => {
  img.style.transform = `translateX(${idx * 100}%)`;
  // if(idx === currentVisible){
  //     img.style.display = 'block';
  //     return;
  // }
  // img.style.display = 'none';
});

buttons.addEventListener("click", (event) => {
  const name = event.target.name;
  if (name === "right") {
    if (currentVisible === maxSlide) {
      currentVisible = 0;
    } else {
      currentVisible++;
    }
    images.forEach((img, idx) => {
      img.style.transform = `translateX(${(currentVisible - idx) * 100}%)`;
      // if(currentVisible === idx){
      //     img.style.display = 'block';
      //     return;
      // }
      // img.style.display = 'none';
    });
  } else if (name === "left") {
    if (currentVisible === 0) {
      currentVisible = maxSlide;
    } else {
      currentVisible--;
    }
    images.forEach((img, idx) => {
      img.style.transform = `translateX(${(currentVisible - idx) * 100}%)`;
      // if(currentVisible === idx){
      //     img.style.display = 'block';
      //     return;
      // }
      // img.style.display = 'none';
    });
  }
});
