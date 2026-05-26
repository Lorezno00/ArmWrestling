/* ── Configurazione ── */
const START_FRAME = 74;     
const END_FRAME = 91;       
const FPS = 8;             
const IMG_FOLDER = "assets/";
const IMG_EXT = ".jpg";     

/* ── Dizionario dei Testi Personalizzati ── */
/* Scrivi qui a mano il testo per ogni numero di foto. 
   Ricordati di mettere la virgola alla fine di ogni riga! */
const TESTI_FOTO = {
    74: "Primo piano del guantone",
    75: "L'avversario si prepara alla guardia",
    76: "Movimento laterale sul ring",
    77: "Schivata veloce del colpo",
    78: "Testo personalizzato per la foto 78",
    79: "Testo personalizzato per la foto 79",
    80: "Testo personalizzato per la foto 80",
    81: "Testo personalizzato per la foto 81",
    82: "Testo personalizzato per la foto 82",
    83: "Testo personalizzato per la foto 83",
    84: "Testo personalizzato per la foto 84",
    85: "Testo personalizzato per la foto 85",
    86: "Testo personalizzato per la foto 86",
    87: "Testo personalizzato per la foto 87",
    88: "Testo personalizzato per la foto 88",
    89: "Testo personalizzato per la foto 89",
    90: "Testo personalizzato per la foto 90",
    91: "Fine della sequenza dell'incontro"
};

/* ── Stato dell'applicazione ── */
let currentFrame = START_FRAME; 
let isPausedBySpace = false; 
let interval = null;

/* ── Riferimenti agli elementi HTML ── */
const img = document.getElementById("frame");
const textEl = document.getElementById("frame-text"); 

/* ── Funzioni Logiche ── */

function showFrame(n) {
    // 1. Aggiorna l'immagine normalmente
    img.src = IMG_FOLDER + n + IMG_EXT; 
    
    // 2. Recupera il testo personalizzato dal dizionario usando il numero corrente.
    // Se ti dimentichi di scrivere una foto, mostrerà come "salvagente" il nome del file.
    textEl.textContent = TESTI_FOTO[n] || (n + IMG_EXT); 
}

function nextFrame() {
    currentFrame = currentFrame < END_FRAME ? currentFrame + 1 : START_FRAME;
    showFrame(currentFrame);
}

function prevFrame() {
    currentFrame = currentFrame > START_FRAME ? currentFrame - 1 : END_FRAME;
    showFrame(currentFrame);
}

function play() {
    if (interval) clearInterval(interval); 
    interval = setInterval(nextFrame, 1000 / FPS);
}

function pause() {
    clearInterval(interval);
    interval = null;
}

/* ── Gestione Tastiera (Unificata) ── */

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        e.preventDefault(); 
        if (!isPausedBySpace) {
            isPausedBySpace = true;
            pause();
        }
    }

    if (isPausedBySpace) {
        if (e.code === "ArrowRight" || e.code === "ArrowUp") {
            e.preventDefault();
            nextFrame();
        }
        if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
            e.preventDefault();
            prevFrame();
        }
    }
});

document.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
        e.preventDefault();
        isPausedBySpace = false;
        play(); 
    }
});

/* ── Avvio Automatico ── */
showFrame(currentFrame);
play();