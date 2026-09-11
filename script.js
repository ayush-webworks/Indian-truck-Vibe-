/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* =========================================
   MUSIC PLAYER
========================================= */

const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");
const heroPlay = document.getElementById("heroPlay");

const progress = document.getElementById("progress");

const volume = document.getElementById("volume");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");


/* PLAY / PAUSE */

function toggleMusic() {

    if (audio.paused) {

        audio.play();

        playBtn.innerHTML = "❚❚";
        heroPlay.innerHTML = "❚❚ MUSIC PLAYING";

    } else {

        audio.pause();

        playBtn.innerHTML = "▶";
        heroPlay.innerHTML = "▶ PLAY MUSIC";

    }

}


playBtn.addEventListener("click", toggleMusic);

heroPlay.addEventListener("click", toggleMusic);


/* =========================================
   TIME FORMAT
========================================= */

function formatTime(time) {

    if (isNaN(time)) {
        return "0:00";
    }

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${seconds}`;

}


/* =========================================
   UPDATE PLAYER
========================================= */

audio.addEventListener("loadedmetadata", () => {

    duration.textContent =
        formatTime(audio.duration);

});


audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    const percentage =
        (audio.currentTime / audio.duration) * 100;

    progress.value = percentage;

    currentTime.textContent =
        formatTime(audio.currentTime);

});


/* =========================================
   SEEK
========================================= */

progress.addEventListener("input", () => {

    if (!audio.duration) return;

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});


/* =========================================
   VOLUME
========================================= */

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});


audio.volume = 0.8;


/* =========================================
   MUSIC END
========================================= */

audio.addEventListener("ended", () => {

    playBtn.innerHTML = "▶";

    heroPlay.innerHTML = "▶ PLAY MUSIC";

    progress.value = 0;

});


/* =========================================
   KEYBOARD SHORTCUT
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {

        event.preventDefault();

        toggleMusic();

    }

});

const music = document.getElementById("truckMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {
        music.play();

        musicBtn.innerHTML = "⏸ PAUSE MUSIC";
        musicBtn.classList.add("playing");

    } else {
        music.pause();

        musicBtn.innerHTML = "🎵 PLAY MUSIC";
        musicBtn.classList.remove("playing");
    }

});
