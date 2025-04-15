let hachiCount = 0;
const dialogue = document.getElementById('dialogue');
const img = document.getElementById('maodie-img');
const btn = document.getElementById('hachi-btn');

btn.addEventListener('click', () => {
  hachiCount++;
  playHachiSound();

  if (hachiCount === 1) {
    dialogue.textContent = '耄耋愣了一下，眉头微皱。';
    img.src = 'assets/images/maodie-angry.png';
  } else if (hachiCount === 2) {
    dialogue.textContent = '他嘴角抽搐……你感到空气变重。';
    img.src = 'assets/images/maodie-humbled.png';
  } else if (hachiCount === 3) {
    dialogue.textContent = '“你……你竟敢连哈三次！”';
    endGame('triple-win');
  } else {
    endGame('fail');
  }
});

function endGame(state) {
  btn.disabled = true;
  if (state === 'triple-win') {
    dialogue.textContent = '耄耋被你的哈气征服，败下阵来！你赢了！';
  } else {
    dialogue.textContent = '耄耋怒吼：“你已经越界！”然后你死了。';
  }
  img.src = 'assets/images/maodie-angry.png';
}

function playHachiSound() {
  const audio = new Audio('assets/sounds/hachi.mp3');
  audio.play();
}
