const backdrop = document.querySelector(".backdrop");
const openBtn = document.querySelector(".hero-btn");
const closeBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");

// OPEN MODAL
openBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
  document.body.style.overflow = "hidden"; // prevent scroll
});

// CLOSE MODAL (button)
closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
  document.body.style.overflow = ""; // restore scroll
});

// CLOSE MODAL (clicking backdrop)
backdrop.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
  document.body.style.overflow = ""; // restore scroll
});

// PREVENT closing when clicking inside modal
modal.addEventListener("click", (event) => {
  event.stopPropagation();
});
