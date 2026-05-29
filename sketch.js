const START_FRAME = 1;     
const END_FRAME = 108;       
const FPS = 8;             
const IMG_FOLDER = "assets/";
const IMG_EXT = ".jpg";     

const TESTI_FOTO = {  
    1: "08/04/1983, NANCY REAGAN, WASHINGTON, USA",
    2: "10/01/1983, ED KOCH, NEW YORK, USA",
    3: "12/20/1983, WALT MICHAELS, EAST RUTHERFORD, USA",
    4: "03/29/1987, HULK HOGAN, MICHIGAN, USA",
    5: "11/03/1987, RONALD REAGAN, WASHINGTON, USA",
    6: "12/01/1987, SAMUEL IRVING NEWHOUSE, NEW YORK, USA",
    7: "07/26/1988, MIKE TYSON, NEW YORK, USA",
    8: "07/26/1988, FRED TRUMP, NEW YORK, USA",
    9: "04/01/1990, CINDY ADAMS, ATLANTIC CITY, USA",
    10: "07/20/1991, MONICA SELES, NEW YORK, USA",
    11: "11/05/1991, DON KING, NEW YORK, USA",
    12: "01/28/1996, ALICIA MACHADO, NEW YORK, USA",
    13: "08/01/1996, IVANKA TRUMP, NEW YORK, USA",
    14: "09/30/1997, PUFF DADDY, NEW YORK, USA",
    15: "10/17/1997, STONE PHILIPPS, GREENWICH, USA",
    16: "06/16/2000, BILL CLINTON, NEW YORK, USA",
    17: "02/11/2003, JA RULE, NEW YORK, USA",
    18: "04/07/2004, PAUL TEUTUL, NEW YORK, USA",
    19: "03/09/2011, SNOOP DOGG, NEW YORK, USA",
    20: "07/06/2011, RICARDO MARTINELLI, PANAMA CITY, PANAMA",
    21: "10/09/2016, HILLARY CLINTON, ST. LOUIS, USA",
    22: "11/10/2016, BARACK OBAMA, WASHINGTON, USA",
    23: "12/14/2016, PETER THIEL, NEW YORK, USA",
    24: "01/20/2017, BARACK OBAMA, WASHINGTON, USA",
    25: "01/27/2017, THERESA MAY, WASHINGTON, USA",
    26: "02/13/2017, JUSTIN TRUDEAU, WASHINGTON, USA",
    27: "02/20/2017, H.R. MCMASTER, MAR-A-LAGO, USA",
    28: "05/24/2017, POPE FRANCIS, VATICAN, ITALY",
    29: "05/25/2017, EMMANUEL MACRON, BRUSSELS, BELGIUM",
    30: "10/23/2017, LEE HSIEN LOONG, WASHINGTON, USA",
    31: "11/07/2017, MOON JAE-IN, SEOUL, SOUTH KOREA",
    32: "11/09/2017, XI JIN PING, BEIJING, CHINA",
    33: "11/13/2017, RODRIGO DUTERTE, MANILA, PHILIPPINES",
    34: "02/23/2018, MALCOLM TURNBULL, WASHINGTON, USA",
    35: "02/26/2018, RICK SCOTT, WASHINGTON, USA",
    36: "03/20/2018, MOHAMMED BIN SALMAN, WASHINGTON, USA",
    37: "03/22/2018, CHARLIE KIRK, WASHINGTON, USA",
    38: "03/27/2018, ANGELA MERKEL, WASHINGTON, USA",
    39: "06/12/2018, KIM JONG UN, SINGAPORE, SINGAPORE",
    40: "07/16/2018, VLADIMIR PUTIN, HELSINKI, FINLAND",
    41: "10/11/2018, KANYE WEST, WASHINGTON, USA",
    42: "02/27/2019, KIM JONG UN, HANOI, VIETNAM",
    43: "05/13/2019, VIKTOR ORBAN, WASHINGTON, USA",
    44: "06/03/2019, QUEEN ELIZABETH II, LONDON, UK",
    45: "06/28/2019, XI JIN PING, OSAKA, JAPAN",
    46: "06/28/2019, VLADIMIR PUTIN, OSAKA, JAPAN",
    47: "06/28/2019, SHINZO ABE, OSAKA, JAPAN",
    48: "06/28/2019, JAIR BOLSONARO, OSAKA, JAPAN",
    49: "08/26/2019, EMMANUEL MACRON, BIARRITZ, FRANCE",
    50: "08/26/2019, NARENDRA MODI, BIARRITZ, FRANCE",
    51: "09/09/2019, GIANNI INFANTINO, WASHINGTON, USA",
    52: "01/28/2020, BENJAMIN NETANYAHU, WASHINGTON, USA",
    53: "02/25/2020, NARENDRA MODI, NEW DELHI, INDIA",
    54: "03/03/2020, MARY ANN BORGESON, WASHINGTON, USA",
    55: "04/23/2022, JD VANCE, DELAWARE, USA",
    56: "07/29/2022, PHIL MICKELSON, BEDMINSTER, USA",
    57: "08/23/2024, ROBERT F KENNEDY JR, GLENDALE, USA",
    58: "09/11/2024, KAMALA HARRIS, NEW YORK, USA",
    59: "09/27/2024, VOLODYMYR ZELENSKY, NEW YORK, USA",
    60: "10/05/2024, ELON MUSK, BUTLER, USA",
    61: "11/13/2024, JOE BIDEN, WASHINGTON, USA",
    62: "12/07/2024, VOLODYMYR ZELENSKY, PARIS, FRANCE",
    63: "12/07/2024, EMMANUEL MACRON, PARIS, FRANCE",
    64: "12/07/2024, PRINCE WILLIAM, PARIS, FRANCE",
    65: "01/09/2025, MIKE PENCE, WASHINGTON, USA",
    66: "02/04/2025, BENJAMIN NETANYAHU, WASHINGTON, USA",
    67: "02/22/2025, JAVIER MILEI, WASHINGTON, USA",
    68: "02/24/2025, EMMANUEL MACRON, WASHINGTON, USA",
    69: "02/27/2025, KEIR STARMER, WASHINGTON, USA",
    70: "03/22/2025, ELON MUSK, PHILADELPHIA, USA",
    71: "03/24/2025, ARCHBISHOP ELPIDOPHOROS, WASHINGTON, USA",
    72: "04/07/2025, BENJAMIN NETANYAHU, WASHINGTON, USA",
    73: "04/14/2025, NAYIB BUKELE, WASHINGTON, USA",
    74: "04/26/2025, KING FELIPE VI, VATICAN, ITALY",
    75: "05/08/2025, MELANIA TRUMP, WASHINGTON, USA",
    76: "05/30/2025, ELON MUSK, WASHINGTON, USA",
    77: "06/05/2025, FRIEDRICH MERTZ, WASHINGTON, USA",
    78: "07/14/2025, MARK REGEL, WASHINGTON, USA",
    79: "07/15/2025, DAVE MCCORMICK, PITTSBURGH, USA",
    80: "07/27/2025, URSULA VON DER LEYEN, TURNBERRY, UK",
    81: "08/08/2025, ILHAM ALIYEV, WASHINGTON, USA",
    82: "08/15/2025, VLADIMIR PUTIN, ANCHORAGE, USA",
    83: "08/18/2025, VOLODYMYR ZELENSKY, WASHINGTON, USA",
    84: "09/11/2025, PETE HEGSETH, WASHINGTON, USA",
    85: "09/18/2025, KING CHARLES III, WINDSOR, UK",
    86: "09/21/2025, ELON MUSK, GLENDALE, USA",
    87: "10/11/2025, KAI TRUMP, BEDMINSTER, USA",
    88: "10/13/2025, GIORGIA MELONI, SHARM EL-SHEIKH, EGYPT",
    89: "10/13/2025, EMMANUEL MACRON, SHARM EL-SHEIKH, EGYPT",
    90: "10/13/2025, ABDEL FATTAH EL-SISI, SHARM EL-SHEIKH, EGYPT",
    91: "10/13/2025, PEDRO SANCHEZ, SHARM EL-SHEIKH, EGYPT",
    92: "10/13/2025, TAYYP ERDOGAN, SHARM EL-SHEIKH, EGYPT",
    93: "10/28/2025, SANAE TAKAICHI, TOKYO, JAPAN",
    94: "10/30/2025, XI JIN PING, BUSAN, SOUTH KOREA",
    95: "11/10/2025, ERIKA KIRK, WASHINGTON, USA",
    96: "11/10/2025, SERGIO GORE, WASHINGTON, USA",
    97: "11/10/2025, AHMED AL-SHARAA, WASHINGTON, USA",
    98: "11/19/2025, CRISTIANO RONALDO, WASHINGTON, USA",
    99: "12/12/2025, TOM EMMER, WASHINGTON, USA",
    100: "12/12/2025, ELISE STEFANIK, WASHINGTON, USA",
    101: "12/29/2025, BENJAMIN NETANYAHU, MAR-A-LAGO, USA",
    102: "01/16/2026, MEG WEINBERGER, MAR-A-LAGO, USA",
    103: "01/28/2026, NICKI MINAJ, WASHINGTON, USA",
    104: "03/11/2026, JAKE PAUL, HEBRON, USA",
    105: "03/17/2026, MICHEAL MARTIN, WASHINGTON, USA",
    106: "03/18/2026, MIKE JOHNSON, DOVER, USA",
    107: "04/13/2026, SHARON SIMMONS, WASHINGTON, USA",
    108: "05/14/2026, XI JIN PING, BEIJING, CHINA"
};

