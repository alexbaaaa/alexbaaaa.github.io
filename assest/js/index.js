import {Anime} from './modules/anime.js';

gsap.registerPlugin(ScrollTrigger);

let bodyNumberAll = document.querySelectorAll(".body_number");
let bodyTitleAll = document.querySelectorAll(".body_title");
let sectionAll = document.querySelectorAll(".section");

let tl = gsap.timeline({paused: true});
let sectionAllArray = Array.from(sectionAll);



let bodyNumber = Array.from(bodyNumberAll);
let bodyTitle = Array.from(bodyTitleAll);




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






