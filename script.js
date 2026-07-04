// ====== VARIABLES ======
const card = document.getElementById("card");
const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const hearts = document.getElementById("hearts");

let noCount = 0;
let yesScale = 1;
let noScale = 1;

let selectedDate = "";
let selectedPay = "";
let selectedDay = "";

const messages = [
    "Please jam na 🥲",
    "Hyaa kasto hora 😒",
    "Please please 😭",
    "Ekchoti YES bhana na ❤️"
];

// ====== FLOATING HEARTS ======
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 350);

// ====== MUSIC ======
let playing = false;

musicBtn.onclick = () => {

    if (playing) {
        bgMusic.pause();
        musicBtn.innerHTML = "🎵";
    } else {
        bgMusic.play();
        musicBtn.innerHTML = "⏸";
    }

    playing = !playing;
};

// ====== NO BUTTON ======
noBtn.onclick = () => {

    popup.innerHTML = messages[Math.min(noCount,3)];

    yesScale += 0.4;
    noScale -= 0.15;

    if(noScale < 0.25){
        noScale = 0.25;
    }

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;

    if(noCount >= 3){

        noBtn.disabled = true;
        noBtn.style.opacity = ".4";

        yesBtn.style.position = "fixed";
        yesBtn.style.left = "0";
        yesBtn.style.top = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.fontSize = "60px";
        yesBtn.style.borderRadius = "0";
        yesBtn.style.zIndex = "999";
    }

    noCount++;
};

// ====== YES BUTTON ======
yesBtn.onclick = () => {

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

    card.innerHTML = `
    <h1>Thank you awwww 😭❤️</h1>

    <h2 style="color:white;margin:20px 0;">
    What kind of date?
    </h2>

    <button class="option" onclick="pickDate('Movie 🎬')">🎬 Movie</button>

    <button class="option" onclick="pickDate('Hiking 🏔️')">🏔️ Hiking</button>

    <button class="option" onclick="pickDate('Coffee ☕')">☕ Coffee</button>

    <button class="option" onclick="pickDate('Long Drive 🚗')">🚗 Long Drive</button>
    `;
};
// ==========================
// PART 3B
// ==========================

function pickDate(type){

    selectedDate = type;

    card.innerHTML = `

    <h1>💸 Tw lagxas ki?</h1>

    <button class="option" onclick="payChoice('Timi lagxau 😆')">
    😆 Tw lagxas
    </button>

    <button class="option" onclick="payChoice('Ma lagchu ❤️')">
    ❤️ Ma lagam
    </button>

    `;

}

function payChoice(choice){

    selectedPay = choice;

    card.innerHTML = `

    <h1>📅 Kaile Aam?</h1>

    <input type="date" id="dateInput">

    <br><br>

    <button class="option" onclick="finishDate()">
    Done ❤️
    </button>

    `;

}

function finishDate(){

    const date = document.getElementById("dateInput").value;

    if(date==""){

        alert("Please choose a date ❤️");
        return;

    }

    selectedDay = date;

    confetti({
        particleCount:350,
        spread:220,
        origin:{y:.6}
    });

    card.innerHTML = `

    <h1>🎉 La Done ❤️</h1>

    <div style="
        color:white;
        font-size:20px;
        line-height:2;
        margin-top:20px;
    ">

        ❤️ <b>Date Type:</b><br>
        ${selectedDate}

        <br><br>

        💸 <b>Payment:</b><br>
        ${selectedPay}

        <br><br>

        📅 <b>Date:</b><br>
        ${selectedDay}

    </div>

    <br>

    <h2 style="color:white;">
    Can't wait 🥹❤️
    </h2>

    <br>

    <button class="option" onclick="location.reload()">
    🔄 Start Again
    </button>

    `;

}
// ==========================
// PART 3C (Final)
// ==========================

// Extra floating hearts
setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (18 + Math.random()*28) + "px";
    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

},600);

// Popup animation
const popupStyle = [
    "Please jam na 🥺❤️",
    "Hyaa... kasto hora 😒",
    "Please please 😭",
    "Last chance 😭❤️"
];

// Music autoplay after first touch
document.body.addEventListener("click", () => {
    if(!playing){
        bgMusic.play().catch(()=>{});
        playing=true;
        musicBtn.innerHTML="⏸";
    }
},{once:true});

// Sparkle effect
setInterval(()=>{

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.fontSize=(10+Math.random()*18)+"px";
    s.style.pointerEvents="none";
    s.style.opacity="1";
    s.style.transition="2s";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.style.opacity="0";
        s.style.transform="translateY(-40px)";
    },50);

    setTimeout(()=>{
        s.remove();
    },2200);

},700);

// Welcome animation
window.onload=()=>{

    card.animate([
        {
            transform:"scale(.8)",
            opacity:0
        },
        {
            transform:"scale(1)",
            opacity:1
        }
    ],{
        duration:700,
        fill:"forwards"
    });

};
