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

    static open(open) {
        console.log(open);
    }
    static hola() {
        gsap.to(".prueba", {
            x: 100
        })
    }

       
    


}