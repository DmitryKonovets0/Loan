export default class Slider {
    constructor({container = null,
                btns = null,
                next = null,
                prev = null,
                activeClass = '',
                animate,
                autoplay } = {}){
        this.container = document.querySelector(container);
        this.contentContainer = this.container.parentNode
        try {this.slides = [...this.container.children];} catch(e) {}
        try {this.miniSlides = this.container.children;} catch(e) {}
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;

    }

}