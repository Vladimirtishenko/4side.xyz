function Site(){this.xhr=function(){var t;try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{t=new ActiveXObject("Microsoft.XMLHTTP")}catch(n){t=!1}}return t||"undefined"==typeof XMLHttpRequest||(t=new XMLHttpRequest),t}}function Modal(){var t=this;this.Myscroll=null,this.buttonOpen=document.querySelector(".brif-for-site"),this.buttonClose=document.querySelector(".side-modal-close"),this.blurElement=document.querySelector(".container-all-outer"),this.openElementModal=document.querySelector(".side-modal-outer"),this.form=document.getElementById("modal-letter"),this.buttonOpen.addEventListener("click",t.openHandler.bind(t)),this.buttonClose.addEventListener("click",t.closeHandler.bind(t)),this.form.addEventListener("submit",t.letterSend.bind(t))}function Slider(t,e){function n(){r.height=window.clientWidth,r.width=window.clientWidth,r.running("resize")}var r=this;this.list=e?e:null,this.countSlide=this.list?this.list.children.length-1:null,this.element=t?t:null,this.height=window.clientWidth,this.width=window.clientWidth,this.controlsBuild=!1,this.currentSlide=0,this.move=0,this.preloader=document.querySelector(".-absolute-preloader"),this.listImages=this.list?this.list.querySelectorAll("img"):null,window.addEventListener("resize",n)}function SandwichMenu(t){var e=this;this.state=!0,t.addEventListener("click",e.actions.bind(this,t,e))}function GalleryAjax(){if("object"==typeof local_data){var t=this,e=new Image;e.src="/images/proloader_opacity.gif",this.preload=document.createElement("div"),this.preload.appendChild(e),local_data.gallery.src.splice(0,1),this.galery=local_data.gallery.src,this.container=document.querySelector(".side-work-gallery"),this.state=!0,window.addEventListener("scroll",t.loadGallery.bind(t))}}function Grid(){"function"==typeof Masonry?new Masonry(".grid",{itemSelector:".grid-item",columnWidth:1,percentPosition:!0}):null}function allHandlerToload(){Grid()}function transition(t){t="undefined"==typeof t?0:t;var e="-webkit-transition-duration: "+t+"s;-moz-transition-duration: "+t+"s;-ms-transition-duration: "+t+"s;-o-transition-duration: "+t+"s;transition-duration: "+t+"s;";return e}function transformX(t){t="undefined"==typeof t?0:t;var e="-webkit-transform: translateX("+t+"px);-moz-transform: translateX("+t+"px);-ms-transform: translateX("+t+"px);-o-transform: translateX("+t+"px);transform: translateX("+t+"px);";return e}function transformY(t,e){t="undefined"==typeof t?0:t;var n="-webkit-transform: translateY("+t+"px) rotate: ("+e+"deg);-moz-transform: translateY("+t+"px) rotate("+e+"deg);-ms-transform: translateY("+t+"px) rotate("+e+"deg);-o-transform: translateY("+t+"px) rotate("+e+"deg);transform: translateY("+t+"px) rotate("+e+"deg);";return n}function startAsync(){var t=new Slider(document.querySelector(".slider-side"),document.querySelector(".slider-list"));t.running()}var site_=new Site;Modal.prototype.openHandler=function(){this.blurElement.classList.add("-blur"),this.openElementModal.style.display="table",this.animate(this.openElementModal)},Modal.prototype.closeHandler=function(){var t=this;this.blurElement.classList.remove("-blur"),this.openElementModal.classList.remove("-animate-modal"),setTimeout(function(){t.openElementModal.style.display="none",t.Myscroll=null},1e3)},Modal.prototype.animate=function(t){var e=this;setTimeout(function(){t.classList.add("-animate-modal"),e.Myscroll=new IScroll("#wrapper",{mouseWheel:!0})},1)},Modal.prototype.letterSend=function(t){t.preventDefault();for(var e=t.target.querySelectorAll("input, textarea"),n="",r=["name","number","email"],i=document.querySelector(".hide-message"),a=0;a<e.length;a++)if(r.indexOf(e[a].name)>-1&&e[a].value)n+=e[a].name+"="+e[a].value+"&",e[a].classList.remove("no-validate");else{if(-1!=r.indexOf(e[a].name))return void e[a].classList.add("no-validate");n+=e[a].name+"="+e[a].value+"&"}var s=site_.xhr();s.onreadystatechange=function(){200==s.status&&4==s.readyState&&(200!=JSON.parse(s.responseText).status?i.innerHTML="Ваше сообщение не отправлено попробуйте позже":i.innerHTML="Ваше сообщение отправлено, мы вам перезвоним",t.target.reset())},s.open("POST","/mail",!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(n.slice(0,-1))},new Modal,Slider.prototype.running=function(t){function e(t,e){t.style.width=n.width+"px",t.setAttribute("data-slides-number",e)}var n=this;if(n.element||n.list){this.controlsBuild||this.createControls(),t&&(this.move=this.currentSlide*-n.width,this.list.style.cssText+="transition-duration: 1s; transform: translateX("+this.move+"px)"),[].forEach.call(n.list.children,e),this.list.style.width=this.width*(this.list.children.length+.5)+"px",this.touchEvents();for(var r=0;r<this.listImages.length;r++){var i=new Image;i.src=this.listImages[r].src,i.onload=function(){n.preloader.classList.contains("hiddens-preloader")||n.preloader.classList.add("hiddens-preloader")}}}},Slider.prototype.touchEvents=function(){function t(t){var e=t.changedTouches[0];startx=parseInt(e.clientX),r=startx}function e(t){var e=t.changedTouches[0];if(endx=parseInt(e.clientX),i=endx,r>i&&r-i>50){var a=n.currentSlide+1>n.countSlide?0:n.currentSlide+1;n._clickSlideHandlers(parseInt(a))}else if(i>r&&i-r>50){var a=n.currentSlide-1<0?n.countSlide:n.currentSlide-1;n._clickSlideHandlers(parseInt(a))}}var n=this;this.list.addEventListener("touchstart",t,!1),this.list.addEventListener("touchend",e,!1);var r=0,i=0},Slider.prototype.createControls=function(){for(var t=document.querySelector(".controls-slider"),e="",n=this,r=0;r<this.list.children.length;r++)e+=0==r?"<span class='-active-slide' data-slide="+r+"></span>":"<span data-slide="+r+"></span>";t.insertAdjacentHTML("afterbegin",e),t.addEventListener("click",n._clickSlideHandlers.bind(n)),this.controlsBuild=!0},Slider.prototype._clickSlideHandlers=function(t){function e(t,e){var r=document.querySelector(".-active-slide");console.log(transition(e)),console.log(transform(t)),i.list.style.cssText+=transition(e)+transformX(t),i.currentSlide=n,i.move=t,r.parentNode.querySelector("span[data-slide='"+n+"']").classList.add("-active-slide"),r.classList.remove("-active-slide")}var n,r=t.target?t.target:t,i=this;if(isNaN(r)){if(!r.getAttribute("data-slide"))return;if(n=parseInt(r.getAttribute("data-slide")),n==this.currentSlide)return}else if(n=r,n==this.currentSlide)return;if(n>this.currentSlide)if(this.currentSlide+1<n){var a=parseInt(-i.width*n);e(a,.5)}else{var a=parseInt(i.move)+parseInt(-i.width);e(a,.8)}else if(this.currentSlide-1>n){var a=parseInt(-i.width*n);e(a,.5)}else{var a=parseInt(i.move)+parseInt(i.width);e(a,.8)}},SandwichMenu.prototype.actions=function(t,e){function n(t){for(var n=0;n<t.length;n++)t[n].label&&t[n].state.setAttribute("style",r(t[n].operator,t[n].label)),function(n){setTimeout(function(){t[n].state.setAttribute("style",r(t[n].operator,t[n].delay)),e.state=!0},400)}(n)}function r(t,e){var n={one:transition(.4)+transformY(t+12,0),two:transition(.4)+transformY(0,0),three:transition(.4)+transformY(t+12,t+45),four:"opacity: "+t};return n[e]}if(e.state){e.state=!1;var i=t.querySelector(".first-line"),a=t.querySelector(".two-line"),s=t.querySelector(".third-line");t.classList.contains("-open")?(n([{operator:"",state:i,delay:"two",label:"one"},{operator:"-",state:s,delay:"two",label:"one"},{operator:1,state:a,delay:"four"}]),t.classList.remove("-open"),document.querySelector(".container-fixed-menu").style.cssText="opacity: 0",document.querySelector(".container-all-outer").setAttribute("style",transformX(0))):(n([{operator:"",state:i,delay:"three",label:"one"},{operator:"-",state:s,delay:"three",label:"one"},{operator:0,state:a,delay:"four"}]),t.classList.add("-open"),document.querySelector(".container-fixed-menu").style.cssText="opacity: 1",document.querySelector(".container-all-outer").setAttribute("style",transformX(-200)))}};var _SandwichMenu_=new SandwichMenu(document.querySelector(".menu-to-site"));GalleryAjax.prototype.loadGallery=function(){var t=this;if(document.body.offsetHeight-500<window.scrollY+window.innerHeight&&this.state&&this.galery.length>0){this.state=!1,t.container.appendChild(t.preload);var e=new Image;e.src=this.galery[0],this.galery.splice(0,1),e.onload=function(){t.container.removeChild(t.container.lastElementChild),t.container.appendChild(e),t.state=!0}}},new GalleryAjax,window.addEventListener("load",allHandlerToload),window.addEventListener("DOMContentLoaded",startAsync);