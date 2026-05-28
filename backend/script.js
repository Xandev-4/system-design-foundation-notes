/* ── Theme Toggle ── */
const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const statusTheme = document.getElementById("statusTheme");
let isDark = false;

function applyTheme(dark) {
  isDark = dark;
  if (dark) {
    body.classList.add("dark-theme");
    themeBtn.textContent = "☽ Dark";
    statusTheme.textContent = "Dark Mode";
  } else {
    body.classList.remove("dark-theme");
    themeBtn.textContent = "☀ Light";
    statusTheme.textContent = "Light Mode";
  }
  localStorage.setItem("notesTheme", dark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("notesTheme");
if (savedTheme === "dark") applyTheme(true);
else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
)
  applyTheme(true);

themeBtn.addEventListener("click", () => applyTheme(!isDark));

/* ── Sidebar Panel Toggle (hamburger) ── */
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("sidebarOverlay");
const isMobile = () => window.innerWidth <= 640;
let sidebarOpen = true;

function setSidebar(open) {
  sidebarOpen = open;
  if (isMobile()) {
    sidebar.classList.toggle("open", open);
    overlay.classList.toggle("active", open);
    overlay.setAttribute("aria-hidden", String(!open));
  } else {
    sidebar.classList.toggle("collapsed", !open);
  }
  menuBtn.setAttribute("aria-expanded", String(open));
}

menuBtn.addEventListener("click", () => setSidebar(!sidebarOpen));
overlay.addEventListener("click", () => setSidebar(false));

/* ── Status Bar Clock ── */
const statusTime = document.getElementById("statusTime");
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  statusTime.textContent = `${h}:${m}`;
}
updateClock();
setInterval(updateClock, 10000);

/* ── Smooth Scroll (delegated — works for sidebar.js-injected links too) ── */
document.addEventListener("click", function (e) {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute("href"));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
