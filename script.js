// ================= MENU TOGGLE =================
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.toggle("hide");
  }
}

// ================= TIME UPDATE =================
function updateTime() {
  const timeEl = document.getElementById("time");
  if (!timeEl) return;

  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();

  m = m < 10 ? "0" + m : m;
  timeEl.innerText = `${h}:${m}`;
}

setInterval(updateTime, 1000);
updateTime();

// ================= THEME TOGGLE =================
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

// ================= ACCOUNT CLICK =================
const accountBtn = document.getElementById("accountBtn");

if (accountBtn) {
  accountBtn.addEventListener("click", () => {
    alert("Account section clicked!\n(You can link this to profile/login page)");
    // Example redirect later:
    // window.location.href = "account.html";
  });
}

// ================= PROGRESS BAR ANIMATION =================
const progress = document.querySelector(".progress-fill");

if (progress) {
  let width = 35;
  setInterval(() => {
    width = (width + 1) % 100;
    progress.style.width = width + "%";
  }, 1000);
}
