/* Ladigue Island Quest - game.js
   Branching story engine + 15 scenes + 5 endings
*/

"use strict";

/* STORY INFORMATION (15 scenes + 5 endings) */

const STORY = {
  meta: {
    title: "Ladigue Island Quest Seychelles",
    totalScenes: 15
  },

  scenes: {
    s01: {
      title: "The Bottle on Anse Source d’Argent",
      text:
        "On the pale sand of Anse Source d’Argent, you spot a glass bottle shining between smooth granite rocks. Inside is a rolled map and a tiny brass key.",
      choices: [
        { label: "Open the bottle carefully", next: "s02" },
        { label: "Ignore it and keep walking", next: "s03" },
        { label: "Pocket it and head back toward the village", next: "s04" }
      ]
    },

    s02: {
      title: "A Map with a Message",
      text:
        "The map shows La Digue with a marked trail. A note reads: “Your path reveals your purpose.” The key feels warm in your hand.",
      choices: [
        { label: "Follow the map into the shaded trail", next: "s05" },
        { label: "Go to the cliffs marked with an X", next: "s06" }
      ]
    },

    s03: {
      title: "A Sudden Change in Weather",
      text:
        "The sky darkens quickly. The wind rises, and the palms rustle like a warning. Something about the bottle feels unfinished.",
      choices: [
        { label: "Turn back and take the bottle", next: "s02" },
        { label: "Find shelter near the old dock", next: "s07" }
      ]
    },

    s04: {
      title: "Village Whispers",
      text:
        "Near the village, an elder notices the key. “That key belongs to the island’s hidden chamber,” she says quietly. “Use it with respect.”",
      choices: [
        { label: "Ask what the hidden chamber is", next: "s08" },
        { label: "Thank her and leave before more attention", next: "s07" }
      ]
    },

    s05: {
      title: "The Trail Through Takamaka Shade",
      text:
        "The trail narrows under takamaka trees. You reach a fork: one path is bright with birdsong, the other is silent and still.",
      choices: [
        { label: "Take the bright path", next: "s09" },
        { label: "Take the silent path", next: "s10" }
      ]
    },

    s06: {
      title: "Cliffs and the Rusted Hatch",
      text:
        "You arrive at a rocky cliff. Waves crash below. You find an X carved into stone beside a rusted hatch with a keyhole that matches your brass key.",
      choices: [
        { label: "Use the key on the hatch", next: "s11" },
        { label: "Step back and check the area first", next: "s12" }
      ]
    },

    s07: {
      title: "The Old Dock",
      text:
        "The dock creaks under your feet. A small boat is tied loosely. Far ahead, you notice a faint blinking light near the waterline.",
      choices: [
        { label: "Untie the boat and row toward the blinking light", next: "s13" },
        { label: "Stay on land and follow the shoreline", next: "s12" }
      ]
    },

    s08: {
      title: "The Elder’s Warning",
      text:
        "She explains that the chamber tests people: courage, honesty, and restraint. “The island gives back what you bring,” she says. “Not everyone leaves the same.”",
      choices: [
        { label: "Promise to respect the island and take the map", next: "s02", effect: { achievement: "Respectful Listener" } },
        { label: "Laugh it off and rush out anyway", next: "s07" }
      ]
    },

    s09: {
      title: "The Birdsong Clearing",
      text:
        "In a sunlit clearing, stones form a circle. In the center sits a bowl with fresh water—strangely untouched by leaves or dust.",
      choices: [
        { label: "Drink the water", next: "s14" },
        { label: "Leave it untouched and move on", next: "s10", effect: { achievement: "Self-Control" } }
      ]
    },

    s10: {
      title: "The Silent Path and the Bridge",
      text:
        "The jungle becomes still. A rope bridge hangs over a fast river. A sign reads: “Only the steady cross.”",
      choices: [
        { label: "Cross slowly, focusing on each step", next: "s15", effect: { achievement: "Steady Steps" } },
        { label: "Run across quickly before you lose nerve", next: "e02" }
      ]
    },

    s11: {
      title: "Stairs into Cool Air",
      text:
        "The key turns with a click. The hatch opens to a spiral staircase descending into cool darkness. A distant hum sounds like a heartbeat.",
      choices: [
        { label: "Go down the staircase", next: "s14" },
        { label: "Close it and walk away", next: "e04" }
      ]
    },

    s12: {
      title: "Footprints and a Spinning Compass",
      text:
        "You find footprints that appear and fade with the tide. A small compass lies half-buried, its needle spinning as if pulled by something unseen.",
      choices: [
        { label: "Take the compass and follow its pull", next: "s06", effect: { achievement: "Curious Explorer" } },
        { label: "Leave it and trust your own direction", next: "s05" }
      ]
    },

    s13: {
      title: "The Floating Buoy",
      text:
        "You row closer and discover a buoy with a waterproof box. Inside is a lantern, matches, and a note: “Light shows truth.”",
      choices: [
        { label: "Light the lantern and head toward the cliffs", next: "s06", effect: { achievement: "Truth Seeker" } },
        { label: "Keep the supplies and return to shore", next: "s07" }
      ]
    },

    s14: {
      title: "The Chamber of Echoes",
      text:
        "You enter a stone chamber with symbols carved into the walls. A small mirror rests on a pedestal. When you look into it, you see your choices reflected back at you.",
      choices: [
        { label: "Tell the truth about why you came", next: "e01" },
        { label: "Claim you deserve whatever treasure exists", next: "e03" },
        { label: "Ask the island for guidance, not reward", next: "e05" }
      ]
    },

    s15: {
      title: "Across the River",
      text:
        "You cross safely. On the far side, a carved stone door stands before you, with a keyhole shaped exactly like your brass key.",
      choices: [
        { label: "Use the key and enter", next: "s14" },
        { label: "Turn back. You’ve proven enough to yourself.", next: "e04" }
      ]
    }
  },

  endings: {
    e01: {
      title: "Ending 1: The Honest Return",
      text:
        "You speak honestly. The chamber warms, and a hidden drawer opens with a simple gift: a journal labeled “New Beginnings.” You leave La Digue feeling lighter than before.",
      badge: "Honest Heart"
    },
    e02: {
      title: "Ending 2: The Fall of Hurry",
      text:
        "You sprint across the bridge. The ropes jerk loose and you scramble back, shaken but safe. The island taught you something important: courage is not speed.",
      badge: "Lesson Learned"
    },
    e03: {
      title: "Ending 3: The Weight of Greed",
      text:
        "You demand treasure. The mirror darkens. You leave with pockets full of heavy stones that look like gold—until daylight reveals ordinary rock.",
      badge: "False Gold"
    },
    e04: {
      title: "Ending 4: The Wise Pause",
      text:
        "You choose to walk away. The wind calms as if approving your restraint. Not every mystery needs to be solved. You return to the village with quiet confidence.",
      badge: "Wise Pause"
    },
    e05: {
      title: "Ending 5: The Island’s Blessing",
      text:
        "You ask for guidance. The chamber’s hum becomes gentle. The key dissolves into light, and a safe path appears outside—one that leads you home, even through storm.",
      badge: "Island Blessed"
    }
  }
};

