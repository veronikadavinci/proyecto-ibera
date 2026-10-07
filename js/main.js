// JS opcional solo para mostrar el botón "volver arriba" después de hacer scroll.
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });
}