/* ── Stato dell'applicazione ── */
let currentFrame = START_FRAME; 
let isPausedBySpace = false; 
let interval = null;
let loadedImagesCount = 0;
const totalImages = END_FRAME - START_FRAME + 1;

/* ── Archivio di Persistenza della RAM ── */
const immaginiCaricate = {}; 

/* ── Riferimenti HTML ── */
const viewerEl = document.querySelector(".viewer"); 
const textEl = document.getElementById("frame-text");

/* ── Funzioni Logiche ── */
function showFrame(n) {
    // Sostituzione dell'elemento DOM invece del src per azzerare la decodifica istantanea
    viewerEl.innerHTML = "";
    if (immaginiCaricate[n]) {
        viewerEl.appendChild(immaginiCaricate[n]);
    }

    const stringaCompleta = TESTI_FOTO[n];
    if (stringaCompleta) {
        textEl.textContent = stringaCompleta;
    } else {
        textEl.textContent = n + IMG_EXT;
    }
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

/* ── Gestione Tastiera ── */
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

/* ── Sistema di Precaricamento Cache Reale ── */
function preloadAllImages() {
    for (let i = START_FRAME; i <= END_FRAME; i++) {
        const imgCache = new Image();
        imgCache.id = "frame"; // Preserva selettore CSS
        imgCache.src = IMG_FOLDER + i + IMG_EXT;
        
        // Blocca l'oggetto in un archivio persistente globale per ingannare il Garbage Collector
        immaginiCaricate[i] = imgCache;
        
        imgCache.onload = () => handleImageLoad();
        imgCache.onerror = () => handleImageLoad(); 
    }
}

function handleImageLoad() {
    loadedImagesCount++;
    if (loadedImagesCount === totalImages) {
        startApplication();
    }
}

function startApplication() {
    showFrame(currentFrame);
    play(); 
}

/* ── Inizializzazione ── */
preloadAllImages();