/* THE BASIC STATE + STORAGE */

const STORAGE_KEYS = {
  achievements: "liq_achievements",
  unlockedEndings: "liq_unlockedEndings",
  soundEnabled: "liq_soundEnabled"
};

const state = {
  currentId: "s01",
  soundEnabled: true,
  achievements: new Set(),
  unlockedEndings: new Set(),
  visitedScenes: new Set()
};

function loadStorage() {
  try {
    const achievements = JSON.parse(localStorage.getItem(STORAGE_KEYS.achievements) || "[]");
    const endings = JSON.parse(localStorage.getItem(STORAGE_KEYS.unlockedEndings) || "[]");
    const soundEnabled = JSON.parse(localStorage.getItem(STORAGE_KEYS.soundEnabled) || "true");

    achievements.forEach(a => state.achievements.add(a));
    endings.forEach(e => state.unlockedEndings.add(e));
    state.soundEnabled = Boolean(soundEnabled);
  } catch (error) {
    console.log("Storage load error:", error);
  }
}

function saveStorage() {
  localStorage.setItem(STORAGE_KEYS.achievements, JSON.stringify([...state.achievements]));
  localStorage.setItem(STORAGE_KEYS.unlockedEndings, JSON.stringify([...state.unlockedEndings]));
  localStorage.setItem(STORAGE_KEYS.soundEnabled, JSON.stringify(state.soundEnabled));
}

/* DOCUMENT OBJECT MODEL */

const el = {
  sceneTitle: document.getElementById("sceneTitle"),
  sceneText: document.getElementById("sceneText"),
  choices: document.getElementById("choices"),
  progress: document.getElementById("progress"),

  endingPanel: document.getElementById("endingPanel"),
  endingTitle: document.getElementById("endingTitle"),
  endingText: document.getElementById("endingText"),

  restartBtn: document.getElementById("restartBtn"),
  homeBtn: document.getElementById("homeBtn"),
  soundToggle: document.getElementById("soundToggle"),
  achievementsList: document.getElementById("achievementsList")
};

/* AUDIO */

let clickAudio = null;
let clickAudioReady = false;

