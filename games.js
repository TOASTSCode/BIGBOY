const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  renderGames();
});
const games = [
{
    date: "2026-09-05",
    name: "Holder Of Place",
    file: "HolderOfPlace/index.html",
    desc: "A Personal FAVORITE",
  },
  {
    date: "2026-09-08",
    name: "ConSoul",
    file: "ConSoul/index.html",
    desc: "Delete her Please Delete HER",
  },
  {
    date: "2026-09-08",
    name: "AutoNecrochess",
    file: "NecroChess/index.html", 
    desc: "No Clue. Chess.. Auto.",
  },
  {
    date: "2026-09-08",
    name: "Solve or BLOW",
    file: "Solvethebomb/index.html", 
    desc: "BOOM",
  },
  {
    date: "2026-09-08",
    name: "Cafe (Request)",
    file: "CAfe/Webgl/index.html", 
    desc: "DONT ASK THIS WAS A REQUEST",
  },
   {
    date: "2026-09-17",
    name: "EGG",
    file: "Egg/index.html", 
    desc: "Thats right.. Its back",
  },
    {
    date: "2026-09-10",
    name: "Lightners Live Plus",
    file: "LightnersPlus/index.html", 
    desc: "Deltarune Minigame Updated",
  },
  {
    date: "2026-09-10",
    name: "TinyTowers",
    file: "TT/index.html", 
    desc: "Tiny Tower Defense",
  },
    {
    date: "2026-09-10",
    name: "Super Mario 127",
    file: "SM127/index.html", 
    desc: "Super Mario 64 + Super Mario 63 = Super Mario 127",
  },  {
    date: "2026-09-05",
    name: "COBB CAN MOVE",
    file: "COBBCANMIVE/index.html",
    desc: "Harder and harder it gets..",
  },
  {
    date: "2026-09-05",
    name: "My Keyboard is full of ANTS",
    file: "aNTS/index.html",
    desc: "Typing incremental",
  },
   {
    date: "2026-09-05",
    name: "The Backrooms",
    file: "Backrooms/index.html",
    desc: "It seems you've fallen",
  },
     {
    date: "2026-09-05",
    name: "Psychofind: Fight anomalies",
    file: "Psychofind/index.html",
    desc: "Requested game, Fight anomalies.",
  },
];

