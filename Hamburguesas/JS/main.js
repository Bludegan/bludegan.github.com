'use strict'

//DOM
(function(){
    const links = document.querySelectorAll(".close-me");
    links.forEach(el =>{
    el.addEventListener("click",function(ev){
        let container = document.querySelector(".content");
        ev.preventDefault();
        container.classList.remove("animate__fadeInDown");
        container.classList.remove("animate__animated");
        container.classList.add("animate__fadeOutDown");
        container.classList.add("animate__animated");
        setTimeout(()=>{
        location.href = this.href;
        },600);
        return false;
    })
    })
})();