const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];

const scoreE1 = document.querySelector(".score span");
let score = 0;

const sound = new Audio("assets/smash.mp3");

function run() {
  if (score >= 100) {
    alert("You win!");
    return; // Stop the game if the user wins
  }

  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  let timer = null;

  const img = document.createElement("img");
  img.classList.add("mole");
  img.src = "assets/mole.png";

  img.addEventListener("click", () => {
    score += 10;
    sound.play();
    scoreE1.textContent = score;
    img.src = "assets/mole-whacked.png";
    clearTimeout(timer);
    timer = setTimeout(() => {
      hole.removeChild(img);
      run();
    }, 500);
  });

  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    run();
  }, 1500);
}
run();

//attaches hammer to cursor
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

//when you click cursor rotates down
window.addEventListener("mousedown", () => {
  cursor.classList.add("active");
});

//when you click cursor rotates back up
window.addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});