const echoMessages = [
  "You came back.",
  "That changed something.",
  "You stayed longer than most.",
  "You didn’t hesitate that time.",
  "Something felt different, didn’t it?",
  "You made a choice.",
  "You’re starting to understand it.",
  "That path doesn’t always happen.",
  "You noticed that too.",
  "Interesting.",
  "You can go again.",
  "Or you can stop here.",
  "You are leaving traces.",
  "The system noticed.",
  "That wasn’t random.",
  "That wasn’t how it happened last time.",
  "Something felt off. You noticed it too.",
  "The outcome shifted slightly.",
  "That version of events… interesting.",
  "You weren’t supposed to see that part.",
  "That path doesn’t usually happen.",
  "It adjusted.",
  "That went… surprisingly well.",
  "You absolutely meant to do that.",
  "No one saw that. You're fine.",
  "10/10 strategy. No notes.",
  "You pressed buttons. Things happened.",
  "That felt illegal somehow.",
  "You can’t prove that wasn’t skill.",
  "That went exactly as planned. Probably.",
  "You survived. Legally questionable, but still.",
  "We’re not going to talk about that run.",
  "You clicked things. Bold strategy.",
  "That felt like it worked. It didn’t.",
  "You definitely did something.",
  "I’m choosing to believe that was intentional.",
  "You almost had it. Or did you?",
  "That was… a series of decisions.",
  "We learned nothing. Excellent.",
  "You pressed the right buttons. Eventually.",
  "I saw that. I won’t tell anyone.",
  "That outcome felt personal.",
  "You made chaos look like a plan.",
  "We’ll call that a success and move on.",
  "Achievement unlocked: Something happened.",
  "The universe allowed that. Barely.",
  "That felt illegal in at least three ways.",
  "You have been promoted to ‘somewhat capable.’",
  "Error: skill detected (inconsistent).",
  "You did your best. It was… something.",
  "Congratulations on existing through that.",
  "That run had personality.",
  "You were there. That counts.",
  "We’ll pretend that was clean.",
];
const quickExitMessages = [
  "Not that one? Okay.",
  "That was fast.",
  "You didn’t even warm up.",
  "Changed your mind already?",
  "We’re moving on then.",
  "That didn’t last long.",
  "Commitment issues?",
  "You gave that your full attention. Impressive.",
  "Speedrun… quitting.",
  "Bold of you to call that a try.",
  "You were in there for a moment.",
  "That barely counted.",
  "We’ll pretend that was intentional.",
  "You blinked and it was over.",
  "That didn’t hold your interest, clearly.",
  "Quick decision. I respect it.",
  "You sampled it. Generously.",
  "Not your thing? Fair enough.",
  "That was more of a visit than a play.",
  "You exited with confidence.",
  "Minimal effort. Maximum clarity.",
  "You made your point quickly.",
  "That was efficient, at least.",
  "We’ll mark that as ‘seen.’",
  "That experiment concluded rapidly.",
  "You lasted exactly as long as expected.",
  "That was… brief.",
  "No attachment. Clean exit.",
  "You dipped instantly.",
  "That didn’t resonate, I assume.",
  "You tried. Technically.",
  "That was more of a glance.",
  "You explored the exit button thoroughly.",
  "We call that a tactical retreat.",
  "You evaluated it. Quickly.",
  "Short and decisive.",
  "You gave it a chance. A small one.",
  "That was almost immediate.",
  "You’re very decisive today.",
  "We move on.",

  "Err̴or: S̶tate unsta̸ble.",
  "Error: Rea̴li̶ty mismatch.",
  "E̷r̵r̶o̴r̷: Outc̸ome shiftin̵g.",
  "Error: Syst— ...resume.",
  "Error: That wasn’t there before.",
  "Err— wait.",
  "Error: Something moved.",
  "Error: That path changed.",
  "Error: Desync detected.",
  "Error: Rewriting...",
];
// =======================
// SORTING SYSTEM
// =======================
function sortGames(games, type) {
  let sorted = [...games];

  if (type === "newest") {
    sorted.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  }

  if (type === "az") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (type === "za") {
    sorted.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sorted;
}
function renderGames(sortType = "newest") {
  const container = document.getElementById("gamesContainer");
  container.innerHTML = "";

  const search = (searchBar?.value || "").toLowerCase();

  let gameList = games.filter(
    (game) =>
      (game.name || "").toLowerCase().includes(search) ||
      (game.desc || "").toLowerCase().includes(search)
  );

  // Rare hidden game 👁️
  if (Math.random() < 0.05) {
    gameList.push({
      date: "????-??-??",
      name: "???",
      file: "games/hidden.html",
      desc: "You weren’t supposed to find this.",
    });
  }

  const sorted = sortGames(gameList, sortType);

  sorted.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <h3>${game.name}</h3>
      <p>${game.desc}</p>

      <div class="launch-buttons">
        <button class="launch-site">Play here</button>
        <button class="launch-blank">about:blank</button>
      </div>
    `;

    card.querySelector(".launch-site").onclick = (e) => {
      e.stopPropagation();
      openGame(game.file);
    };

    card.querySelector(".launch-blank").onclick = (e) => {
      e.stopPropagation();
      openGameBlank(game.file);
    };

    container.appendChild(card);
  });
}
// =======================
// DROPDOWN HOOK
// =======================
const select = document.getElementById("sortSelect");

select.addEventListener("change", () => {
  renderGames(select.value);
});

// =======================
// INITIAL LOAD
// =======================
renderGames("newest");

// =======================
// GAME OPEN / CLOSE
// =======================
let gameStartTime = 0;

// PLAY INSIDE WEBSITE
function openGame(path) {
  const overlay = document.getElementById("gameOverlay");
  const frame = document.getElementById("gameFrame");

  frame.src = path;
  overlay.classList.remove("hidden");

  gameStartTime = Date.now();
}

// CLOSE WEBSITE PLAYER
function closeGame() {
  const overlay = document.getElementById("gameOverlay");
  const frame = document.getElementById("gameFrame");

  frame.src = "";
  overlay.classList.add("hidden");
}

// OPEN IN ABOUT:BLANK
function openGameBlank(path) {
  const win = window.open("about:blank", "_blank");

  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Google Docs</title>

      <style>
        html, body {
          margin: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: black;
        }

        iframe {
          width: 100vw;
          height: 100vh;
          border: none;
        }
      </style>
    </head>

    <body>
      <iframe src="${path}" allowfullscreen></iframe>
    </body>
    </html>
  `);

  // Google Docs favicon
  const link = win.document.createElement("link");
  link.rel = "icon";
  link.href = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
  win.document.head.appendChild(link);

  win.document.close();

  gameStartTime = Date.now();
}

