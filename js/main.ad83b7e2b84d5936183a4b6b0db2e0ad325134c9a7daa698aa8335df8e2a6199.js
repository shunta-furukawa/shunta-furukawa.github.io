(()=>{document.addEventListener("DOMContentLoaded",()=>{window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("visible",window.scrollY>100)}),window.addEventListener("scroll",()=>{document.querySelectorAll("main section").forEach(e=>{e.getBoundingClientRect().top<=window.innerHeight*.8&&e.classList.add("visible")})})});})();
