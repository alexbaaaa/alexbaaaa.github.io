import {Anime} from './modules/anime.js';

let contact = document.getElementById("contact");
let contact_button = document.getElementById("contact_button");
let close_button = document.getElementById("close_button");
let open = document.getElementById("S01");

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


