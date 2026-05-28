(function () {
  var header = document.querySelector("[data-site-header]");
  var topButton = document.querySelector("[data-back-to-top]");
  var links = document.querySelectorAll(".site-nav a");
  var currentPath = window.location.pathname.replace(/\\/g, "/").split("/").pop() || "index.html";

  links.forEach(function (link) {
    var linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  function syncScrollState() {
    var scrolled = window.scrollY > 12;
    if (header) {
      header.classList.toggle("is-scrolled", scrolled);
    }
    if (topButton) {
      topButton.classList.toggle("is-visible", window.scrollY > 360);
    }
  }

  window.addEventListener("scroll", syncScrollState, { passive: true });
  syncScrollState();

  if (topButton) {
    topButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
})();
