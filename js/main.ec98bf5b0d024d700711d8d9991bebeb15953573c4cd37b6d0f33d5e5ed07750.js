(()=>{document.addEventListener("DOMContentLoaded",()=>{let r=document.querySelector(".site-header"),c=window.scrollY,s=!0;window.addEventListener("scroll",()=>{let e=window.scrollY;e>c?s||(r.classList.add("hide"),s=!0):(s||e===0)&&(r.classList.remove("hide"),s=!1),c=e});let l=document.getElementById("menu-toggle"),o=document.getElementById("menu-drawer"),i=document.getElementById("menu-close");l.addEventListener("click",function(){o.classList.add("open")}),i.addEventListener("click",function(){o.classList.remove("open")}),document.addEventListener("click",function(e){!o.contains(e.target)&&!l.contains(e.target)&&o.classList.remove("open")});let d=document.querySelectorAll(".bar"),a=new IntersectionObserver(e=>{e.forEach(t=>{if(t.isIntersecting){let n=t.target,g=n.getAttribute("data-years"),b=n.getAttribute("data-colors");n.style.width=`${g*5}%`,n.style.backgroundColor=b}})},{threshold:.5});d.forEach(e=>a.observe(e));let u=document.querySelectorAll(".story-item"),m=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},{threshold:.2});u.forEach(e=>m.observe(e))});})();
