import Slider from './slider'

export default class MainSlider extends Slider{
    constructor(page, btns) {
        super(page, btns)
    }
    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
        this.showMan()

    }
    showMan() {
        const man = document.querySelector('.hanson')
        setTimeout(() => {
            if(this.slideIndex === 3) {
                man.style.bottom = '0%'
                man.style.transition = '2s all'
            }
        }, 2000)
        man.style.bottom = '-100%'
        console.log(this.slideIndex)

    }
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
        console.log(this.slideIndex)
    }

    render() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);

    }
}