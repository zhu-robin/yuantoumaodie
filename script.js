let huffCount = 0;
let flirtCount = 0;
let state = "start";
const dialogue = document.getElementById("dialogue");
const character = document.getElementById("character");

function chooseAction(action) {
  if (state === "end") return;

  if (action === "huff") {
    huffCount++;
    dialogue.textContent = `耄耋：第${huffCount}次哈气！`;
    if (huffCount === 3) {
      showEnding("maodie-win.png", "耄耋：就凭这三哈，直接拿下！");
    }
  } else if (action === "roll") {
    dialogue.textContent = "耄耋：地上滚两圈，心情好多了。";
  } else if (action === "stare") {
    dialogue.textContent = "耄耋：你瞅啥？你再瞅一个？";
  } else if (action === "flirt") {
    flirtCount++;
    if (flirtCount === 1) {
      dialogue.textContent = "耄耋：招财？你在吗？";
      character.src = "assets/images/zhaocai.jpg";
    } else if (flirtCount === 2) {
      dialogue.textContent = "招财：哼，我不理你。";
    } else if (flirtCount === 3) {
      dialogue.textContent = "招财：其实我也会哈气……";
      character.src = "assets/images/zhaocai-huff.png";
    } else if (flirtCount === 4) {
      dialogue.textContent = "双贱合璧，拿下略毛！";
      showEnding("maodie-zhaocai-unite.png", "双贱合璧的最终胜利！");
    }
  }

  // 彩蛋结局
  if (huffCount + flirtCount > 10) {
    showEnding("maodie-die.png", "耄耋：太累了，我先走一步……");
  }
}

function showEnding(imageSrc, message) {
  character.src = `assets/images/${imageSrc}`;
  dialogue.textContent = message;
  state = "end";
}

