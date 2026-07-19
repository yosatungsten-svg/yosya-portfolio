(function () {
  "use strict";

  // Reveal-on-scroll. Belt-and-suspenders: an IntersectionObserver drives the
  // nice staggered fade-in, but a max-delay fallback guarantees every section
  // becomes visible regardless of scroll speed/pattern or observer timing, so
  // content can never get stuck at opacity:0 for a real visitor.
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });

    revealEls.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add("active");
      }, 1200 + i * 15);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("active");
    });
  }

  // Scroll-spy nav
  var sectionIds = ["hero", "experience", "expertise", "applied-ai", "contact"];
  var navLinks = document.querySelectorAll("header nav a[href^='#'], #nav-panel a[href^='#']");

  function onScroll() {
    var current = sectionIds[0];
    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) {
        current = id;
      }
    });
    navLinks.forEach(function (a) {
      var isActive = a.getAttribute("href") === "#" + current;
      a.classList.toggle("text-on-surface", isActive);
      a.classList.toggle("text-on-surface-variant", !isActive);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var panel = document.getElementById("nav-panel");
  var iconOpen = document.getElementById("nav-icon-open");
  var iconClose = document.getElementById("nav-icon-close");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var willOpen = panel.classList.contains("hidden");
      panel.classList.toggle("hidden");
      toggle.setAttribute("aria-expanded", String(willOpen));
      iconOpen.classList.toggle("hidden");
      iconClose.classList.toggle("hidden");
    });

    panel.querySelectorAll("[data-nav-close]").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
        iconOpen.classList.remove("hidden");
        iconClose.classList.add("hidden");
      });
    });
  }
})();
