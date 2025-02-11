const target = document.getElementById("target");
let yes = document.getElementById("yesButton");

// yes.addEventListener("click", () => {
//   alert(" yey!💕. You made by Heart happy!! 😘😍❤️");
// });

function moveTarget() {
  const maxWidth = 200;
  const maxHeight = 400;

  const ranomX = Math.floor(Math.random() * maxWidth);
  const ranomY = Math.floor(Math.random() * maxHeight);

  target.style.left = ranomX + "px";
  target.style.top = ranomY + "px";
}

target.addEventListener("mouseenter", function () {
  moveTarget();
});
