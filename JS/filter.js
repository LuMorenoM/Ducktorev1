document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btnFilter");
    const category = document.querySelector(".category");

    btn.addEventListener("click", () => {
      category.classList.toggle("active");
    });
});