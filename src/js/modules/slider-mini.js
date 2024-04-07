 import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }
    decorizeSlides() {

        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass)
            if(this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        })
                this.miniSlides[0].classList.add(this.activeClass);
                if(this.animate) {
            this.miniSlides[0].querySelector('.card__title').style.opacity = '1';
            this.miniSlides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }
    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.container.appendChild(this.miniSlides[0])
            this.decorizeSlides()
        })
        this.prev.addEventListener('click', () => {
            let active = this.miniSlides[this.miniSlides.length - 1]
            this.container.insertBefore(active, this.miniSlides[0])
            this.decorizeSlides()
        })
}
    render() {
            this.container.style.cssText= `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `
        this.bindTriggers()
        this.decorizeSlides()
    }

}