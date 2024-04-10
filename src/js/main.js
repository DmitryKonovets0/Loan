import Player from "./modules/player";
import MainSlider from "./modules/main-slider";
import MiniSlider from './modules/slider-mini'

window.addEventListener('DOMContentLoaded', () => {
   const mainSlider = new MainSlider({btns:'.next', container:'.page'});
   mainSlider.render();
   const showUpSlider = new MiniSlider({
      container:'.showup__content-slider',
      next:'.showup__next',
      prev: '.showup__prev',
      activeClass: 'card-active',
      animate: true,
      autoplay: true
   })
   showUpSlider.render()
   const modulesSlider = new MiniSlider({
      container:'.modules__content-slider',
      prev: '.modules__info-btns .slick-prev',
      next:'.modules__info-btns .slick-next',
      activeClass: 'card-active',
      animate: true,
      autoplay: true
   })
   modulesSlider.render()
   const feedSlider = new MiniSlider({
      container: '.feed__slider',
      prev: '.feed__slider .slick-prev',
      next: '.feed__slider .slick-next',
      activeClass: 'feed__item-active',
      autoplay: true
   })
   feedSlider.render()
   const player = new Player('.showup .play', ".overlay")
   player.render()
});