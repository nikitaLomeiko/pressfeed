const lenis = new Lenis({
  autoRaf: true,
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 120,
    duration: 1500,
    threshold: 0.25,
    once: false,
    easing: "ease-out",
  });
});

var rellax = new Rellax(".rellax", {});

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const sidebarClose = document.getElementById("sidebarClose");

  burgerMenu.addEventListener("click", function () {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  sidebarClose.addEventListener("click", function () {
    closeSidebar();
  });

  sidebarOverlay.addEventListener("click", function () {
    closeSidebar();
  });

  document.querySelectorAll(".sidebar__link").forEach((link) => {
    link.addEventListener("click", function () {
      closeSidebar();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      closeSidebar();
    }
  });

  const dropdownBtn = document.querySelector(".sidebar__dropdown-btn");
  const dropdownContent = document.querySelector(".sidebar__dropdown-content");

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", function () {
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    document.body.style.overflow = "";

    if (dropdownContent) {
      dropdownContent.style.display = "none";
    }
  }
});
