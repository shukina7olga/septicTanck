!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.getElementById("headingOne-two"),t=document.getElementById("headingTwo-two"),n=document.getElementById("headingThree-two"),o=document.getElementById("collapseOne-two"),c=document.getElementById("collapseTwo-two"),l=document.getElementById("collapseThree-two");e.addEventListener("click",(function(e){e.preventDefault(),o.style.display="block",c.style.display="none",l.style.display="none"})),t.addEventListener("click",(function(e){e.preventDefault(),c.style.display="block",o.style.display="none",l.style.display="none"})),n.addEventListener("click",(function(e){e.preventDefault(),l.style.display="block",o.style.display="none",c.style.display="none"}))},c=function(){var e=document.querySelectorAll("form"),t=document.getElementsByName("user_name"),n=document.getElementsByName("user_phone"),o=(document.getElementsByName("user_quest"),document.createElement("div"));o.style.cssText="font=size: 2rem; color: black;",t.forEach((function(e){e.addEventListener("input",(function(){this.value=this.value.replace(/([^А-ЯЁa-яё\s])|([A-Za-z])/gi,"")}))})),n.forEach((function(e){e.addEventListener("input",(function(){this.value=this.value.replace(/[^+\d]/g,"")}))})),e.forEach((function(t){t.addEventListener("submit",(function(n){n.preventDefault(),t.appendChild(o);var l=new FormData(t),i={};l.forEach((function(e,t){i[t]=e})),o.textContent="Загрузка...";var s=function(){e.forEach((function(e){e.querySelectorAll("input").forEach((function(e){e.value=""}))}))},r=function(){setTimeout((function(){o.remove()}),5e3)};c(i).then((function(e){if(s(),r(),200!==e.status)throw new Error("status network not 200");o.textContent="Спасибо, мы скоро с Вами свяжемся!"})).catch((function(e){s(),r(),o.textContent="Что-то пошло не так"}))}))}));var c=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},l=function(){var e=document.getElementById("addBtn"),t=document.querySelectorAll(".addBlock");e.addEventListener("click",(function(){e.style.display="none",t.forEach((function(e){e.classList.remove("hidden"),e.classList.remove("visible-sm-block")}))}))},i=function(){var e=document.querySelectorAll(".discount-btn"),t=document.querySelector(".popup-discount");e.forEach((function(e){e.addEventListener("click",(function(){t.style.display="block"}))})),t.addEventListener("click",(function(){var e=event.target;e.classList.contains("popup-close")?t.style.display="none":(e=e.closest(".popup-content"))||(t.style.display="none")}))},s=function(){var e=document.querySelector(".check-btn"),t=document.querySelector(".popup-check");e.addEventListener("click",(function(){t.style.display="block"})),t.addEventListener("click",(function(){var e=event.target;e.classList.contains("popup-close")?t.style.display="none":(e=e.closest(".popup-content"))||(t.style.display="none")}))},r=function(){var e=document.querySelector(".director-btn"),t=document.querySelector(".popup-consultation");e.addEventListener("click",(function(){t.style.display="block"})),t.addEventListener("click",(function(){var e=event.target;e.classList.contains("popup-close")?t.style.display="none":(e=e.closest(".popup-content"))||(t.style.display="none")}))},u=function(){var e=document.querySelectorAll(".panel-heading"),t=document.querySelectorAll(".panel-collapse"),n=document.querySelectorAll(".construct-btn"),o=document.getElementById("discBtn");e.forEach((function(e,o){e.addEventListener("click",(function(){event.preventDefault();for(var e=0;e<t.length;e++)o===e?t[e].classList.toggle("in"):t[e].classList.remove("in")})),n.forEach((function(e,n){e.addEventListener("click",(function(e){e.preventDefault(),e.target.closest(".construct-btn")&&n<t.length-1&&(t[n].classList.remove("in"),t[n+1].classList.add("in"))}))}))})),o.addEventListener("click",(function(){t[3].classList.add("in");var e=document.querySelector(".popup-discount");e.style.display="block",e.addEventListener("click",(function(){var t=event.target;t.classList.contains("popup-close")?e.style.display="none":(t=t.closest(".popup-content"))||(e.style.display="none")}))}))},a=function(){var e=document.getElementById("myonoffswitch"),t=document.getElementById("myonoffswitch-two"),n=document.querySelectorAll(".select-box"),o=document.querySelectorAll(".title-text"),c=document.getElementById("calc-result"),l=0,i=!0;c.disabled=!0;!1===i?(l=1e4,!1===i&&(l+=1e3)):!0===i&&(l=15e3,!0===i&&(l+=2e3)),t.addEventListener("click",(function(){!t.checked})),e.addEventListener("click",(function(){e.checked?(n[2].style.display="none",n[3].style.display="none",o[1].style.display="none",i=!1):(n[2].style.display="inline-block",n[3].style.display="inline-block",o[1].style.display="block",i=!0)})),c.value=l};(function(){var e=document.querySelector(".popup-call");document.querySelectorAll(".call-btn--modal").forEach((function(t){t.addEventListener("click",(function(){event.preventDefault(),e.style.display="block"}))})),e.addEventListener("click",(function(){var t=event.target;t.classList.contains("popup-close")?e.style.display="none":(t=t.closest(".popup-content"))||(e.style.display="none")}))})(),o(),c(),l(),i(),s(),r(),u(),a()}]);