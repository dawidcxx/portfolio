!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{},id:a,loaded:!1};return e[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}(function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(typeof e[t]){case"function":break;case"object":e[t]=function(t){var n=t.slice(1),a=e[t[0]];return function(e,t,o){a.apply(this,[e,t,o].concat(n))}}(e[t]);break;default:e[t]=e[e[t]]}return e}([function(e,t,n){e.exports=n(11)},function(e,t){"use strict";function n(){for(var e in r)r.hasOwnProperty(e)&&r[e].classList.remove("nav__button--active")}Object.defineProperty(t,"__esModule",{value:!0});var a=document.getElementsByClassName("nav")[0],o=document.getElementsByClassName("nav__mobile-nav-toggle")[0],r={top:document.getElementsByClassName("nav__top")[0],about:document.getElementsByClassName("nav__about")[0],projects:document.getElementsByClassName("nav__projects")[0],contact:document.getElementsByClassName("nav__contact")[0]},i=function(){return a.classList.toggle("nav--make-mobile-menu-visiable")},u=function(){return a.classList.remove("nav--make-mobile-menu-visiable")};o.addEventListener("click",function(e){e.preventDefault(),i()},!1),t["default"]={node:a,toggleNav:i,closeNav:u,setActive:function(e){switch(n(),e){case"top":r.top.classList.add("nav__button--active");break;case"about":r.about.classList.add("nav__button--active");break;case"projects":r.projects.classList.add("nav__button--active");break;case"contact":r.contact.classList.add("nav__button--active")}}}},function(e,t){"use strict";function n(e){return"string"!=typeof e&&(e=JSON.stringify(e,void 0,2)),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"})}function a(e,t){var n=null;return function(){var a=this,o=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(a,o)},t)}}function o(e,t){t=t||window;var n,a,o=t.document;t.getSelection&&o.createRange?(n=t.getSelection(),a=o.createRange(),a.selectNodeContents(e),n.removeAllRanges(),n.addRange(a)):o.body.createTextRange&&(a=o.body.createTextRange(),a.moveToElementText(e),a.select())}function r(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}function i(e,t,n){function a(){r+=1/60;var t=r/i,s=u[n](t);1>t?(c(a),window.scrollTo(0,o+(e-o)*s)):window.scrollTo(0,e)}var o=window.scrollY,e=e||0,t=t||2e3,n=n||"easeOutSine",r=0,i=Math.max(.1,Math.min(Math.abs(o-e)/t,.8)),u=(Math.PI/2,{easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}});a()}function u(e,t){for(var n in t)t.hasOwnProperty(n)&&(e=e.replace(new RegExp("{{"+n+"}}","g"),t[n]));return e}function s(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}Object.defineProperty(t,"__esModule",{value:!0}),t.syntaxHighlight=n,t.debounce=a,t.selectElementText=o,t.clearSelection=r,t.scrollToY=i,t.render=u,t.detectmob=s;var c=(t.randInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},t.randCol=function(){return"#"+(16777215*Math.random()<<0).toString(16)},t.RAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}());t.HTTP={post:function(e,t,n){var a=new XMLHttpRequest;a.open("POST",e,!0),a.setRequestHeader("Content-Type","application/json; charset=UTF-8"),a.send(JSON.stringify(t)),a.onreadystatechange=function(){4==a.readyState&&a.status>200&&a.status<300?n(null,{data:a.responseText,code:a.status}):4==a.readyState&&a.status>=400&&n({data:a.responseText,code:a.status})}},head:function(e,t){var n=new XMLHttpRequest;n.open("HEAD",e,!0),n.onreadystatechange=function(){this.readyState==this.DONE&&t(404!=this.status)}}}},function(e,t){e.exports=/([\uD800-\uDBFF])([\uDC00-\uDFFF])([\uD800-\uDBFF])?([\uDC00-\uDFFF])?|([0-9])?([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F\uFE0F]+)/g},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=Date.now()-e.getTime(),n=new Date(t);return Math.abs(n.getUTCFullYear()-1970)}function r(){v.classList.remove("about__left-bracket--close"),p.classList.remove("about__right-bracket--close")}function i(){v.classList.add("about__left-bracket--close"),p.classList.add("about__right-bracket--close")}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),s=n(1),c=a(s),l=document.getElementsByClassName("about")[0],d=document.querySelector(".about .json-view__json"),f=document.createElement("pre"),m=JSON.stringify({firstName:"Dawid",lastName:"Czarnik",age:o(new Date("1995-07-21T00:00:00+00:00")),knows:{general:["HTML5/CSS3","latest ES6/7 JS","basic PHP","OOP patterns","functional programming techniques","basic SQL"],frameworks:{frontEnd:["react + flux(redux)","angular 1.X","bootstrap"],backEnd:["koa","express","laravel"]},tooling:["webpack(babel loader❤)","gulp","npm / composer"],other:["jquery","bookshelf / eloquent","socket.io"]}},null,2);f.innerHTML=(0,u.syntaxHighlight)(m),d.appendChild(f);var v=document.getElementsByClassName("about__left-bracket")[0],p=document.getElementsByClassName("about__right-bracket")[0];t["default"]={top:l.offsetTop,bottom:l.offsetTop+l.offsetHeight,onEnter:function(){c["default"].setActive("about"),i()},onLeave:function(){r()}}},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n,a,o){var r=document.createElement("canvas"),c=r.getContext("2d");r.width=t,r.height=n;for(var l=Math.floor((r.width+r.height)/a),d=[],f=[],m=0;l>m;m++){for(var v=new u({x:(0,i.randInt)(0,r.width),y:(0,i.randInt)(0,r.height)}),p=0;p<d.length;p++){var g=Math.floor(d[p].distance(v));c.globalAlpha=a/g,50>g&&(f.push(new s(d[p],v,{color:Math.random()<.2?(0,i.randCol)():"white"})),f[f.length-1].draw(c))}d.push(v)}o?(e.style.backgroundPosition="0 100%",e.style.backgroundImage='url("'+r.toDataURL()+'")'):(r.style.position="absolute",r.style.top=0,r.style.left=0,e.appendChild(r))}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t["default"]=o;var i=n(2),u=function(){function e(t){var n=t.x,o=t.y;a(this,e),this.x=n,this.y=o}return r(e,[{key:"distance",value:function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}},{key:"draw",value:function(e){e.beginPath(),e.arc(this.x,this.y,3,0,2*Math.PI,!1),e.fillStyle="black",e.fill()}}]),e}(),s=function(){function e(t,n,o){var r=o.color;a(this,e),this.A=t,this.B=n,this.color=r||"black"}return r(e,[{key:"draw",value:function(e){e.beginPath(),e.strokeStyle=this.color,e.moveTo(this.A.x,this.A.y),e.lineTo(this.B.x,this.B.y),e.stroke()}}]),e}()},function(e,t){var n=Math.random,a=Math.max;e.exports=function(e,t){return function(){return~~a(e,n()*t)}}},function(e,t){"use strict";e.exports={googleAnalyticsId:"UA-52764196-2",mailServer:"https://mighty-taiga-50462.herokuapp.com/sendmail"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o),i=n(2),u=n(7),s=a(u),c=document.getElementsByClassName("contact")[0],l=document.getElementsByClassName("contact__form")[0],d=document.getElementsByClassName("contact__submit")[0],f={firstName:document.querySelector(".contact__fname"),lastName:document.querySelector(".contact__lname"),email:document.querySelector(".contact__email"),message:document.querySelector(".contact__message")},m=function(){for(var e in f)f.hasOwnProperty(e)&&(f[e].value="")},v=document.getElementById("contact-overlay-tmpl"),p=function(e){var t=(0,i.render)(v.innerHTML,e),n=document.createElement("div");return n.innerHTML=t,n},g=function(){return p({title:"got it!",iconUrl:n(25),message:"The mail has been sent successfully and shall be reviewed soon. Want to add something?",buttonText:"Write one more",additionalClasses:"overlay--success"})},h=function(){return p({title:"what a bummer",iconUrl:n(24),message:"we encountered a difficulities while attempting to send your message, please try again in a little bit.",buttonText:"Retry",additionalClasses:"overlay--failed"})};l.addEventListener("submit",function(e){e.preventDefault(),d.disabled=!0,d.innerHTML="sending...";var t={firstName:f.firstName.value,lastName:f.lastName.value,email:f.email.value,message:f.message.value};i.HTTP.post(s["default"].mailServer,t,function(e,t){e?l.appendChild(h()):(l.appendChild(g()),m()),d.disabled=!1,d.innerHTML="send"})}),t["default"]={top:c.offsetTop,bottom:c.offsetTop+c.offsetHeight,onEnter:function(){r["default"].setActive("contact")},onLeave:function(){}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),r=a(o),i=document.getElementsByClassName("footer")[0];(0,r["default"])(i,window.innerWidth,i.offsetHeight,4,!0),t["default"]={}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){F.drawImage(e,0,0,_,E)}function r(){(0,d.RAF)(r),F.drawImage(w,0,0,_,E)}function i(){(0,d.selectElementText)(M),setTimeout(function(){M.style.textAlign="center",setTimeout(function(){return(0,d.clearSelection)()},100)},300)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),s=a(u),c=n(26),l=a(c),d=n(2),f=n(1),m=a(f),v=n(4),p=a(v),g=document.getElementsByClassName("header")[0],h=document.getElementsByClassName("header__background")[0],y=document.getElementsByClassName("header__call-to-action")[0];y.addEventListener("click",function(e){e.preventDefault(),(0,d.scrollToY)(p["default"].top,800)});var b=document.createElement("canvas"),w=document.getElementById("bgvid"),_=window.innerWidth,E=700;b.width=_,b.height=E,h.appendChild(b),(0,s["default"])(h,_,E/2,2,!1);var F=b.getContext("2d");if((0,d.detectmob)()){var x=new Image;x.src=n(23),x.onload=function(){o(x)}}else w.addEventListener("play",function(e){(0,d.RAF)(r)},!1);var T=["amazing","elegant","fast","great"],M=document.getElementsByClassName("header__animated-word")[0],N=(0,l["default"])(T,function(e,t){M.innerHTML=e,"great"!==e||t?"great"==e&&t&&i():N()});t["default"]={onWindowResize:function(){_=window.innerWidth,b.width=window.innerWidth,(0,d.detectmob)()&&o(x)},top:0,bottom:g.offsetTop+g.offsetHeight,onEnter:function(){m["default"].setActive("top"),w.play()},onLeave:function(){w.pause()}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t>0?s["default"].node.classList.add("nav--scrolled"):s["default"].node.classList.remove("nav--scrolled"),i(t,[l["default"],f["default"],v["default"],g["default"]])}function r(e,t){return e>t.top-b&&e<t.bottom-b}function i(e,t){for(var n=t.length,a=0;n>a;a++){var o=t[a];if(r(e,o)){if(o==w)return;w=o;for(var i=0;n>i;i++)t[i]!=w&&t[i].onLeave();o.onEnter()}}}n(19),n(17),n(16),n(13),n(18),n(14),n(15),n(20),n(21),n(22);var u=n(1),s=a(u),c=n(10),l=a(c),d=n(4),f=a(d),m=n(12),v=a(m),p=n(8),g=a(p),h=n(9),y=(a(h),n(2));window.addEventListener("resize",function(){l["default"].onWindowResize()});var b=350;window.addEventListener("scroll",o),o();var w=null,_=document.querySelectorAll("[data-scroll-to]");Array.prototype.forEach.call(_,function(e){e.addEventListener("click",function(e){e.preventDefault();var t=document.getElementById(this.getAttribute("data-scroll-to")),n=t.offsetTop-60;(0,y.scrollToY)(n,600),s["default"].closeNav()})})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o),i=document.getElementsByClassName("projects")[0],u=document.getElementsByClassName("project"),s=function(){Array.prototype.forEach.call(document.querySelectorAll(".project__overlay--active"),function(e){e.classList.remove("project__overlay--active")})};Array.prototype.forEach.call(u,function(e){e.addEventListener("mouseenter",function(){s(),this.children[0].classList.add("project__overlay--active")}),e.addEventListener("mouseleave",function(){this.children[0].classList.remove("project__overlay--active")})}),t["default"]={top:i.offsetTop,bottom:i.offsetTop+i.offsetHeight,onEnter:function(){r["default"].setActive("projects")},onLeave:function(){}}},function(e,t){},13,13,13,13,13,13,13,13,13,function(e,t,n){e.exports=n.p+"a701d146bdb7609362ff433c74771be8.jpg"},function(e,t,n){e.exports=n.p+"1dff016bcc54b2a4b3b7dd5df14c3eea.svg"},function(e,t,n){e.exports=n.p+"6b8335f4618a2579085de54fe0271c69.svg"},function(e,t,n){function a(e,t,n){"function"==typeof t&&(n=t,t={}),t.cmin=isNaN(t.cmin)?300:t.cmin,t.cmax=isNaN(t.cmax)?800:t.cmax;var a,i=o(t.cmin,t.cmax),u=e.length-1,s=!1;return function c(o,l){t.initial=l,a=r(e[o],t,function(e,t){n(e,s),t&&!s&&setTimeout(c,i(),++o>u?0:o,e)})}(0,t.initial),function(){s=!0,a()}}var o=n(6),r=n(27);e.exports=a},function(e,t,n){function a(e,t,n){function a(t){f=o(d,0,t),t=r(f),l=d!=e&&0==e.indexOf(f),n(f,c),s=l||0==t?setTimeout(u,m(),t):setTimeout(a,m(),t-1)}function u(t){f=o(e,0,t),t=r(f),c=f==e,n(f,c),c||(s=setTimeout(u,m(),t+1))}"function"==typeof t&&(n=t,t={});var s=null,c=!1,l=!1,d=t.initial,f="";t.min=isNaN(t.min)?40:t.min,t.max=isNaN(t.max)?80:t.max;var m=i(t.min,t.max);return d?a():u(1),function(){clearTimeout(s),n(f,!0)}}var o=n(30),r=n(29),i=n(6);e.exports=a},function(e,t,n){var a=n(3),o="•";e.exports=function(e){for(var t,n=e.replace(a,o).split(""),r=0;t=a.exec(e);)t.index-=r,r+=t[0].length-1,n.splice(t.index,1,t[0]);return n}},function(e,t,n){var a=n(3);e.exports=function(e){return e.replace(a,"•").length}},function(e,t,n){var a=(n(3),n(28));e.exports=function(e,t,n){n=isNaN(n)?e.length:n;var o=a(e).slice(t,t+n);return 0>n?"":o.join("")}}]));
//# sourceMappingURL=bundle.js.map