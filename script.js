/* شاهي راقي — قائمة الجوال + السنة + تجربة امتدادات الصور */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("site-nav");

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        toggle.setAttribute("aria-label", open ? "فتح القائمة" : "إغلاق القائمة");
        nav.classList.toggle("is-open", !open);
      });

      nav.addEventListener("click", function (event) {
        if (!event.target.closest("a")) return;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "فتح القائمة");
        nav.classList.remove("is-open");
      });

      document.addEventListener("keydown", function (event) {
        if (event.key !== "Escape") return;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "فتح القائمة");
        nav.classList.remove("is-open");
      });
    }

    const current = document.querySelector('[data-nav][aria-current="page"]');
    if (current) current.classList.add("active");

    document.querySelectorAll("[data-year]").forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });

    /* يجرب الامتداد تلقائيًا: jpg → jpeg → png → webp */
    document.querySelectorAll("img[data-photo]").forEach(function (img) {
      var base = img.getAttribute("data-photo");
      var exts = [".jpg", ".jpeg", ".png", ".webp"];
      var index = 1;
      img.addEventListener("error", function () {
        if (index < exts.length) img.src = base + exts[index++];
      });
    });
  });
})();