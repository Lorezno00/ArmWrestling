const START_FRAME = 1;     
const END_FRAME = 108;       
const FPS = 8;             
const IMG_FOLDER = "assets/";
const IMG_EXT = ".jpg";     

const TESTI_FOTO = {  
    1: "08/04/1983 NANCY_REAGAN WASHINGTON USA",
    2: "10/01/1983 ED_KOCH NEW_YORK USA",
    3: "12/20/1983 WALT_MICHAELS EAST_RUTHERFORD USA",
    4: "03/29/1987 HULK_HOGAN MICHIGAN USA",
    5: "11/03/1987 RONALD_REAGAN WASHINGTON USA",
    6: "12/01/1987 SAMUEL_IRVING_NEWHOUSE NEW_YORK USA",
    7: "07/26/1988 MIKE_TYSON NEW_YORK USA",
    8: "07/26/1988 FRED_TRUMP NEW_YORK USA",
    9: "04/01/1990 CINDY_ADAMS ATLANTIC_CITY USA",
    10: "07/20/1991 MONICA_SELES NEW_YORK USA",
    11: "11/05/1991 DON KING NEW_YORK USA",
    12: "01/28/1996 ALICIA_MACHADO NEW_YORK USA",
    13: "08/01/1996 IVANKA_TRUMP NEW_YORK USA",
    14: "09/30/1997 PUFF_DADDY NEW_YORK USA",
    15: "10/17/1997 STONE_PHILIPPS GREENWICH USA",
    16: "06/16/2000 BILL_CLINTON NEW_YORK USA",
    17: "02/11/2003 JA_RULE NEW_YORK USA",
    18: "04/07/2004 PAUL_TEUTUL NEW_YORK USA",
    19: "03/09/2011 SNOOP_DOGG NEW_YORK USA",
    20: "07/06/2011 RICARDO_MARTINELLI PANAMA_CITY PANAMA",
    21: "10/09/2016 HILLARY_CLINTON ST._LOUIS USA",
    22: "11/10/2016 BARACK_OBAMA WASHINGTON USA",
    23: "12/14/2016 PETER_THIEL NEW_YORK USA",
    24: "01/20/2017 BARACK_OBAMA WASHINGTON USA",
    25: "01/27/2017 THERESA_MAY WASHINGTON USA",
    26: "02/13/2017 JUSTIN_TRUDEAU WASHINGTON USA",
    27: "02/20/2017 H.R._MCMASTER MAR-A-LAGO USA",
    28: "05/24/2017 POPE_FRANCIS VATICAN ITALY",
    29: "05/25/2017 EMMANUEL_MACRON BRUSSELS BELGIUM",
    30: "10/23/2017 LEE_HSIEN_LOONG WASHINGTON USA",
    31: "11/07/2017 MOON_JAE-IN SEOUL SOUTH_KOREA",
    32: "11/09/2017 XI_JIN_PING BEIJING CHINA",
    33: "11/13/2017 RODRIGO_DUTERTE MANILA PHILIPPINES",
    34: "02/23/2018 MALCOLM_TURNBULL WASHINGTON USA",
    35: "02/26/2018 RICK_SCOTT WASHINGTON USA",
    36: "03/20/2018 MOHAMMED_BIN_SALMAN WASHINGTON USA",
    37: "03/22/2018 CHARLIE_KIRK WASHINGTON USA",
    38: "03/27/2018 ANGELA_MERKEL WASHINGTON USA",
    39: "06/12/2018 KIM_JONG_UN SINGAPORE SINGAPORE",
    40: "07/16/2018 VLADIMIR_PUTIN HELSINKI FINLAND",
    41: "10/11/2018 KANYE_WEST WASHINGTON USA",
    42: "02/27/2019 KIM_JONG_UN HANOI VIETNAM",
    43: "05/13/2019 VIKTOR_ORBAN WASHINGTON USA",
    44: "06/03/2019 QUEEN_ELIZABETH_II LONDON UK",
    45: "06/28/2019 XI_JIN_PING OSAKA JAPAN",
    46: "06/28/2019 VLADIMIR_PUTIN OSAKA JAPAN",
    47: "06/28/2019 SHINZO_ABE OSAKA JAPAN",
    48: "06/28/2019 JAIR_BOLSONARO OSAKA JAPAN",
    49: "08/26/2019 EMMANUEL_MACRON BIARRITZ FRANCE",
    50: "08/26/2019 NARENDRA_MODI BIARRITZ FRANCE",
    51: "09/09/2019 GIANNI_INFANTINO WASHINGTON USA",
    52: "01/28/2020 BENJAMIN_NETANYAHU WASHINGTON USA",
    53: "02/25/2020 NARENDRA_MODI NEW_DELHI INDIA",
    54: "03/03/2020 MARY_ANN_BORGESON WASHINGTON USA",
    55: "04/23/2022 JD_VANCE DELAWARE USA",
    56: "07/29/2022 PHIL_MICKELSON BEDMINSTER USA",
    57: "08/23/2024 ROBERT_F_KENNEDY_JR GLENDALE USA",
    58: "09/11/2024 KAMALA_HARRIS NEW_YORK USA",
    59: "09/27/2024 VOLODYMYR_ZELENSKY NEW_YORK USA",
    60: "10/05/2024 ELON_MUSK BUTLER USA",
    61: "11/13/2024 JOE_BIDEN WASHINGTON USA",
    62: "12/07/2024 VOLODYMYR_ZELENSKY PARIS FRANCE",
    63: "12/07/2024 EMMANUEL_MACRON PARIS FRANCE",
    64: "12/07/2024 PRINCE_WILLIAM PARIS FRANCE",
    65: "01/09/2025 MIKE_PENCE WASHINGTON USA",
    66: "02/04/2025 BENJAMIN_NETANYAHU WASHINGTON USA",
    67: "02/22/2025 JAVIER_MILEI WASHINGTON USA",
    68: "02/24/2025 EMMANUEL_MACRON WASHINGTON USA",
    69: "02/27/2025 KEIR_STARMER WASHINGTON USA",
    70: "03/22/2025 ELON_MUSK PHILADELPHIA USA",
    71: "03/24/2025 ARCHBISHOP_ELPIDOPHOROS WASHINGTON USA",
    72: "04/07/2025 BENJAMIN_NETANYAHU WASHINGTON USA",
    73: "04/14/2025 NAYIB_BUKELE WASHINGTON USA",
    74: "04/26/2025 KING_FELIPE_VI VATICAN ITALY",
    75: "05/08/2025 MELANIA_TRUMP WASHINGTON USA",
    76: "05/30/2025 ELON_MUSK WASHINGTON USA",
    77: "06/05/2025 FRIEDRICH_MERTZ WASHINGTON USA",
    78: "07/14/2025 MARK_RUTTE WASHINGTON USA",
    79: "07/15/2025 DAVE_MCCORMICK PITTSBURGH USA",
    80: "07/27/2025 URSULA_VON_DER_LEYEN TURNBERRY UK",
    81: "08/08/2025 ILHAM_ALIYEV WASHINGTON USA",
    82: "08/15/2025 VLADIMIR_PUTIN ANCHORAGE USA",
    83: "08/18/2025 VOLODYMYR_ZELENSKY WASHINGTON USA",
    84: "09/11/2025 PETE_HEGSETH WASHINGTON USA",
    85: "09/18/2025 KING_CHARLES_III WINDSOR UK",
    86: "09/21/2025 ELON_MUSK GLENDALE USA",
    87: "10/11/2025 KAI_TRUMP BEDMINSTER USA",
    88: "10/13/2025 GIORGIA_MELONI SHARM_EL-SHEIKH EGYPT",
    89: "10/13/2025 EMMANUEL_MACRON SHARM_EL-SHEIKH EGYPT",
    90: "10/13/2025 ABDEL_FATTAH_EL-SISI SHARM_EL-SHEIKH EGYPT",
    91: "10/13/2025 PEDRO_SANCHEZ SHARM_EL-SHEIKH EGYPT",
    92: "10/13/2025 TAYYP_ERDOGAN SHARM_EL-SHEIKH EGYPT",
    93: "10/28/2025 SANAE_TAKAICHI TOKYO JAPAN",
    94: "10/30/2025 XI_JIN_PING BUSAN SOUTH_KOREA",
    95: "11/10/2025 ERIKA_KIRK WASHINGTON USA",
    96: "11/10/2025 SERGIO_GORE WASHINGTON USA",
    97: "11/10/2025 AHMED_AL-SHARAA WASHINGTON USA",
    98: "11/19/2025 CRISTIANO_RONALDO WASHINGTON USA",
    99: "12/12/2025 TOM_EMMER WASHINGTON USA",
    100: "12/12/2025 ELISE_STEFANIK WASHINGTON USA",
    101: "12/29/2025 BENJAMIN_NETANYAHU MAR-A-LAGO USA",
    102: "01/16/2026 MEG_WEINBERGER MAR-A-LAGO USA",
    103: "01/28/2026 NICKI_MINAJ WASHINGTON USA",
    104: "03/11/2026 JAKE_PAUL HEBRON USA",
    105: "03/17/2026 MICHEAL_MARTIN WASHINGTON USA",
    106: "03/18/2026 MIKE_JOHNSON DOVER USA",
    107: "04/13/2026 SHARON_SIMMONS WASHINGTON USA",
    108: "05/14/2026 XI_JIN_PING BEIJING CHINA"
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