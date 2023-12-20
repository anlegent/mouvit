let block = document.querySelector ("#block");

window.addEventListener("load", () => {
  block.style.position = "absolute";
  block.style.left = 0;
  block.style.top = 0;
});

window.addEventListener("keyup", (moveblock) => {
  switch (moveblock.key) {
    case "ArrowLeft" :
      block.style.left = parseInt(block.style.left) - 5 + "px";
      break;
    case "ArrowRight":
      block.style.left = parseInt(block.style.left) + 5 + "px";
      break;
    case "ArrowUp":
      block.style.top = parseInt(block.style.top) - 5 + "px";
      break;
    case "ArrowDown":
      block.style.top = parseInt(block.style.top) + 5 + "px";
      break;
  }
});
