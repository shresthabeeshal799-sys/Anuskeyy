// ==========================
// PART 3B (UPDATED: Signature instead of payment choice)
// ==========================

function pickDate(type){
    selectedDate = type;

    card.innerHTML = `
    <h1>✍️ Signature confirm gar</h1>

    <p style="color:white;">Draw your signature below to confirm ❤️</p>

    <canvas id="signaturePad" width="300" height="150"
        style="background:white;border-radius:10px;"></canvas>

    <br><br>

    <button class="option" onclick="clearSignature()">Clear</button>
    <button class="option" onclick="finishSignature()">Confirm ❤️</button>
    `;
    
    initSignaturePad();
}

// ===== Signature Pad =====
let canvas, ctx, drawing = false;

function initSignaturePad(){
    canvas = document.getElementById("signaturePad");
    ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    canvas.onmousedown = startDraw;
    canvas.onmouseup = stopDraw;
    canvas.onmousemove = draw;
}

function startDraw(e){
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e){
    if(!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

function stopDraw(){
    drawing = false;
}

function clearSignature(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function finishSignature(){

    confetti({
        particleCount:300,
        spread:200,
        origin:{y:0.6}
    });

    card.innerHTML = `
    <h1>📅 Kaile Aam?</h1>

    <input type="date" id="dateInput">

    <br><br>

    <button class="option" onclick="finishDate()">
    Done ❤️
    </button>
    `;
}

// ==========================
// FINAL STEP
// ==========================

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

    <div style="color:white;font-size:20px;line-height:2;margin-top:20px;">

        ❤️ <b>Date Type:</b><br>
        ${selectedDate}

        <br><br>

        ✍️ <b>Signature:</b><br>
        ✔ Confirmed

        <br><br>

        📅 <b>Date:</b><br>
        ${selectedDay}

    </div>

    <br>

    <h2 style="color:white;">Can't wait 🥹❤️</h2>

    <br>

    <button class="option" onclick="location.reload()">
    🔄 Start Again
    </button>
    `;
}
