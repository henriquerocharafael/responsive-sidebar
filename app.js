const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
