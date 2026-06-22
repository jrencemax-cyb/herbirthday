// Floating particles
const particles = document.getElementById('particles');
for(let i=0; i<30; i++){
  let p = document.createElement('div');
  p.style.position = 'absolute';
  p.style.width = p.style.height = Math.random()*4+2+'px';
  p.style.background = 'rgba(255,255,255,0.6)';
  p.style.borderRadius = '50%';
  p.style.left = Math.random()*100+'%';
  p.style.top = Math.random()*100+'%';
  p.style.animation = `float ${Math.random()*5+3}s infinite`;
  particles.appendChild(p);
}

// Helper function - BULLETPROOF VERSION
function switchScreen(fromId, toId, delay = 0) {
  // 1. Hide ALL screens instantly - prevents overlap bug
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active', 'exiting');
  });
  
  // 2. Show target screen immediately
  document.getElementById(toId).classList.add('active');
  
  // 3. Optional exit animation for fromId only
  if (fromId && delay > 0) {
    const fromScreen = document.getElementById(fromId);
    fromScreen.classList.add('exiting');
    setTimeout(() => {
      fromScreen.classList.remove('exiting');
    }, delay);
  }
  
  window.scrollTo(0, 0);
}

// Screen 1: Envelope with flap animation
function openEnvelopeAnim() {
  const envelope = document.getElementById('mainEnvelope');
  if(envelope.classList.contains('opening')) return;
  envelope.classList.add('opening');
  setTimeout(() => {
    switchScreen('screen1', 'screen2', 300);
  }, 800);
}

// Screen 2 → 3
function goToScreen3() {
  switchScreen('screen2', 'screen3');
}

// Screen 3 → 4
function goToScreen4() {
  switchScreen('screen3', 'screen4');
}

// Screen 3 → 5
function goToScreen5() {
  switchScreen('screen3', 'screen5');
}

// Screen 3 → 6
function goToScreen6() {
  switchScreen('screen3', 'screen6');
}

// Message popup
function zoomLetter() {
  document.getElementById('fullLetter').classList.remove('hidden');
}

// Back to choices screen
function backToChoices() {
  document.getElementById('fullLetter').classList.add('hidden');
  switchScreen('screen4', 'screen3');
}

// Music toggle
function toggleMusic() {
  const audio = document.getElementById('birthdaySong');
  const disc = document.querySelector('.disc');
  const text = document.querySelector('.music-text');
  
  if (audio.paused) {
    audio.play();
    disc.classList.add('playing');
    text.textContent = 'click to pause';
  } else {
    audio.pause();
    disc.classList.remove('playing');
    text.textContent = 'click to play';
  }
}