import Slider from './modules/slider';
import Player from "./modules/player";

window.addEventListener('DOMContentLoaded', () => {
   const slider = new Slider('.page', '.next');
   slider.render();
   const player = new Player('.play__circle')
   player.render()
});