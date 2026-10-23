const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const backTop = document.getElementById("backTop");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Project links are intentionally not invented. Update them with verified URLs
// once the public repositories or live demos are ready.
document.querySelectorAll("[data-project]").forEach((link) => {
  link.addEventListener("click", () => {
    const project = link.dataset.project;
    const subject = encodeURIComponent(`Portfolio project link for ${project}`);
    const body = encodeURIComponent(`Please add the verified repository or demo URL for ${project} here.`);
    const fallback = `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
    if (link.getAttribute("href") === "#contact") {
      link.setAttribute("href", fallback);
    }
  });
});
