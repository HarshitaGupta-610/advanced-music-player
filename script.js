let isPlaying = false;

const songs = [
  { title: "Perfect", artist: "Ed Sheeran", season: "Romantic" },
  { title: "Believer", artist: "Imagine Dragons", season: "Energetic" },
  { title: "Levitating", artist: "Dua Lipa", season: "Party" },
  { title: "Blinding Lights", artist: "The Weeknd", season: "Night" }
];

let currentIndex = 0;

/* TIME */
function updateTime() {
  const timeEl = document.querySelector(".time");
  if (!timeEl) return;

  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  m = m < 10 ? "0" + m : m;

  timeEl.textContent = `${h}:${m} ${ampm}`;
}
setInterval(updateTime, 1000);
updateTime();

/* UPDATE SONG */
function renderSong() {
  document.querySelector(".now-song").textContent = songs[currentIndex].title;
  document.querySelector(".now-artist").textContent = songs[currentIndex].artist;
  document.querySelector(".now-season").textContent = songs[currentIndex].season;
}

function togglePlay(btn) {
  isPlaying = !isPlaying;
  btn.textContent = isPlaying ? "⏸" : "▶";
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  renderSong();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  renderSong();
}

function toggleFavourite(btn) {
  btn.classList.toggle("fav");
}

document.querySelectorAll(".song-card").forEach(card => {
  card.addEventListener("click", () => {
    currentIndex = songs.findIndex(
      s => s.title === card.querySelector("h3").textContent
    );
    renderSong();
  });
});

renderSong();
