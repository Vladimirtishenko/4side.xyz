function Site(){}function Slider(t,e){function i(){r.height=window.innerHeight,r.width=window.innerWidth,r.running("resize")}var r=this;this.list=e,this.element=t,this.height=window.innerHeight,this.width=window.innerWidth,this.controlsBuild=!1,this.currentSlide=0,this.move=0,this.preloader=document.querySelector(".-absolute-preloader"),window.innerHeight>600&&window.innerHeight<790?t.style.height=window.innerHeight+"px":t.removeAttribute("style"),window.addEventListener("resize",i)}function SandwichMenu(t){var e=this;this.state=!0,t.addEventListener("click",e.actions.bind(this,t,e))}Slider.prototype.running=function(t){function e(t,e){t.style.width=i.width+"px",t.setAttribute("data-slides-number",e)}var i=this;this.controlsBuild||this.createControls(),t&&(this.move=this.currentSlide*-i.width,this.list.style.cssText+="transition-timing-function: cubic-bezier(0, 0, 0.58, 1); transition-duration: 1s; transform: translateX("+this.move+"px)"),[].forEach.call(i.list.children,e),this.list.style.width=this.width*(this.list.children.length+.5)+"px",i.preloader.classList.add("hiddens-preloader")},Slider.prototype.createControls=function(){for(var t=document.querySelector(".controls-slider"),e="",i=this,r=0;r<this.list.children.length;r++)e+=0==r?"<span class='-active-slide' data-slide="+r+"></span>":"<span data-slide="+r+"></span>";t.insertAdjacentHTML("afterbegin",e),t.addEventListener("click",i._clickSlideHandlers.bind(i)),this.controlsBuild=!0},Slider.prototype._clickSlideHandlers=function(){function t(t,n){var s=document.querySelector(".-active-slide");r.list.style.cssText+="transition-timing-function: cubic-bezier(0, 0, 0.58, 1.0); transition-duration: "+n+"s; ",r.list.style.cssText+="transform: translateX("+t+"px)",r.currentSlide=e,r.move=t,s.classList.remove("-active-slide"),i.classList.add("-active-slide")}var e,i=event.target,r=this;if(i.getAttribute("data-slide"))if(e=parseInt(i.getAttribute("data-slide")),e>this.currentSlide)if(this.currentSlide+1<e){var n=parseInt(-r.width*e);t(n,.5)}else{var n=parseInt(r.move)+parseInt(-r.width);t(n,1)}else if(this.currentSlide-1>e){var n=parseInt(-r.width*e);t(n,.5)}else{var n=parseInt(r.move)+parseInt(r.width);t(n,1)}};var _Slider_=new Slider(document.querySelector(".slider-side"),document.querySelector(".slider-list"));_Slider_.running(),SandwichMenu.prototype.actions=function(t,e){function i(t){for(var i=0;i<t.length;i++)t[i].label&&(t[i].state.style.cssText=r(t[i].operator,t[i].label)),function(i){setTimeout(function(){t[i].state.style.cssText=r(t[i].operator,t[i].delay),e.state=!0},400)}(i)}function r(t,e){var i={one:"transition: .4s; transform: translateY("+t+"12px) rotate(0deg)",two:"transition: .4s; transform: translateY(0px) rotate(0deg)",three:"transition: .4s; transform: translateY("+t+"12px) rotate("+t+"45deg)",four:"opacity: "+t};return i[e]}if(e.state){e.state=!1;var n=t.querySelector(".first-line"),s=t.querySelector(".two-line"),a=t.querySelector(".third-line");t.classList.contains("-open")?(i([{operator:"",state:n,delay:"two",label:"one"},{operator:"-",state:a,delay:"two",label:"one"},{operator:1,state:s,delay:"four"}]),t.classList.remove("-open"),document.querySelector(".container-all-outer").style.left="0px"):(i([{operator:"",state:n,delay:"three",label:"one"},{operator:"-",state:a,delay:"three",label:"one"},{operator:0,state:s,delay:"four"}]),t.classList.add("-open"),document.querySelector(".container-all-outer").style.left="-200px")}};var _SandwichMenu_=new SandwichMenu(document.querySelector(".menu-to-site"));