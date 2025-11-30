import { animate } from 'https://esm.sh/animejs';
export class Anime {
    constructor(element) {
        this._element = element;
    }
    static curtain(element, close) {
        animate("#contact", { x: ((close==0)? "-": " ") + '100vw' });
    }
    static open(open) {
        console.log(open);
    }

}