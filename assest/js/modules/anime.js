export class Anime {
    constructor(element) {
        this._element = element;
    }
    static curtain(element, direction, object_display) {
        let body = document.getElementById("body");
        body.style.display = ((object_display==1)? "none" : "block");

        const timeline = gsap.timeline();
        timeline.to(element, {
            x: direction== 0 ? "-100vw" : "100vw",
            duration: 1.5,
            ease: "power2.out"
        })
    }

    static open(sectionAllArray) {
       
    }
    static close(sectionAllArray) {
        sectionAllArray.forEach((section) => {
            section.addEventListener("click", () => {
                let text = section.children[0].children[4];
                let number = section.children[0].children[0];
                let close = section.children[0].children[3];
                close.style.display = "none";
                number.style.display = "flex";
                let pepe = gsap.timeline({paused: true});
                pepe.play();
                pepe.to(text, {
                    duration: 1,
                    opacity: 0,
                    ease: "power2.out",
                    onComplete: ()=> {
                        text.style.display = "none";
                        number.style.display = "flex";
                    }
                })
                .to(number, {
                    duration: 1,
                    x: "-100vw",
                    ease: "power2.out",
                },"<")
                .to(section.children[1], {
                    duration: 1,
                    scale: 1,
                    ease: "power2.out",
                    onComplete() {
                        gsap.to(window, { scrollTo: section, duration: 0.5 });
                    }
                })
            })
        });
    }
    static hola() {
        gsap.to(".prueba", {
            x: 100
        })
    }


       
    


}