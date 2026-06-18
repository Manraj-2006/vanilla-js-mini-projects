// grab the elements we need
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// clicking the hamburger button shows the sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

// clicking the close button hides the sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});