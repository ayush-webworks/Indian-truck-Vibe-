/* ================= HAMBURGER ================= */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {

  nav.classList.toggle("show");

  if (nav.classList.contains("show")) {
    hamburger.textContent = "✕";
  } else {
    hamburger.textContent = "☰";
  }

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("show");

    hamburger.textContent = "☰";

  });

});


/* ================= MUSIC PLAYER ================= */

const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");

const songs = document.querySelectorAll(".song");

let currentSong = 0;


/* LOAD SONG */

function loadSong(index) {

  if (index < 0) {
    index = songs.length - 1;
  }

  if (index >= songs.length) {
    index = 0;
  }

  currentSong = index;

  const song = songs[currentSong];

  const title = song.dataset.song;
  const artistName = song.dataset.artist;
  const file = song.dataset.file;

  songTitle.textContent = title;

  artist.textContent = artistName;

  audioPlayer.src = file;

  songs.forEach(item => {
    item.classList.remove("active");
  });

  song.classList.add("active");

}


/* PLAY */

function playMusic() {

  if (!audioPlayer.src) {
    loadSong(currentSong);
  }

  audioPlayer.play()
    .then(() => {
      playBtn.textContent = "❚❚";
    })
    .catch(() => {
      playBtn.textContent = "▶";
    });

}


/* PAUSE */

function pauseMusic() {

  audioPlayer.pause();

  playBtn.textContent = "▶";

}


/* PLAY BUTTON */

playBtn.addEventListener("click", () => {

  if (audioPlayer.paused) {
    playMusic();
  } else {
    pauseMusic();
  }

});


/* NEXT */

nextBtn.addEventListener("click", () => {

  loadSong(currentSong + 1);

  playMusic();

});


/* PREVIOUS */

prevBtn.addEventListener("click", () => {

  loadSong(currentSong - 1);

  playMusic();

});


/* PLAYLIST CLICK */

songs.forEach((song, index) => {

  song.addEventListener("click", () => {

    loadSong(index);

    playMusic();

  });

});


/* AUTO NEXT */

audioPlayer.addEventListener("ended", () => {

  loadSong(currentSong + 1);

  playMusic();

});


/* AUDIO STATE */

audioPlayer.addEventListener("play", () => {

  playBtn.textContent = "❚❚";

});

audioPlayer.addEventListener("pause", () => {

  playBtn.textContent = "▶";

});


/* FIRST SONG */

loadSong(0);


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
  ".truck-card, .category, .cassette-player, .dhaba-image, .dhaba-content, .about-inner"
);

const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("revealed");

      }

    });

  },
  {
    threshold: 0.15
  }
);


revealElements.forEach(element => {

  element.classList.add("reveal");

  revealObserver.observe(element);

});


/* ================= ACTIVE NAV ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("current");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("current");
    }

  });

});
