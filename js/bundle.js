!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6)},function(e,t,n){},function(e,t){var n=document.querySelector(".round-icon--burger"),o=document.querySelector(".menu__button-close"),i=document.querySelector(".overlay--menu"),r=document.querySelector(".overlay--popup"),s=document.querySelector(".menu");function c(){i.classList.add("overlay--visible"),s.classList.add("popup-block--visible"),i.addEventListener("click",l),document.addEventListener("keyup",l),o.addEventListener("click",l),n.removeEventListener("click",c)}function l(e){if("keyup"===e.type&&"Escape"!==e.code||r.classList.contains("overlay--visible"))return!1;i.removeEventListener("click",l),document.removeEventListener("keyup",l),o.removeEventListener("click",l),s.classList.remove("popup-block--visible"),i.classList.remove("overlay--visible"),n.addEventListener("click",c)}n.addEventListener("click",c)},function(e,t){var n=document.querySelectorAll(".show-popup"),o=document.querySelector(".overlay--popup"),i=[];function r(){var e=this.dataset.popupName;(i=document.querySelector(".popup-block--"+e)).classList.add("popup-block--visible"),i.querySelector(".round-icon--close").addEventListener("click",s),o.addEventListener("click",s),o.classList.add("overlay--visible"),document.addEventListener("keyup",s),n.forEach((function(e){e.removeEventListener("click",r)}))}function s(e){if("keyup"===e.type&&"Escape"!==e.code)return!1;i.classList.remove("popup-block--visible"),i.querySelector(".round-icon--close").removeEventListener("click",s),document.removeEventListener("keyup",s),o.removeEventListener("click",s),o.classList.remove("overlay--visible"),n.forEach((function(e){e.addEventListener("click",r)}))}n.forEach((function(e){e.addEventListener("click",r)}))},function(e,t){var n=document.querySelectorAll(".show-more");function o(){n.forEach((function(e){e.previousElementSibling.offsetHeight>=e.previousElementSibling.firstElementChild.offsetHeight?e.classList.add("show-more--hide-self"):e.classList.remove("show-more--hide-self")}))}function i(){this.innerText===this.dataset.showMoreName?(this.innerText="Скрыть",this.classList.add("show-more--hide"),this.previousElementSibling.classList.add(this.dataset.showAllClass)):(this.innerText=this.dataset.showMoreName,this.classList.remove("show-more--hide"),this.previousElementSibling.classList.remove(this.dataset.showAllClass))}n.forEach((function(e){e.addEventListener("click",i)})),window.addEventListener("resize",o),window.addEventListener("load",o)},function(e,t){window.addEventListener("resize",r),window.addEventListener("load",r);var n=document.querySelectorAll(".swiper-container"),o=[],i=!1;function r(){if(document.documentElement.clientWidth<768){if(i)return!1;n.forEach((function(e){o.push(new Swiper(e,{direction:"horizontal",slidesPerView:"auto",loop:!1,pagination:{el:".swiper-pagination"},a11y:{enabled:!1}}))})),i=!0}else{if(!i||!o.length)return!1;for(;o.length;){o.pop().destroy(!0,!0)}i=!1}}}]);
//# sourceMappingURL=bundle.js.map