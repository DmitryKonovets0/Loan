/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/main-slider.js":
/*!***************************************!*\
  !*** ./src/js/modules/main-slider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns) {
    super(btns);
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
    this.showMan();
  }
  showMan() {
    const man = document.querySelector('.hanson');
    setTimeout(() => {
      if (this.slideIndex === 3) {
        man.style.bottom = '0%';
        man.style.transition = '2s all';
      }
    }, 2000);
    man.style.bottom = '-100%';
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  render() {
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex);
  }
}

/***/ }),

/***/ "./src/js/modules/player.js":
/*!**********************************!*\
  !*** ./src/js/modules/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(btn, overlay) {
    this.btns = document.querySelectorAll(btn);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
    this.t = 0;
  }
  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    });
    this.overlay.style.display = 'flex';
    this.t = 1;
  }
  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const path = btn.getAttribute('data-url');
        if (this.t === 0) {
          this.createPlayer(path);
        } else {
          this.overlay.style.display = 'flex';
        }
      });
    });
  }
  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
    this.overlay.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }
  render() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindTriggers();
    this.bindCloseBtn();
  }
}

/***/ }),

/***/ "./src/js/modules/slider-mini.js":
/*!***************************************!*\
  !*** ./src/js/modules/slider-mini.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }
  decorizeSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });
    this.miniSlides[0].classList.add(this.activeClass);
    if (this.animate) {
      this.miniSlides[0].querySelector('.card__title').style.opacity = '1';
      this.miniSlides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }
  bindTriggers() {
    this.next.addEventListener('click', () => {
      this.container.appendChild(this.miniSlides[0]);
      this.decorizeSlides();
    });
    this.prev.addEventListener('click', () => {
      let active = this.miniSlides[this.miniSlides.length - 1];
      this.container.insertBefore(active, this.miniSlides[0]);
      this.decorizeSlides();
    });
  }
  render() {
    this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `;
    this.bindTriggers();
    this.decorizeSlides();
  }
}

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    activeClass = '',
    animate,
    autoplay
  } = {}) {
    this.container = document.querySelector(container);
    try {
      this.slides = [...this.container.children];
    } catch (e) {}
    try {
      this.miniSlides = this.container.children;
    } catch (e) {}
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/player */ "./src/js/modules/player.js");
/* harmony import */ var _modules_main_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main-slider */ "./src/js/modules/main-slider.js");
/* harmony import */ var _modules_slider_mini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider-mini */ "./src/js/modules/slider-mini.js");



window.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new _modules_main_slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
    btns: '.next',
    container: '.page'
  });
  mainSlider.render();
  const showUpSlider = new _modules_slider_mini__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.render();
  const modulesSlider = new _modules_slider_mini__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true
  });
  modulesSlider.render();
  const feedSlider = new _modules_slider_mini__WEBPACK_IMPORTED_MODULE_2__["default"]({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active'
  });
  feedSlider.render();
  const player = new _modules_player__WEBPACK_IMPORTED_MODULE_0__["default"]('.showup .play', ".overlay");
  player.render();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map