!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.getElementById("headingOne-two"),t=document.getElementById("headingTwo-two"),n=document.getElementById("headingThree-two"),o=document.getElementById("collapseOne-two"),c=document.getElementById("collapseTwo-two"),l=document.getElementById("collapseThree-two");e.addEventListener("click",(function(e){e.preventDefault(),o.style.display="block",c.style.display="none",l.style.display="none"})),t.addEventListener("click",(function(e){e.preventDefault(),c.style.display="block",o.style.display="none",l.style.display="none"})),n.addEventListener("click",(function(e){e.preventDefault(),l.style.display="block",o.style.display="none",c.style.display="none"}))},c=function(){var e=document.querySelectorAll(".formAll"),t=document.getElementsByName("user_name"),n=document.getElementsByName("user_phone"),o=document.getElementsByName("user_dist"),c=(document.getElementsByName("user_quest"),document.querySelector(".capture-form--calc")),l=document.createElement("div");l.style.cssText="font=size: 2rem; color: black;",t.forEach((function(e){e.addEventListener("input",(function(){this.value=this.value.replace(/([^А-ЯЁa-яё\s])|([A-Za-z])/gi,"")}))})),n.forEach((function(e){e.addEventListener("input",(function(){this.value=this.value.replace(/[^+\d]/g,"")}))})),o.forEach((function(e){e.addEventListener("input",(function(){this.value=this.value.replace(/[^\d]/g,"")}))})),e.forEach((function(t){t.addEventListener("submit",(function(n){n.preventDefault(),t.appendChild(l);var i=new FormData(t),r={};if(i.forEach((function(e,t){r[t]=e})),l.textContent="Загрузка...",t===c){var u=document.getElementById("myonoffswitch").checked,a=document.getElementById("myonoffswitch-two").checked,d=document.querySelectorAll(".form-control"),p=document.getElementById("calc-result").value;r.septicType=u?"Однокамерный":"Двухкамерный",r.septicBottom=a?"Да":"Нет",d[0].options[1].selected&&(r.firstDiameter=d[0].options[1].value),d[1].options[1].selected&&(r.firstRing=d[1].options[1].value),d[1].options[2].selected&&(r.firstRing=d[1].options[2].value),myonoffswitch.checked||(d[0].options[1].selected&&(r.firstDiameter=d[0].options[1].value),d[1].options[1].selected&&(r.firstRing=d[1].options[1].value),d[1].options[2].selected&&(r.firstRing=d[1].options[2].value),d[2].options[1].selected&&(r.secondDiameter=d[2].options[1].value),d[3].options[1].selected&&(r.secondRings=d[3].options[1].value),d[3].options[2].selected&&(r.secondRings=d[3].options[2].value)),r.userDistanse=o.value,r.calcResult=p}var f=function(){e.forEach((function(e){e.querySelectorAll("input").forEach((function(e){e.value=""}))}))},y=function(){setTimeout((function(){l.remove()}),5e3)};s(r).then((function(e){if(f(),y(),200!==e.status)throw new Error("status network not 200");l.textContent="Спасибо, мы скоро с Вами свяжемся!"})).catch((function(e){f(),y(),l.textContent="Что-то пошло не так"}))}))}));var s=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},l=function(){var e=document.getElementById("addBtn"),t=document.querySelectorAll(".addBlock");e.addEventListener("click",(function(){e.style.display="none",t.forEach((function(e){e.classList.remove("hidden"),e.classList.remove("visible-sm-block")}))}))},s=function(){var e=document.querySelectorAll(".discount-btn"),t=document.querySelector(".popup-discount");e.forEach((function(e){e.addEventListener("click",(function(){t.style.display="block"}))})),t.addEventListener("click",(function(){var e=event.target;e.classList.contains("popup-close")?t.style.display="none":(e=e.closest(".popup-content"))||(t.style.display="none")}))},i=function(){var e=document.querySelector(".check-btn"),t=document.querySelector(".popup-check");e.addEventListener("click",(function(){t.style.display="block"})),t.addEventListener("click",(function(){var e=event.target;e.classList.contains("popup-close")?t.style.display="none":(e=e.closest(".popup-content"))||(t.style.display="none")}))},r=function(){var e=document.querySelector(".director-btn"),t=document.querySelector(".popup-consultation"),n=document.querySelectorAll(".director-form"),o=document.createElement("div");o.style.cssText="font=size: 2rem; color: black;",e.addEventListener("click",(function(){t.style.display="block"})),t.addEventListener("click",(function(){var e=event.target;e.classList.contains("popup-close")?t.style.display="none":(e=e.closest(".popup-content"))||(t.style.display="none")})),n.forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault(),e.appendChild(o);var l=new FormData(e),s={};l.forEach((function(e,t){s[t]=e})),o.textContent="Загрузка...";var i=function(){n.querySelectorAll("input").forEach((function(e){e.value=""}))},r=function(){setTimeout((function(){o.remove()}),5e3)};c(s).then((function(e){if(i(),r(),200!==e.status)throw new Error("status network not 200");o.textContent="Спасибо, мы скоро с Вами свяжемся!"})).catch((function(e){i(),r(),o.textContent="Что-то пошло не так"}))}))}));var c=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},u=function(){var e=document.querySelectorAll(".panel-heading"),t=document.querySelectorAll(".panel-collapse"),n=document.querySelectorAll(".construct-btn");e.forEach((function(e,o){e.addEventListener("click",(function(){event.preventDefault();for(var e=0;e<t.length;e++)o===e?t[e].classList.toggle("in"):t[e].classList.remove("in")})),n.forEach((function(e,n){e.addEventListener("click",(function(e){e.preventDefault(),e.target.closest(".construct-btn")&&n<t.length-1&&(t[n].classList.remove("in"),t[n+1].classList.add("in"))}))}))}))},a=function(){var e=document.getElementById("myonoffswitch"),t=document.getElementById("myonoffswitch-two"),n=document.querySelectorAll(".select-box"),o=document.querySelectorAll(".title-text"),c=document.getElementById("calc-result"),l=document.querySelectorAll(".form-control"),s=document.getElementById("accordion");c.disabled=!0;s.addEventListener("click",(function(){var s,i,r,u,a,d,p,f;c.value=(i=0,r=0,u=0,a=0,d=0,p=0,f=0,e.checked?(s=1e4,n[2].style.display="none",n[3].style.display="none",o[1].style.display="none",l[0].options[1].selected&&(i+=s/1e3*20),l[1].options[1].selected&&(a+=s/1e3*30),l[1].options[2].selected&&(p+=s/1e3*50),t.checked&&(u+=1e3)):(s=15e3,n[2].style.display="inline-block",n[3].style.display="inline-block",o[1].style.display="block",l[0].options[1].selected&&(i+=s/1e3*20),l[1].options[1].selected&&(a+=s/1e3*30),l[1].options[2].selected&&(p+=s/1e3*50),l[2].options[1].selected&&(r+=s/1e3*20),l[3].options[1].selected&&(d+=s/1e3*30),l[3].options[2].selected&&(f+=s/1e3*50),t.checked&&(u+=2e3)),s+i+r+a+d+p+f+u)}));var i=document.getElementById("discBtn"),r=document.querySelectorAll(".panel-collapse"),u=document.querySelector(".popup-discount");i.addEventListener("click",(function(){r[3].classList.add("in"),u.style.display="block",u.addEventListener("click",(function(){var e=event.target;e.classList.contains("popup-close")?u.style.display="none":(e=e.closest(".popup-content"))||(u.style.display="none")}))}))};(function(){var e=document.querySelector(".popup-call");document.querySelectorAll(".call-btn--modal").forEach((function(t){t.addEventListener("click",(function(){event.preventDefault(),e.style.display="block"}))})),e.addEventListener("click",(function(){var t=event.target;t.classList.contains("popup-close")?e.style.display="none":(t=t.closest(".popup-content"))||(e.style.display="none")}))})(),o(),c(),l(),s(),i(),r(),u(),a()}]);