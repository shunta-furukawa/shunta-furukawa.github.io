(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    let lastScrollY = window.scrollY;
    let isScrollingDown = true;
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        if (!isScrollingDown) {
          header.classList.add("hide");
          isScrollingDown = true;
        }
      } else {
        if (isScrollingDown || currentScrollY === 0) {
          header.classList.remove("hide");
          isScrollingDown = false;
        }
      }
      lastScrollY = currentScrollY;
    });
    const menuToggle = document.getElementById("menu-toggle");
    const menuDrawer = document.getElementById("menu-drawer");
    const menuClose = document.getElementById("menu-close");
    menuToggle.addEventListener("click", function() {
      menuDrawer.classList.add("open");
    });
    menuClose.addEventListener("click", function() {
      menuDrawer.classList.remove("open");
    });
    document.addEventListener("click", function(event) {
      if (!menuDrawer.contains(event.target) && !menuToggle.contains(event.target)) {
        menuDrawer.classList.remove("open");
      }
    });
  });
})();
