// MENU TOGGLE
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("hide");
}

// TIME UPDATE
function updateTime() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  m = m < 10 ? "0" + m : m;
  document.getElementById("time").innerText = `${h}:${m}`;
}
setInterval(updateTime, 1000);
updateTime();

// THEME TOGGLE
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

// ANIMATED PROGRESS BAR
setInterval(() => {
  const progress = document.querySelector('.progress-fill');
  let width = parseInt(progress.style.width || '35');
  width = (width + 1) % 100;
  progress.style.width = width + '%';
}, 1000);
