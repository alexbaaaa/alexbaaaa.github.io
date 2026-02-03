import {contenido} from "./proyects.js";
const slides = document.querySelectorAll(".slide");
const track = document.getElementById("track");
const wrapper = document.getElementById("wrapper");
const container = document.querySelector(".carousel-container");
const url = new URLSearchParams(window.location.search);

let currentIndex = url.get("i");
console.log("hola prueba "+ url.get("i"));

export function updateCarousel(index) {
  const slide = slides[index];
  const containerRect = container.getBoundingClientRect();
  const slideRect = slide.getBoundingClientRect();

  const containerCenter = containerRect.top + containerRect.height / 2;
  const slideCenter = slideRect.top + slideRect.height / 2;

  const offset = containerCenter - slideCenter;

  gsap.to(track, {
    y: `+=${offset}`,
    duration: 0.8,
    ease: "power3.out"
  });


  slides.forEach((s, i) => {
    s.classList.toggle("active", i === index);
    gsap.to(s, {
      scale: i === index ? 1 : 0.9,
      opacity: i === index ? 1 : 0.5,
      duration: 0.4
    });
  });

  
  
  const activeSlide = slides[index];
  title.textContent = contenido[index].titulo
  title.style.color = contenido[index].color
  description.textContent = contenido[index].contenido
  type.textContent = contenido[index].type
  tecnologias.textContent = contenido[index].tecnologias
  currentIndex = index;
}

// Click
slides.forEach((slide, index) => {
  slide.addEventListener("click", () => updateCarousel(index));
});

// Scroll
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && currentIndex < slides.length - 1 ) {
    updateCarousel(currentIndex + 1);
  } else if (e.deltaY < 0 && currentIndex > 0) {
    updateCarousel(currentIndex - 1);
  }
});

// Centrar la imagen del proyecto seleccionado al cargar
window.addEventListener("load", () => {
  slides[url.get("i")].classList.toggle("active");
  updateCarousel(url.get("i"));
});