function closeGame() {
  const overlay = document.getElementById("gameOverlay");
  const frame = document.getElementById("gameFrame");

  overlay.classList.add("hidden");
  frame.src = "";

  const timeSpent = Date.now() - gameStartTime;

  if (timeSpent < 2000) {
    showEchoMessage([
      "Err̴or: S̶tate unsta̸ble.",
      "Error: Rea̴li̶ty mismatch.",
      "E̷r̵r̶o̴r̷: Outc̸ome shiftin̵g.",
      "Error: Syst— ...resume.",
      "Error: That wasn’t there before.",
      "Err— wait.",
      "Error: Something moved.",
      "Error: That path changed.",
      "Error: Desync detected.",
      "Error: Rewriting...",

      "Nope.",
      "That was immediate.",
      "You didn’t even blink.",
      "Instant rejection.",
      "You opened it just to leave?",
      "That lasted… nothing.",
      "Not even a second thought.",
      "Denied.",
      "You said no instantly.",
      "That was a reflex.",
      "You backed out before it began.",
      "Immediate exit detected.",
      "You weren’t feeling that at all.",
      "That was over before it started.",
      "Speedrun: avoidance.",
      "You hovered and left.",
      "That didn’t stand a chance.",
      "You gave it zero time.",
      "You saw enough instantly.",
      "That was decisive.",
      "No hesitation. Just no.",
      "You closed that with confidence.",
      "You trusted your instincts. Brutal.",
      "That didn’t pass the vibe check.",
      "You didn’t even try to pretend.",
      "You were gone instantly.",
      "That was rejected on sight.",
      "You dipped immediately.",
      "You made that decision fast.",
      "That wasn’t even considered.",
      "You skipped the experience entirely.",
      "That was almost impressive.",
      "You gave it absolutely nothing.",
      "You left before it could begin.",
      "That was a hard no.",
      "You didn’t stick around for answers.",
      "You already knew.",
      "That didn’t deserve your time, apparently.",
      "You ended that instantly.",
      "That was… efficient.",
    ]);
  } else if (timeSpent < 5000) {
    showEchoMessage(quickExitMessages);
  } else {
    showEchoMessage();
  }
}
// =======================
// GAME LAUNCH OPTIONS
// =======================

function showLaunchOptions(path) {
  const choice = confirm(
    "Press OK to launch in about:blank\nPress Cancel to launch inside website"
  );

  if (choice) {
    openGameBlank(path);
  } else {
    openGame(path);
  }
}
// =======================
// ECHO SYSTEM
// =======================
function showEchoMessage(customPool = null) {
  const el = document.getElementById("echoMessage");

  const pool = customPool || echoMessages;
  const text = pool[Math.floor(Math.random() * pool.length)];

  el.textContent = "";
  el.style.opacity = 1;

  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 35);
    } else {
      setTimeout(() => {
        el.style.opacity = 0;
      }, 2000);
    }
  }

  type();
}
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
