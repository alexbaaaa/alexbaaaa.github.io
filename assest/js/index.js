import {Anime} from './modules/anime.js';
gsap.registerPlugin(ScrollTrigger);

let contact = document.getElementById("contact");
let about = document.getElementById("about");
let contact_button = document.getElementById("contact_button");
let about_button = document.getElementById("about_button");
let close_button_about = document.getElementById("close_button_about");
let open = document.getElementById("open");
let close = document.getElementById("close");
let bodyNumberAll = document.querySelectorAll(".body_number");
let bodyTitleAll = document.querySelectorAll(".body_title");
let sectionAll = document.querySelectorAll(".section");

let tl = gsap.timeline({paused: true});
/* tl.eventCallback("onReverseComplete", () => {
    document.querySelector(".extraDiv").style.display = "none";
}); */
let sectionAllArray = Array.from(sectionAll);

sectionAllArray.forEach((section) => {
    section.addEventListener("click", () => {
        section.children[0].children[4].style.display = "flex";
        let text = section.children[0].children[4];
        let number = section.children[0].children[0];
        let close = section.children[0].children[3];
        tl.play();
        tl.to(number, {
            duration: 1,
            x: "-100vw",
            ease: "power2.out",
            onComplete() {
                number.style.display = "none";
                close.style.display = "block";
            }
        } )
        .to(text, {
            duration: 3,
            opacity: 1,
            ease: "power2.out",
        },"<")
        .to(section.children[1], {
            duration: 1,
            scale: 0.5,
            ease: "power2.out",
            onComplete() {
                gsap.to(window, { scrollTo: section, duration: 0.5 });
            }
        },"<")
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

open.addEventListener("click", ()=> {
    Anime.open(open);
})
close.addEventListener("click", () => {
    Anime.close(sectionAllArray);
    console.log("hola");
})

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
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".S0"+index,
            start: "top center", 
            toggleActions: "play none none reverse"
        }
    });
});
bodyTitle.forEach( (bodyTitle, index) => {
    index += 1;
    gsap.from(bodyTitle, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".S0"+index,
            start: "top 20%", 
            toggleActions: "play none none reverse"
        }
    });
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
            toggleActions: "play none none reverse"
        }
    });
})






