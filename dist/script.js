const burger=document.querySelector(".burger-menu"),menu=document.querySelector(".main-nav__menu");burger.addEventListener("click",(()=>{menu.classList.toggle("show"),burger.classList.toggle("active")})),window.addEventListener("resize",(()=>{window.innerWidth>767&&(menu.classList.remove("show"),burger.classList.remove("active"))}));
//# sourceMappingURL=script.js.map