import Player from "./modules/player";
import MainSlider from "./modules/main-slider";

window.addEventListener('DOMContentLoaded', () => {
   const slider = new MainSlider({btns:'.next', page:'.page'});
   slider.render();
   const player = new Player('.showup .play', ".overlay")
   player.render()
});