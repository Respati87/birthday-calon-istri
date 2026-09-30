/* =====================================================
   MUSIC
===================================================== */

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;


/* =====================================================
   MUSIC FUNCTION
===================================================== */

function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "🎵";

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicButton.innerHTML = "🔊";

            })
            .catch(() => {

                alert(
                    "Musik belum bisa diputar. Silakan klik tombol musik lagi."
                );

            });

    }

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function goTo(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });


    const target = document.getElementById(pageId);

    if (target) {

        target.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================================
   OPEN ENVELOPE
===================================================== */

function openEnvelope() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");


    setTimeout(() => {

        goTo("birthday");

        startMusic();

    }, 1300);

}


/* =====================================================
   START MUSIC
===================================================== */

function startMusic() {

    music.play()
        .then(() => {

            musicPlaying = true;

            musicButton.innerHTML = "🔊";

        })
        .catch(() => {

            musicPlaying = false;

            musicButton.innerHTML = "🎵";

        });

}


/* =====================================================
   SURPRISE
===================================================== */

let openedSurprises = [];


function showSurprise(type) {

    const result =
        document.getElementById("surpriseResult");

    let content = "";


    if (type === "memory") {

        content = `
            <div class="surprise-message">

                <h2>📸 One More Memory</h2>

                <br>

                <p>
                    Dari begitu banyak foto yang kita punya,
                    sebenarnya yang paling Mas suka bukan
                    hanya fotonya.
                </p>

                <p>
                    Tetapi semua cerita yang ada di balik
                    setiap foto itu.
                </p>

                <p>
                    Dan semoga kita bisa membuat
                    jauh lebih banyak kenangan lagi.
                    ❤️
                </p>

            </div>
        `;

    }


    if (type === "letter") {

        content = `
            <div class="surprise-message">

                <h2>💌 One More Letter</h2>

                <br>

                <p>
                    Kalau suatu hari nanti calon istriku
                    membaca halaman ini lagi,
                    Mas ingin kamu mengingat satu hal.
                </p>

                <p>
                    Tidak peduli bagaimana keadaan kita,
                    Mas akan selalu bersyukur karena
                    pernah menemukan kamu.
                </p>

                <p>
                    Dan Mas berharap,
                    orang yang sama yang menemani Mas
                    sampai sejauh ini...
                    adalah orang yang juga menemani Mas
                    sampai akhir.
                </p>

            </div>
        `;

    }


    if (type === "wish") {

        content = `
            <div class="surprise-message">

                <h2>✨ Make a Wish</h2>

                <br>

                <p>
                    Sekarang giliran calon istriku.
                </p>

                <p>
                    Tulis satu harapan yang ingin
                    diwujudkan bersama Mas.
                </p>

                <button
                    class="main-button"
                    onclick="goTo('wish')">

                    Tulis Harapanku ✨

                </button>

            </div>
        `;

    }


    if (type === "future") {

        content = `
            <div class="surprise-message">

                <h2>💍 Our Future</h2>

                <br>

                <p>
                    Mas berharap suatu hari nanti
                    kita tidak lagi berbicara tentang
                    LDR.
                </p>

                <p>
                    Kita tidak lagi menghitung
                    jarak dan waktu.
                </p>

                <p>
                    Kita akan bangun di rumah yang sama,
                    pulang ke tempat yang sama,
                    dan menjalani kehidupan
                    sebagai suami dan istri.
                </p>

                <p>
                    Sampai saat itu tiba,
                    mari kita terus berjalan bersama.
                </p>

            </div>
        `;

    }


    result.innerHTML = content;


    if (!openedSurprises.includes(type)) {

        openedSurprises.push(type);

    }


    if (openedSurprises.length >= 3) {

        document
            .getElementById("lastButton")
            .classList.remove("hidden");

    }

}


/* =====================================================
   SAVE WISH
===================================================== */

function saveWish() {

    const input =
        document.getElementById("wishInput");

    const result =
        document.getElementById("wishResult");

    const wish = input.value.trim();


    if (wish === "") {

        result.innerHTML = `
            <p>
                Tulis harapanmu dulu ya, calon istriku ❤️
            </p>
        `;

        return;

    }


    localStorage.setItem(
        "aisyahWish",
        wish
    );


    result.innerHTML = `
        <div class="surprise-message">

            <h2>Harapanmu sudah disimpan ❤️</h2>

            <br>

            <p>
                "${wish}"
            </p>

            <br>

            <small>
                Harapan ini tersimpan di browser
                yang digunakan untuk membuka website ini.
            </small>

        </div>
    `;

}


/* =====================================================
   RESTART
===================================================== */

function restartWebsite() {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });


    document
        .getElementById("opening")
        .classList.add("active");


    const envelope =
        document.querySelector(".envelope");

    envelope.classList.remove("open");


    openedSurprises = [];


    document
        .getElementById("lastButton")
        .classList.add("hidden");

}


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML =
        Math.random() > 0.5
        ? "❤️"
        : "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    document
        .getElementById("hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 8000);

}


setInterval(createHeart, 900);
