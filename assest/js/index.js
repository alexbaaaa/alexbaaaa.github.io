import {Anime} from './modules/anime.js';

let contact = document.getElementById("contact");
let contact_button = document.getElementById("contact_button");
let close_button = document.getElementById("close_button");
let open = document.getElementById("open");

contact_button.addEventListener("click", ()=>{
    Anime.curtain(contact, 0, 1);
});
close_button.addEventListener("click", ()=>{
    Anime.curtain(contact, 1, 0);
});

open.addEventListener("click", ()=> {
    Anime.open(open);
})

gsap.registerPlugin(ScrollTrigger);

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

gsap.from(".fadeIn", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fadeIn",
        start: "top center", 
        toggleActions: "play none none reverse"
    }
});
gsap.from(".fadeOpen", {
    duration: 1,
    x: "-100vw", 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fadeOpen",
        start: "top 80%", 
        toggleActions: "play none none reverse"
    }
});
let img = document.querySelectorAll(".section_img");

gsap.utils.toArray(img).forEach(img =>{
    gsap.to(img, {
        duration: 1,
        opacity: 1,
        y: 0, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".section_img",
            start: "top bottom", 
            toggleActions: "play none none reverse"
        }
    });
})


