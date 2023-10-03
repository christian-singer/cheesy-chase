
let score = 0;
const mouseCursor = document.getElementById('mouseCursor');
const scoreCount = document.getElementById('scoreCount');
const gameArea = document.getElementById('gameArea');

function moveCursor(x, y) {
  mouseCursor.style.left = x - 25 + 'px';
  mouseCursor.style.top = y - 25 + 'px';
}

document.addEventListener('mousemove', function(event) {
  moveCursor(event.clientX, event.clientY);
});

document.addEventListener('touchmove', function(event) {
  const touch = event.touches[0];
  moveCursor(touch.clientX, touch.clientY);
  event.preventDefault(); // Verhindert Scrollen beim Touch
});

function spawnCheese() {
  let cheese = document.createElement('div');
  cheese.className = 'cheese';
  cheese.style.left = Math.random() * 770 + 'px';
  cheese.style.top = Math.random() * 570 + 'px';
  gameArea.appendChild(cheese);

  function collectCheese() {
    cheese.remove();
    score++;
    scoreCount.textContent = score;
  }

  cheese.addEventListener('mouseenter', collectCheese);
  cheese.addEventListener('touchstart', function(event) {
    collectCheese();
    event.preventDefault(); // Verhindert zusätzliche Touch-Events
  });
}

setInterval(spawnCheese, 2000);
