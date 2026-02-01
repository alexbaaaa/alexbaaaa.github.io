import {Anime} from './modules/anime.js';
gsap.registerPlugin(ScrollTrigger);

let contact = document.getElementById("contact");
let about = document.getElementById("about");
let contact_button = document.getElementById("contact_button");
let about_button = document.getElementById("about_button");
let close_button_about = document.getElementById("close_button_about");
let bodyNumberAll = document.querySelectorAll(".body_number");
let bodyTitleAll = document.querySelectorAll(".body_title");
let sectionAll = document.querySelectorAll(".section");

let tl = gsap.timeline({paused: true});
let sectionAllArray = Array.from(sectionAll);

sectionAllArray.forEach((section) => {
    section.addEventListener("click", () => {
        console.log("hola marta");
        window.location.href = "carrusel.html";
    })
});

let bodyNumber = Array.from(bodyNumberAll);
let bodyTitle = Array.from(bodyTitleAll);

contact_button.addEventListener("click", ()=>{
    Anime.curtain(contact, 0, 1);
});
about_button.addEventListener("click", ()=>{
    Anime.curtain(about, 1, 1);
});
close_button.addEventListener("click", ()=>{
    Anime.curtain(contact, 1, 0);
});
close_button_about.addEventListener("click", ()=>{
    Anime.curtain(about, 0, 0);
});


gsap.to(".back_top", {
    opacity: 1,
    duration: 1.5,
    y: -50,
    scrollTrigger: {
        trigger: ".body",  
        start: "top top",           
        toggleActions: "play none none reverse"
    }
});
bodyNumber.forEach( (bodyNumber, index) => {
    index += 1;
    gsap.from(bodyNumber, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".S0"+index,
            start: "top center", 
            once: true
        }
    });
});
bodyTitle.forEach( (bodyTitle, index) => {
    index += 1;
    gsap.from(bodyTitle, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".S0"+index,
            start: "top 20%", 
            once: true
        }
    });
});

let img = Array.from(document.querySelectorAll(".section_img"));

img.forEach((img, index) =>{
    index += 1;
    gsap.to(img, {
        duration: 1,
        opacity: 1,
        y: 0, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".S0"+index,
            start: "top bottom", 
            once: true
        }
    });
})






