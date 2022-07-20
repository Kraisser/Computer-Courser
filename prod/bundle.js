!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var t=function(){function t(e,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.className=e,this.target=document.querySelector("".concat(n)),this.changeSize=i}var n,i;return n=t,(i=[{key:"startObservation",value:function(){var e=this;this.observation(),window.addEventListener("resize",(function(){return e.debounce(e.observation.bind(e),200)}))}},{key:"debounce",value:function(e,t){clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(e,t)}},{key:"observation",value:function(){document.body.clientWidth<=this.changeSize?this.target.classList.add("".concat(this.className)):this.target.classList.remove("".concat(this.className))}}])&&e(n.prototype,i),t}();function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var i=function(){function e(t,n,i,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=t,this.rotatePercent=n,this.color1=i,this.color2=s}var t,i;return t=e,(i=[{key:"setBackground",value:function(e){this.target.style.width="".concat(e,"%"),this.target.style.background="linear-gradient(".concat(this.rotatePercent,"deg, ").concat(this.color1,", ").concat(this.color2,")")}}])&&n(t.prototype,i),e}();new function(e){var t=this;this.curDate=new Date,this.diff=e-this.curDate,this.dayLeft=Math.floor(this.diff/1e3/60/60/24),this.hourLeft=Math.floor(this.diff/1e3/60/60%24),this.minLeft=Math.floor(this.diff/1e3/60%60),this.secTimer=function(){t.trueCountTime(),t.secLeft<=0&&(t.secLeft=60,t.minTimer()),setTimeout(t.secTimer,1e3),t.setTime("sec",--t.secLeft),t.secText()},this.minTimer=function(){t.minLeft<=0&&(t.minLeft=60,t.hourTimer()),t.setTime("min",--t.minLeft),t.minText()},this.hourTimer=function(){t.hourLeft<=0&&(t.hourLeft=24,t.dayTimer()),t.setTime("hour",--t.hourLeft)},this.dayTimer=function(){t.dayLeft<=0||t.setVal("day",--t.dayLeft)},this.secText=function(){t.secLeft<=4&&t.secLeft>=2?t.setVal("secText","Секунды"):1===t.secLeft?t.setVal("secText","Секунда"):t.setVal("secText","Секунд")},this.minText=function(){t.minLeft<=4&&t.minLeft>=2?t.setVal("minText","Минут"):1===t.minLeft?t.setVal("minText","Минута"):t.setVal("minText","Минут")},this.hourText=function(){t.hourLeft<=4&&t.hourLeft>=2?t.setVal("hourText","Часа"):1===t.hourLeft?t.setVal("hourText","Час"):t.setVal("hourText","Часов")},this.dayText=function(){var e=t.dayLeft.toString().split("").pop();e<=4&&e>=2?t.setVal("dayText","Дня"):1===t.dayLeft?t.setVal("dayText","День"):t.setVal("dayText","Дней")},this.setVal=function(e,t){document.querySelector("#".concat(e)).innerHTML=t},this.setTime=function(e,t){document.querySelector("#".concat(e)).innerHTML=t<10?"0".concat(t):t},this.trueCountTime=function(){t.diff=e-new Date,t.secLeft=Math.floor(t.diff/1e3%60)},this.startTimer=function(){t.secTimer(),t.secText(),t.minText(),t.hourText(),t.dayText(),t.setTime("min",t.minLeft),t.setTime("hour",t.hourLeft),t.setTime("day",t.dayLeft)}}(new Date(2022,9,14)).startTimer(),new i(document.querySelector("#earnProgress"),95,"#DF5950","#451046").setBackground(40),document.querySelectorAll(".menuLink").forEach((function(e){return e.addEventListener("click",(function(e){e.preventDefault();var t=e.target.getAttribute("href").slice(1),n=document.getElementById(t);n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}))})),new t("headerBackground1100",".header",1100).startObservation(),function(){var e=document.querySelector("#burgerBut"),t=document.querySelector("#burgerListContainer"),n=e.querySelector("span:nth-child(1)"),i=e.querySelector("span:nth-child(2)"),s=e.querySelector("span:nth-child(3)");function r(){t.classList.add("menuOpen"),n.classList.remove("span1CrossAnimBack"),i.classList.remove("span2CrossAnimBack"),s.classList.remove("span3Show"),n.classList.add("span1CrossAnim"),i.classList.add("span2CrossAnim"),s.classList.add("span3Hide"),e.addEventListener("click",a),e.removeEventListener("click",r)}function a(){t.classList.remove("menuOpen"),n.classList.remove("span1CrossAnim"),i.classList.remove("span2CrossAnim"),s.classList.remove("span3Hide"),n.classList.add("span1CrossAnimBack"),i.classList.add("span2CrossAnimBack"),s.classList.add("span3Show"),e.addEventListener("click",r),e.removeEventListener("click",a)}e.addEventListener("click",r),window.addEventListener("resize",a),window.addEventListener("scroll",a)}()}();