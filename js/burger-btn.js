const mobileMenu = document.querySelector(".mobile-menu");
const openBurger = document.querySelector(".burger-btn");
const closeMobile = document.querySelector(".mobile-menu-close");

// OPEN menu
openBurger.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  document.body.style.overflow = "hidden"; // prevent scrolling behind menu
});

// CLOSE menu (close button)
closeMobile.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = ""; // restore scrolling
});

// PREVENT closing when clicking inside menu container
const menuContainer = document.querySelector(".mobile-menu-container");
menuContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
