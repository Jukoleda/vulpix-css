const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelBtn = document.getElementById("cancelBtn");
const modal = document.getElementById("myModal");

openModalBtn?.addEventListener("click", () => modal.classList.add("active"));
closeModalBtn?.addEventListener("click", () =>
  modal.classList.remove("active")
);
cancelBtn?.addEventListener("click", () => modal.classList.remove("active"));

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

menuToggle?.addEventListener("click", () => {
  navbarMenu?.classList.toggle("active");
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  sidebar.classList.toggle("open");
  overlay.classList.toggle("open");
}
const toggleButton = document.getElementById("darkToggle");
const body = document.body;

toggleButton?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Modo Claro";
  } else {
    toggleButton.textContent = "🌙 Modo Oscuro";
  }
});

const tabs = document.querySelectorAll(".tab-title");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const targetTab = this.getAttribute("data-tab");

    // Desactivar todas las pestañas y paneles
    tabs.forEach((tab) => tab.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    // Activar la pestaña y el panel correspondientes
    this.classList.add("active");
    document.getElementById(targetTab).classList.add("active");
  });
});

// Mostrar la notificación
setTimeout(() => {
  const toast = document.querySelector(".toast");
  toast.classList.add("show");

  // Ocultar después de 3 segundos
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}, 1000);

// JavaScript para interactividad de las estrellas
const stars = document.querySelectorAll(".rating .star");
stars.forEach((star, index) => {
  star.addEventListener("click", function () {
    stars.forEach((s, i) => {
      s.classList.toggle("selected", i <= index);
    });
  });
});

// JavaScript para acordeón
const headers = document.querySelectorAll(".accordion-header");
headers.forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.classList.toggle("active");
  });
});