const AUDIO_PATHS = [
  "assets/audio/click.mp3",
  "audio/click.mp3",
  "click.mp3"
];

function tryLoadAudio(index) {
  if (index >= AUDIO_PATHS.length) {
    clickAudio = null;
    clickAudioReady = false;
    console.log("No sound file found. Checked:", AUDIO_PATHS);
    return;
  }

  const testAudio = new Audio();
  testAudio.src = AUDIO_PATHS[index];
  testAudio.preload = "auto";

  testAudio.addEventListener("canplaythrough", () => {
    clickAudio = testAudio;
    clickAudio.volume = 1.0;
    clickAudioReady = true;
    console.log("Sound loaded from:", AUDIO_PATHS[index]);
  }, { once: true });

  testAudio.addEventListener("error", () => {
    console.log("Sound not found at:", AUDIO_PATHS[index]);
    tryLoadAudio(index + 1);
  }, { once: true });

  testAudio.load();
}

function setupAudio() {
  tryLoadAudio(0);
}

function playClick() {
  if (!state.soundEnabled) {
    console.log("Sound is turned off.");
    return;
  }

  if (!clickAudio || !clickAudioReady) {
    console.log("Sound file is not ready yet.");
    return;
  }

  try {
    clickAudio.pause();
    clickAudio.currentTime = 0;

    const playPromise = clickAudio.play();

    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Audio play failed:", error);
      });
    }
  } catch (error) {
    console.log("Audio error:", error);
  }
}

/* RENDERING */

function isEnding(id) {
  return id.startsWith("e");
}

function exploredCount() {
  const visited = [...state.visitedScenes].filter(id => id.startsWith("s")).length;
  return Math.max(1, visited);
}

function renderAchievements() {
  if (!el.achievementsList) return;

  const items = [...state.achievements].sort();
  if (items.length === 0) {
    el.achievementsList.innerHTML = `<li class="muted">No achievements yet. Explore to unlock them.</li>`;
    return;
  }

  el.achievementsList.innerHTML = items
    .map(a => `<li>🏝️ ${escapeHtml(a)}</li>`)
    .join("");
}

function renderScene(id) {
  const scene = STORY.scenes[id];
  if (!scene) {
    renderEnding("e04");
    return;
  }

  state.currentId = id;
  state.visitedScenes.add(id);
  saveStorage();

  if (el.endingPanel) el.endingPanel.hidden = true;

  el.sceneTitle.textContent = scene.title;
  el.sceneText.textContent = scene.text;
  el.progress.textContent = `Progress: ${exploredCount()} scene(s) explored`;

  el.choices.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = choice.label;

    btn.addEventListener("click", () => {
      playClick();

      if (choice.effect && choice.effect.achievement) {
        unlockAchievement(choice.effect.achievement);
      }

      goTo(choice.next);
    });

    el.choices.appendChild(btn);
  });

  renderAchievements();
}

function renderEnding(id) {
  const ending = STORY.endings[id];
  if (!ending) return;

  state.currentId = id;
  state.unlockedEndings.add(id);
  saveStorage();

  el.sceneTitle.textContent = ending.title;
  el.sceneText.textContent = ending.text;
  el.progress.textContent = `Ending unlocked: ${ending.badge}`;

  if (el.endingPanel) {
    el.endingPanel.hidden = false;
    if (el.endingTitle) el.endingTitle.textContent = ending.title;
    if (el.endingText) el.endingText.textContent = ending.text;
  }

  el.choices.innerHTML = "";
  renderAchievements();
}

function goTo(nextId) {
  if (isEnding(nextId)) {
    renderEnding(nextId);
  } else {
    renderScene(nextId);
  }
}

/* ACHIEVEMENTS */

function unlockAchievement(name) {
  if (!name) return;
  state.achievements.add(name);
  saveStorage();
}

/* UI EVENTS */

function setupButtons() {
  if (el.restartBtn) {
    el.restartBtn.addEventListener("click", () => {
      playClick();
      state.visitedScenes.clear();
      goTo("s01");
    });
  }

  if (el.homeBtn) {
    el.homeBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (el.soundToggle) {
    el.soundToggle.checked = state.soundEnabled;
    el.soundToggle.addEventListener("change", () => {
      state.soundEnabled = Boolean(el.soundToggle.checked);
      saveStorage();
      console.log("Sound enabled:", state.soundEnabled);
    });
  }
}

/* SECURITY: SIMPLE HTML ESCAPE */

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* INIT */

function init() {
  loadStorage();
  setupAudio();
  setupButtons();
  renderScene(state.currentId);
}

document.addEventListener("DOMContentLoaded", init);