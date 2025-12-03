import { animate } from 'https://esm.sh/animejs';
export class Anime {
    constructor(element) {
        this._element = element;
    }
    static curtain(element, direction, body_display) {
        element.style.display = ((body_display==0)? "none" : "flex");
        let body = document.getElementById("body");
        body.style.display = ((body_display==1)? "none" : "block");
        
        animate("#"+element.id, { x: ((direction==0)? "-": " ") + '100vw' });
    }
    static open(open) {
        console.log(open);
    }

}