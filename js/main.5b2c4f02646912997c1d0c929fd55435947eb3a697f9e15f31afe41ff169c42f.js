(()=>{document.addEventListener("DOMContentLoaded",()=>{let o=document.querySelector(".site-header"),s=window.scrollY,t=!0;window.addEventListener("scroll",()=>{let e=window.scrollY;e>s?t||(o.classList.add("hide"),t=!0):(t||e===0)&&(o.classList.remove("hide"),t=!1),s=e});let c=document.getElementById("menu-toggle"),n=document.getElementById("menu-drawer"),d=document.getElementById("menu-close");c.addEventListener("click",function(){n.classList.add("open")}),d.addEventListener("click",function(){n.classList.remove("open")}),document.addEventListener("click",function(e){!n.contains(e.target)&&!c.contains(e.target)&&n.classList.remove("open")})});})();
