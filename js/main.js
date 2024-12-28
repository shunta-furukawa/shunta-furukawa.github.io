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
    const bars = document.querySelectorAll(".bar");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const years = bar.getAttribute("data-years");
            const barColor = bar.getAttribute("data-colors");
            bar.style.width = `${years * 5}%`;
            bar.style.backgroundColor = barColor;
          }
        });
      },
      { threshold: 0.5 }
      // 50%見えたら発火
    );
    bars.forEach((bar) => observer.observe(bar));
    const items = document.querySelectorAll(".story-item");
    const storyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
    items.forEach((item) => storyObserver.observe(item));
  });
})();
