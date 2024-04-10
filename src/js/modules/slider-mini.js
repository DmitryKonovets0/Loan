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
        if (!this.miniSlides[0].closest('button')) {
            this.miniSlides[0].classList.add(this.activeClass);
        }
                if(this.animate) {
            this.miniSlides[0].querySelector('.card__title').style.opacity = '1';
            this.miniSlides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }
    autoplayGo() {
        let interval = setInterval(() => this.nextSlide(), 1000);
        this.miniSlides[0].parentNode.addEventListener('mouseenter', () => clearInterval(interval))
        this.next.addEventListener('mouseenter', () => clearInterval(interval))
        this.prev.addEventListener('mouseenter', () => clearInterval(interval))
    }
    nextSlide() {
        this.container.appendChild(this.miniSlides[0])
        this.decorizeSlides()
    }
    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide() )
        this.prev.addEventListener('click', () => {
            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== 'BUTTON') {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            }
        });
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

        if (this.autoplay) {
            this.autoplayGo()
            this.miniSlides[0].parentNode.addEventListener('mouseleave', () =>  this.autoplayGo())
            this.next.addEventListener('mouseleave', () =>  this.autoplayGo())
            this.prev.addEventListener('mouseleave', () =>  this.autoplayGo())

        }
    }

}