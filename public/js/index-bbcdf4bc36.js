!function e(t,r,n){function o(c,i){if(!r[c]){if(!t[c]){var l="function"==typeof require&&require;if(!i&&l)return l(c,!0);if(u)return u(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var s=r[c]={exports:{}};t[c][0].call(s.exports,function(e){var r=t[c][1][e];return o(r?r:e)},s,s.exports,e,t,r,n)}return r[c].exports}for(var u="function"==typeof require&&require,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=e("./scroll-handler"),u=n(o),c=e("./safari-required-shim"),i=n(c);(0,i["default"])(),(0,u["default"])("[js-click=header-nav-item]")},{"./safari-required-shim":2,"./scroll-handler":3}],2:[function(e,t,r){"use strict";function n(e){for(var t=document.getElementsByTagName("form"),r=0;r<t.length;r++)t[r].addEventListener("submit",function(t){t.target.checkValidity()||(t.preventDefault(),e())},!1)}t.exports=n},{}],3:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){for(var t=document.querySelectorAll(e),r=0;r<t.length;r++){var n=t[r];n.addEventListener("touchstart",u,!1),n.addEventListener("click",u,!1)}}function u(){var e=this.dataset.section,t=document.querySelector("#"+e+"-container");(0,i["default"])(t)}var c=e("./scroll-to-element"),i=n(c);t.exports=o},{"./scroll-to-element":4}],4:[function(e,t,r){"use strict";function n(e){var t=document.querySelectorAll(".content")[0],r=window.getComputedStyle(t).getPropertyValue("padding-top");console.log("element",e),r=parseInt(r,10);var n=document.scrollingElement||document.documentElement;n.scrollTop=e.offsetTop-r,console.log("uhh")}t.exports=n},{}]},{},[1]);